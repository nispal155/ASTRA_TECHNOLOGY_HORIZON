import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Get a Free Software Development Quote",
  description:
    "Request a free, no-obligation quote for web development, mobile apps, UI/UX design, cloud infrastructure or digital marketing from Astra Technology Horizon in Itahari, Nepal.",
  path: "/quote",
});

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
