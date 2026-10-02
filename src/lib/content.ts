import projects from "@content/projects.json";
import jobs from "@content/jobs.json";
import locations from "@content/locations.json";
import pricing from "@content/pricing.json";
import testimonials from "@content/testimonials.json";
import clients from "@content/clients.json";
import team from "@content/team.json";

/**
 * Draft content (placeholders waiting for real business facts) is shown in
 * development, or when NEXT_PUBLIC_SHOW_DRAFTS=true, and hidden in production.
 */
export const SHOW_DRAFTS =
  process.env.NEXT_PUBLIC_SHOW_DRAFTS === "true" || process.env.NODE_ENV === "development";

export const isVisible = (item: { draft?: boolean }) => !item.draft || SHOW_DRAFTS;

export type Project = (typeof projects)[number];
export type Job = (typeof jobs)[number];
export type Location = (typeof locations)[number];
export type Pricing = typeof pricing;

export const allProjects: Project[] = projects;
export const featuredProjects = projects.filter((p) => p.featured);
export const getProject = (id: string) => projects.find((p) => p.id === id);

export const allJobs: Job[] = jobs;
export const getJob = (slug: string) => jobs.find((j) => j.slug === slug);

export const allLocations: Location[] = locations;
export const visibleLocations = locations.filter(isVisible);
export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);

export { pricing, testimonials, clients, team };
