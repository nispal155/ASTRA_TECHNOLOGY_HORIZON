import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";
import { pageMetadata } from "@/lib/seo";

interface ArticleProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ArticleProps): Promise<Metadata> {
  const { slug } = await params;
  return pageMetadata({
    title: "Article Coming Soon",
    description: "This technical article from the Astra Technology Horizon engineering team is being finalized. Check back soon.",
    path: `/blog/${slug}`,
    noindex: true,
  });
}

export default async function Article({ params }: ArticleProps) {
  const { slug } = await params;
  return (
    <PlaceholderPage
      title="Article in Progress"
      message="Our engineering team is finalizing the content for this technical deep-dive. Check back soon."
      backHref="/#insights"
      backLabel="Back to Insights"
      breadcrumbs={[
        { name: "Blog", path: "/blog" },
        { name: "Article", path: `/blog/${slug}` },
      ]}
    />
  );
}
