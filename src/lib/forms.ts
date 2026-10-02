/** Shared definitions for website forms (used by the API route and the client). */

export type FormType = "contact" | "quote" | "careers" | "newsletter";

export const MAX_UPLOAD_BYTES = 4 * 1024 * 1024; // keep below serverless body limits
export const ALLOWED_UPLOAD_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

interface FieldRule {
  label: string;
  required?: boolean;
  max: number;
  email?: boolean;
}

export const formFields: Record<FormType, Record<string, FieldRule>> = {
  contact: {
    name: { label: "Name", required: true, max: 120 },
    email: { label: "Email", required: true, max: 200, email: true },
    service: { label: "Service", required: true, max: 120 },
    message: { label: "Message", required: true, max: 5000 },
  },
  quote: {
    name: { label: "Name", required: true, max: 120 },
    email: { label: "Email", required: true, max: 200, email: true },
    phone: { label: "Phone", max: 40 },
    company: { label: "Company", max: 160 },
    service: { label: "Service", required: true, max: 120 },
    budget: { label: "Budget", max: 60 },
    estimate: { label: "Estimator summary", max: 1000 },
    message: { label: "Project details", required: true, max: 5000 },
  },
  careers: {
    role: { label: "Position", required: true, max: 120 },
    name: { label: "Name", required: true, max: 120 },
    email: { label: "Email", required: true, max: 200, email: true },
    phone: { label: "Phone", required: true, max: 40 },
    portfolio: { label: "Portfolio / LinkedIn", max: 300 },
    message: { label: "Cover letter", required: true, max: 5000 },
  },
  newsletter: {
    email: { label: "Email", required: true, max: 200, email: true },
  },
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Returns cleaned values or an error message. */
export function validate(type: FormType, input: Record<string, unknown>) {
  const values: Record<string, string> = {};
  for (const [key, rule] of Object.entries(formFields[type])) {
    const raw = typeof input[key] === "string" ? (input[key] as string).trim() : "";
    if (rule.required && !raw) return { error: `${rule.label} is required.` };
    if (raw.length > rule.max) return { error: `${rule.label} is too long.` };
    if (rule.email && raw && !EMAIL_RE.test(raw)) return { error: "Please enter a valid email address." };
    if (raw) values[key] = raw;
  }
  return { values };
}
