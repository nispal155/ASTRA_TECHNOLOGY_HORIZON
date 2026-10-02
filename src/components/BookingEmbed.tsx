import { CalendarDays } from "lucide-react";
import { integrations, site } from "@/lib/site";

/** Inline Calendly scheduler for free consultations. Renders nothing until NEXT_PUBLIC_CALENDLY_URL is set. */
export default function BookingEmbed({ heading = "Book a Free Consultation" }: { heading?: string }) {
  const url = integrations.calendlyUrl;
  if (!url) return null;

  const src = `${url}${url.includes("?") ? "&" : "?"}hide_gdpr_banner=1&embed_type=Inline&embed_domain=${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://astratech.com.np").host}`;

  return (
    <section aria-labelledby="booking-heading" className="card overflow-hidden">
      <div className="flex items-center gap-3 p-5 border-b border-brand-border">
        <CalendarDays className="w-5 h-5 text-brand-accent" aria-hidden="true" />
        <h2 id="booking-heading" className="text-xl font-bold text-brand-primary">{heading}</h2>
      </div>
      <iframe
        src={src}
        title={`Schedule a call with ${site.name}`}
        loading="lazy"
        className="w-full h-[700px] border-0 bg-brand-card"
      />
      <p className="p-4 text-sm text-brand-text-secondary">
        Prefer another time? <a href={url} target="_blank" rel="noopener noreferrer" className="text-brand-accent font-semibold hover:underline">Open the booking page</a>.
      </p>
    </section>
  );
}
