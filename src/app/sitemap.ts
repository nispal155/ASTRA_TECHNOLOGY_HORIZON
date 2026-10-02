import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { servicesData } from "@/data/services";
import { getAllPosts } from "@/lib/blog";
import { allJobs, allLocations, allProjects, pricing } from "@/lib/content";

type Freq = "weekly" | "monthly" | "yearly";

/** Public, published pages only — drafts and noindex pages are left out. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entry = (path: string, priority: number, changeFrequency: Freq, extra: Partial<MetadataRoute.Sitemap[number]> = {}) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
    ...extra,
  });

  return [
    entry("/", 1, "weekly", { alternates: { languages: { en: absoluteUrl("/"), ne: absoluteUrl("/ne") } } }),
    entry("/ne", 0.7, "monthly", { alternates: { languages: { en: absoluteUrl("/"), ne: absoluteUrl("/ne") } } }),
    entry("/about", 0.8, "monthly"),
    entry("/contact", 0.9, "yearly"),
    entry("/quote", 0.9, "monthly"),
    ...(pricing.draft ? [] : [entry("/pricing", 0.8, "monthly")]),
    entry("/projects", 0.8, "monthly"),
    entry("/careers", 0.6, "weekly"),
    entry("/blog", 0.6, "weekly"),
    entry("/privacy", 0.2, "yearly"),
    entry("/terms", 0.2, "yearly"),
    ...servicesData.map((s) => entry(`/services/${s.id}`, 0.9, "monthly")),
    ...allLocations.filter((l) => !l.draft).map((l) => entry(`/locations/${l.slug}`, 0.8, "monthly")),
    ...allProjects.filter((p) => !p.caseStudy.draft).map((p) => entry(`/projects/${p.id}`, 0.6, "yearly")),
    ...getAllPosts().filter((p) => !p.draft).map((p) => entry(`/blog/${p.slug}`, 0.6, "yearly", { lastModified: new Date(p.date) })),
    ...allJobs.map((j) => entry(`/careers/${j.slug}`, 0.5, "weekly")),
  ];
}
