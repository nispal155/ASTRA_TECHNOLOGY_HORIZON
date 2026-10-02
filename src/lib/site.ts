/**
 * Single source of truth for business details (NAP: Name, Address, Phone).
 * Footer, contact section, structured data and the office map all read
 * from here so the information stays consistent across the site.
 */

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://astratech.com.np").replace(/\/$/, "");

export const site = {
  name: "Astra Technology Horizon",
  shortName: "Astra Tech",
  tagline: "Software Development & IT Solutions in Nepal",
  description:
    "Astra Technology Horizon is a software development and IT consulting company in Itahari, Nepal, building web applications, mobile apps, cloud infrastructure and digital marketing solutions for growing businesses.",
  logo: "/Company-Logo.jpg",
  email: "contact@astratech.com.np",
  phone: {
    display: "+977 985-2048719",
    e164: "+9779852048719",
  },
  whatsapp: "https://wa.me/9779852048719",
  address: {
    street: "Itahari-4",
    locality: "Itahari",
    district: "Sunsari",
    region: "Koshi Province",
    postalCode: "56705",
    country: "Nepal",
    countryCode: "NP",
  },
  areaServed: ["Itahari", "Sunsari", "Koshi Province", "Nepal"],
  hours: [
    { label: "Sunday – Thursday", days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"], opens: "10:00", closes: "17:00", display: "10:00 AM – 5:00 PM" },
    { label: "Friday", days: ["Friday"], opens: "10:00", closes: "14:00", display: "10:00 AM – 2:00 PM" },
    { label: "Saturday", days: ["Saturday"], opens: null, closes: null, display: "Closed" },
  ],
  sameAs: [
    "https://www.linkedin.com/company/astra-technology-horizon",
    "https://www.facebook.com/astratechnologyhorizon",
    ...(process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL ? [process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL] : []),
  ],
} as const;

export const fullAddress = `${site.address.street}, ${site.address.district}, ${site.address.region}, ${site.address.country}`;

/**
 * Map location. Set NEXT_PUBLIC_OFFICE_MAP_QUERY to exact coordinates
 * ("26.6646,87.2718") or a Google Maps place name once the pin is confirmed.
 */
// Until exact coordinates are configured, fall back to a city-level pin: the business name
// matches an unrelated Google listing and the ward number does not geocode reliably.
export const hasExactMapLocation = Boolean(process.env.NEXT_PUBLIC_OFFICE_MAP_QUERY);
export const mapQuery =
  process.env.NEXT_PUBLIC_OFFICE_MAP_QUERY || `${site.address.locality}, ${site.address.district}, ${site.address.region}, Nepal`;

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapQuery)}`;
export const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;

/** Parses NEXT_PUBLIC_OFFICE_MAP_QUERY as "lat,lng" when it is coordinates. */
export const geo = (() => {
  const match = process.env.NEXT_PUBLIC_OFFICE_MAP_QUERY?.match(/^\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*$/);
  return match ? { latitude: Number(match[1]), longitude: Number(match[2]) } : null;
})();

export const absoluteUrl = (path = "/") => `${SITE_URL}${path}`;

/** Optional third-party integrations — each feature stays hidden until its variable is set. */
export const integrations = {
  googleBusinessUrl: process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL || "",
  googleReviewUrl: process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL || "",
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || "",
  gaId: process.env.NEXT_PUBLIC_GA_ID || "",
  plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || "",
};
