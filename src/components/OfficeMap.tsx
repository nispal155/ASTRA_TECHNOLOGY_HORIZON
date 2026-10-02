import { MapPin, Navigation } from "lucide-react";
import { site, fullAddress, mapQuery, directionsUrl, hasExactMapLocation } from "@/lib/site";

/**
 * Responsive Google Maps embed of the office.
 * - Without a key: uses the keyless embed URL.
 * - With NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY: uses the Maps Embed API (place mode).
 */
export default function OfficeMap() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY;
  const zoom = hasExactMapLocation ? 17 : 14;
  const src = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(mapQuery)}&zoom=${zoom}`
    : `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=${zoom}&output=embed`;

  return (
    <div className="card overflow-hidden">
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] bg-brand-accent-soft">
        <iframe
          src={src}
          title={`Map showing the ${site.name} office in ${site.address.locality}, ${site.address.district}`}
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5">
        <address className="not-italic flex items-start gap-3 text-sm text-brand-text-secondary">
          <MapPin className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" aria-hidden="true" />
          <span>
            <span className="block font-semibold text-brand-primary">{site.name}</span>
            {fullAddress}
          </span>
        </address>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary px-5 py-2.5 text-sm shrink-0"
        >
          <Navigation className="w-4 h-4" aria-hidden="true" />
          Get Directions
        </a>
      </div>
    </div>
  );
}
