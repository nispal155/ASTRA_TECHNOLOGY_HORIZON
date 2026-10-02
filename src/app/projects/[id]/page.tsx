import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";
import { pageMetadata } from "@/lib/seo";

interface CaseStudyProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: CaseStudyProps): Promise<Metadata> {
  const { id } = await params;
  return pageMetadata({
    title: "Case Study Coming Soon",
    description: "This Astra Technology Horizon project case study is being documented. Explore our other software projects in the meantime.",
    path: `/projects/${id}`,
    noindex: true,
  });
}

export default async function CaseStudy({ params }: CaseStudyProps) {
  const { id } = await params;
  return (
    <PlaceholderPage
      title="Case Study in Progress"
      message="We are currently documenting the engineering challenges and business impact of this project. The full case study will be published soon."
      backHref="/projects"
      backLabel="Back to Projects"
      breadcrumbs={[
        { name: "Projects", path: "/projects" },
        { name: "Case Study", path: `/projects/${id}` },
      ]}
    />
  );
}
