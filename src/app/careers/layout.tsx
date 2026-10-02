import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "IT Jobs & Internships in Itahari, Nepal",
  description:
    "Join Astra Technology Horizon. Explore open software engineering, cloud and design roles and internship programs in Itahari, Nepal and remote.",
  path: "/careers",
});

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
