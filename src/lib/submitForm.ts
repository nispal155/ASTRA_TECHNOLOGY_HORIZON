"use client";

import type { FormType } from "./forms";
import { track } from "./analytics";

/** Posts a website form to /api/forms and records a conversion on success. */
export async function submitForm(
  formType: FormType,
  fields: Record<string, string | File | null | undefined>,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const body = new FormData();
  body.set("formType", formType);
  for (const [key, value] of Object.entries(fields)) {
    if (value) body.set(key, value);
  }

  try {
    const res = await fetch("/api/forms", { method: "POST", body });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) return { ok: false, error: data.error || "Something went wrong. Please try again." };
    track("form_submit", { form: formType });
    return { ok: true };
  } catch {
    return { ok: false, error: "Network error. Please check your connection and try again." };
  }
}
