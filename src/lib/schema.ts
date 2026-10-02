import { site, SITE_URL, absoluteUrl, geo, mapUrl } from "./site";

const ORG_ID = `${SITE_URL}/#organization`;
const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: site.address.street,
  addressLocality: site.address.locality,
  addressRegion: site.address.region,
  postalCode: site.address.postalCode,
  addressCountry: site.address.countryCode,
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: site.name,
    url: SITE_URL,
    logo: absoluteUrl(site.logo),
    email: site.email,
    telephone: site.phone.e164,
    address: postalAddress,
    sameAs: site.sameAs,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone.e164,
      email: site.email,
      contactType: "customer service",
      areaServed: site.address.countryCode,
      availableLanguage: ["English", "Nepali"],
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: site.name,
    url: SITE_URL,
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": BUSINESS_ID,
    name: site.name,
    description: site.description,
    url: SITE_URL,
    logo: absoluteUrl(site.logo),
    image: absoluteUrl(site.logo),
    email: site.email,
    telephone: site.phone.e164,
    address: postalAddress,
    ...(geo ? { geo: { "@type": "GeoCoordinates", ...geo } } : {}),
    hasMap: mapUrl,
    areaServed: site.areaServed.map((name) => ({ "@type": "Place", name })),
    openingHoursSpecification: site.hours
      .filter((h) => h.opens)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.days,
        opens: h.opens,
        closes: h.closes,
      })),
    parentOrganization: { "@id": ORG_ID },
    sameAs: site.sameAs,
  };
}

export function serviceSchema(service: { id: string; title: string; description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.description,
    url: absoluteUrl(`/services/${service.id}`),
    provider: { "@id": BUSINESS_ID },
    areaServed: site.areaServed.map((name) => ({ "@type": "Place", name })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
