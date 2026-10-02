import type { Metadata } from "next";
import { site, SITE_URL } from "./site";

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}

/**
 * Builds complete per-page metadata. Next.js merges metadata shallowly, so
 * openGraph/twitter must be repeated in full for each page.
 */
export function pageMetadata({ title, description, path, noindex }: PageMetaInput): Metadata {
  const fullTitle = `${title} | ${site.name}`;
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  return {
    // Absolute so nested layouts with their own titles never drop the brand suffix
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url,
      siteName: site.name,
      locale: "en_US",
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
