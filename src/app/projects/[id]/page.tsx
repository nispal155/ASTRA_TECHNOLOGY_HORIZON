import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import PlaceholderPage from "@/components/PlaceholderPage";
import DraftBanner from "@/components/DraftBanner";
import { allProjects, getProject, isVisible } from "@/lib/content";
import { servicesData } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

interface CaseStudyProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return allProjects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: CaseStudyProps): Promise<Metadata> {
  const project = getProject((await params).id);
  if (!project) return {};
  const published = isVisible(project.caseStudy) && !project.caseStudy.draft;
  return pageMetadata({
    title: published ? `${project.title} Case Study` : `${project.title} — Case Study Coming Soon`,
    description: project.summary,
    path: `/projects/${project.id}`,
    noindex: !published,
  });
}

export default async function CaseStudy({ params }: CaseStudyProps) {
  const project = getProject((await params).id);
  if (!project) notFound();
  const cs = project.caseStudy;

  // Unreviewed case studies show a holding page in production.
  if (!isVisible(cs)) {
    return (
      <PlaceholderPage
        title={`${project.title}: Case Study in Progress`}
        message="We are currently documenting the engineering challenges and business impact of this project. The full case study will be published soon."
        backHref="/projects"
        backLabel="Back to Projects"
        breadcrumbs={[{ name: "Projects", path: "/projects" }, { name: project.title, path: `/projects/${project.id}` }]}
      />
    );
  }

  const services = servicesData.filter((s) => cs.services.includes(s.id));

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg">
      <Navbar />
      <main id="main" className="flex-grow pt-16 sm:pt-20">
        {cs.draft && <DraftBanner what="case study" />}
        <section className="bg-gradient-to-b from-brand-accent-soft to-brand-bg pt-10 pb-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ name: "Projects", path: "/projects" }, { name: project.title, path: `/projects/${project.id}` }]} className="mb-10" />
            <p className="text-brand-accent font-semibold text-sm uppercase tracking-wider mb-3">{project.category} · Case Study</p>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-primary tracking-tight mb-6 text-balance">{project.title}</h1>
            <p className="text-lg sm:text-xl text-brand-text-secondary max-w-3xl">{project.description}</p>
            <dl className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl">
              <div className="card p-4"><dt className="text-xs uppercase font-semibold text-brand-text-secondary">Client</dt><dd className="font-semibold text-brand-primary mt-1">{cs.client}</dd></div>
              <div className="card p-4"><dt className="text-xs uppercase font-semibold text-brand-text-secondary">Duration</dt><dd className="font-semibold text-brand-primary mt-1">{cs.duration}</dd></div>
              <div className="card p-4 col-span-2 sm:col-span-1"><dt className="text-xs uppercase font-semibold text-brand-text-secondary">Stack</dt><dd className="font-semibold text-brand-primary mt-1">{project.tech.join(", ")}</dd></div>
            </dl>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[16/9] rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-card-hover)]">
            <Image src={project.image} alt={project.imageAlt} fill priority sizes="(min-width: 1024px) 1024px, 100vw" className="object-cover" />
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-14 space-y-12 text-brand-text-secondary text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-brand-primary mb-4">The Challenge</h2>
            <p>{cs.challenge}</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-brand-primary mb-4">Our Solution</h2>
            <p>{cs.solution}</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-brand-primary mb-4">Results</h2>
            <ul className="space-y-3">
              {cs.results.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </section>
          {services.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-brand-primary mb-4">Services Used</h2>
              <ul className="flex flex-wrap gap-3">
                {services.map((s) => (
                  <li key={s.id}>
                    <Link href={`/services/${s.id}`} className="btn-secondary px-4 py-2 text-sm">{s.title}</Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
          <div className="card p-8 text-center">
            <h2 className="text-2xl font-bold text-brand-primary mb-3">Want results like these?</h2>
            <p className="mb-6">Tell us about your project and get a tailored proposal.</p>
            <Link href="/quote" className="btn-primary px-6 py-3">Request a Proposal <ArrowRight className="w-4 h-4" aria-hidden="true" /></Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
