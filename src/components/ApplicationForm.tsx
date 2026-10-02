"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { FormInput, FormTextarea, FormSelect, FormAlert } from "./FormFields";
import Honeypot from "./Honeypot";
import { submitForm } from "@/lib/submitForm";
import { useQueryParam } from "@/lib/useQueryParam";
import { MAX_UPLOAD_BYTES } from "@/lib/forms";

interface ApplicationFormProps {
  jobs: { title: string; kind: string }[];
  /** Pre-selected position (e.g. on a job detail page). */
  defaultRole?: string;
}

const empty = { name: "", email: "", phone: "", role: "", portfolio: "", message: "" };

export default function ApplicationForm({ jobs, defaultRole }: ApplicationFormProps) {
  const [formData, setFormData] = useState(empty);
  const [cv, setCv] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [honeypot, setHoneypot] = useState("");

  // Pre-select a role when linked with /careers?role=...
  const requestedRole = useQueryParam("role");
  const selectedRole = formData.role || defaultRole || requestedRole || jobs[0]?.title || "Other";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (file && file.size > MAX_UPLOAD_BYTES) {
      setError("CV must be 4 MB or smaller.");
      e.target.value = "";
      setCv(null);
      return;
    }
    setError("");
    setCv(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);
    setError("");

    const result = await submitForm("careers", { ...formData, role: selectedRole, cv, website: honeypot });
    setIsSubmitting(false);

    if (result.ok) {
      setIsSubmitted(true);
      setFormData(empty);
      setCv(null);
      form.reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      setError(result.error);
    }
  };

  if (isSubmitted) {
    return (
      <div role="status" className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 bg-brand-success-soft rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8 text-brand-success" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold text-brand-primary mb-2">Application Received!</h3>
        <p className="text-brand-text-secondary">Thank you for your interest. Our hiring team will review your application and get back to you soon.</p>
      </div>
    );
  }

  const fullTime = jobs.filter((j) => j.kind === "job");
  const internships = jobs.filter((j) => j.kind === "internship");

  return (
    <form onSubmit={handleSubmit} className="relative space-y-6">
      {error && <FormAlert type="error">{error}</FormAlert>}
      <Honeypot value={honeypot} onChange={setHoneypot} />

      <FormSelect id="role" name="role" label="Position Applying For" value={selectedRole} onChange={handleChange}>
        {fullTime.length > 0 && (
          <optgroup label="Full-Time Roles">
            {fullTime.map((j) => <option key={j.title} value={j.title}>{j.title}</option>)}
          </optgroup>
        )}
        {internships.length > 0 && (
          <optgroup label="Internships">
            {internships.map((j) => <option key={j.title} value={j.title}>{j.title}</option>)}
          </optgroup>
        )}
        <option value="Other">Other / Spontaneous Application</option>
      </FormSelect>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput id="name" name="name" label="Full Name" required autoComplete="name" placeholder="John Doe" value={formData.name} onChange={handleChange} />
        <FormInput id="email" name="email" type="email" label="Email Address" required autoComplete="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput id="phone" name="phone" type="tel" label="Phone Number" required autoComplete="tel" placeholder="+977 98..." value={formData.phone} onChange={handleChange} />
        <FormInput id="portfolio" name="portfolio" type="url" label="Portfolio / LinkedIn URL" placeholder="https://" value={formData.portfolio} onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="cv" className="block text-sm font-medium text-brand-primary mb-2">
          CV / Resume <span className="font-normal text-brand-text-secondary">(PDF or Word, max 4 MB)</span>
        </label>
        <input
          id="cv"
          name="cv"
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={handleFile}
          className="block w-full text-sm text-brand-text-secondary file:mr-4 file:rounded-[var(--radius-control)] file:border-0 file:bg-brand-accent-soft file:px-4 file:py-2.5 file:font-semibold file:text-brand-accent hover:file:bg-brand-accent-muted file:cursor-pointer border border-brand-border-dark rounded-[var(--radius-control)] bg-brand-card p-1.5"
        />
      </div>

      <FormTextarea id="message" name="message" label="Cover Letter / Message" required rows={4} placeholder="Tell us why you're a great fit..." value={formData.message} onChange={handleChange} />

      <button type="submit" disabled={isSubmitting} className="btn-primary w-full py-3.5">
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            Submitting...
          </>
        ) : (
          <>Submit Application <Send className="w-4 h-4" aria-hidden="true" /></>
        )}
      </button>
    </form>
  );
}
