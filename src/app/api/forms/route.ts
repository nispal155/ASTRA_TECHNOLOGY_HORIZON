import { NextResponse } from "next/server";
import { site } from "@/lib/site";
import {
  formFields,
  validate,
  MAX_UPLOAD_BYTES,
  ALLOWED_UPLOAD_TYPES,
  type FormType,
} from "@/lib/forms";

const FORM_TYPES = Object.keys(formFields) as FormType[];
const SUBJECTS: Record<FormType, (v: Record<string, string>) => string> = {
  contact: (v) => `New contact message: ${v.service}`,
  quote: (v) => `New quote request: ${v.service}`,
  careers: (v) => `New job application: ${v.role}`,
  newsletter: () => "New newsletter subscriber",
};

// Best-effort in-memory rate limit (per server instance): 5 submissions / 10 minutes / IP.
const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > LIMIT;
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

async function resend(path: string, body: unknown) {
  const res = await fetch(`https://api.resend.com${path}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Resend ${path} failed: ${res.status} ${await res.text()}`);
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many submissions. Please try again in a few minutes." }, { status: 429 });
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
  }

  const type = form.get("formType") as FormType;
  if (!FORM_TYPES.includes(type)) {
    return NextResponse.json({ error: "Unknown form." }, { status: 400 });
  }

  // Honeypot: real users never fill the hidden "website" field.
  if (form.get("website")) return NextResponse.json({ ok: true });

  const input = Object.fromEntries([...form.entries()].filter(([, v]) => typeof v === "string"));
  const result = validate(type, input);
  if ("error" in result) return NextResponse.json({ error: result.error }, { status: 400 });
  const values = result.values;

  let attachment: { filename: string; content: string } | undefined;
  const file = form.get("cv");
  if (type === "careers" && file instanceof File && file.size > 0) {
    if (file.size > MAX_UPLOAD_BYTES) return NextResponse.json({ error: "CV must be 4 MB or smaller." }, { status: 400 });
    if (!ALLOWED_UPLOAD_TYPES.includes(file.type)) {
      return NextResponse.json({ error: "CV must be a PDF or Word document." }, { status: 400 });
    }
    attachment = {
      filename: file.name.replace(/[^\w.\- ]/g, "_").slice(0, 100),
      content: Buffer.from(await file.arrayBuffer()).toString("base64"),
    };
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("[forms] RESEND_API_KEY is not set — submission not delivered", { type });
    return NextResponse.json(
      { error: `Online forms are temporarily unavailable. Please email us at ${site.email}.` },
      { status: 503 },
    );
  }

  try {
    if (type === "newsletter" && process.env.RESEND_AUDIENCE_ID) {
      await resend(`/audiences/${process.env.RESEND_AUDIENCE_ID}/contacts`, { email: values.email, unsubscribed: false });
    } else {
      const rows = Object.entries(formFields[type])
        .filter(([key]) => values[key])
        .map(([key, rule]) => `<tr><th align="left" style="padding:4px 12px 4px 0;vertical-align:top">${rule.label}</th><td style="padding:4px 0;white-space:pre-wrap">${escapeHtml(values[key])}</td></tr>`)
        .join("");
      await resend("/emails", {
        from: process.env.FORM_FROM_EMAIL || `${site.name} Website <onboarding@resend.dev>`,
        to: [process.env.FORM_TO_EMAIL || site.email],
        reply_to: values.email,
        subject: SUBJECTS[type](values),
        html: `<h2>${escapeHtml(SUBJECTS[type](values))}</h2><table>${rows}</table>`,
        ...(attachment ? { attachments: [attachment] } : {}),
      });
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[forms] delivery failed", error);
    return NextResponse.json(
      { error: `Sorry, we couldn't send your message. Please email us at ${site.email}.` },
      { status: 502 },
    );
  }
}
