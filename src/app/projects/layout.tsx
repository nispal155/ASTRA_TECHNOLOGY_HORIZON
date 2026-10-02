import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Software Projects & Portfolio",
  description:
    "Explore web applications, mobile apps, dashboards and AI solutions engineered by Astra Technology Horizon, a software development company in Nepal.",
  path: "/projects",
});

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
