import PlaceholderPage from "@/components/PlaceholderPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Software Engineering Blog & Insights",
  description:
    "Technical deep-dives, case studies and insights on web development, cloud and UI/UX design from the engineering team at Astra Technology Horizon, Nepal.",
  path: "/blog",
});

export default function BlogList() {
  return (
    <PlaceholderPage
      title="Insights & Engineering Blog"
      message="We are currently writing detailed case studies and technical deep-dives. Our blog will be launching soon."
      backHref="/"
      backLabel="Back to Home"
      breadcrumbs={[{ name: "Blog", path: "/blog" }]}
    />
  );
}
