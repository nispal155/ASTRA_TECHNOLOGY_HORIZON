"use client";

import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import Honeypot from "./Honeypot";
import { submitForm } from "@/lib/submitForm";

/** Footer newsletter signup (stored in a Resend audience when RESEND_AUDIENCE_ID is set). */
export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const result = await submitForm("newsletter", { email, website: honeypot });
    if (result.ok) {
      setStatus("done");
      setEmail("");
    } else {
      setStatus("error");
      setError(result.error);
    }
  };

  if (status === "done") {
    return <p role="status" className="text-sm text-emerald-300">Thanks for subscribing! We&rsquo;ll send occasional tech tips and company news.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="relative">
      <Honeypot value={honeypot} onChange={setHoneypot} />
      <label htmlFor="newsletter-email" className="block text-sm text-slate-300 mb-2">
        Get occasional tech tips and company news.
      </label>
      <div className="flex gap-2">
        <input
          id="newsletter-email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="min-w-0 flex-1 rounded-[var(--radius-control)] bg-white/10 border border-white/20 px-3 py-2.5 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-400"
        />
        <button type="submit" disabled={status === "sending"} className="btn-primary px-4 py-2.5 text-sm" aria-label="Subscribe to newsletter">
          {status === "sending" ? <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" /> : <Send className="w-4 h-4" aria-hidden="true" />}
          <span className="hidden sm:inline">Subscribe</span>
        </button>
      </div>
      {status === "error" && <p role="alert" className="mt-2 text-sm text-red-300">{error}</p>}
    </form>
  );
}
