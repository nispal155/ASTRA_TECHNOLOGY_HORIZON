import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPin, Clock, Briefcase, CalendarDays } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import ApplicationForm from "@/components/ApplicationForm";
import { allJobs, getJob } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { jobPostingSchema } from "@/lib/schema";

interface JobPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return allJobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: JobPageProps): Promise<Metadata> {
  const job = getJob((await params).slug);
  if (!job) return {};
  return pageMetadata({
    title: `${job.title} — ${job.location}`,
    description: `${job.description} Apply to join Astra Technology Horizon in Itahari, Nepal.`.slice(0, 160),
    path: `/careers/${job.slug}`,
  });
}

export default async function JobPage({ params }: JobPageProps) {
  const job = getJob((await params).slug);
  if (!job) notFound();

  return (
    <div className="flex flex-col min-h-screen bg-brand-surface">
      <JsonLd data={jobPostingSchema(job)} />
      <Navbar />
      <main id="main" className="flex-grow pt-16 sm:pt-20">
        <section className="pt-10 pb-12 bg-gradient-to-b from-brand-accent-soft to-brand-bg border-b border-brand-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ name: "Careers", path: "/careers" }, { name: job.title, path: `/careers/${job.slug}` }]} className="mb-10" />
            <p className="text-brand-accent font-semibold text-sm uppercase tracking-wider mb-3">{job.department}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-primary tracking-tight mb-6">{job.title}</h1>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-brand-text-secondary">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-brand-accent" aria-hidden="true" />{job.location}</li>
              <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-brand-accent" aria-hidden="true" />{job.type}</li>
              <li className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-brand-accent" aria-hidden="true" />{job.kind === "internship" ? "Internship" : "Job"}</li>
              <li className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-brand-accent" aria-hidden="true" />
                Posted <time dateTime={job.datePosted}>{new Date(job.datePosted).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
              </li>
            </ul>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 lg:grid-cols-5 gap-12">
          <article className="lg:col-span-3 space-y-8 text-brand-text-secondary leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-brand-primary mb-3">About the role</h2>
              <p className="text-lg">{job.description}</p>
            </section>
            {job.responsibilities.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-brand-primary mb-3">Responsibilities</h2>
                <ul className="list-disc pl-6 space-y-2">{job.responsibilities.map((r) => <li key={r}>{r}</li>)}</ul>
              </section>
            )}
            {job.requirements.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-brand-primary mb-3">Requirements</h2>
                <ul className="list-disc pl-6 space-y-2">{job.requirements.map((r) => <li key={r}>{r}</li>)}</ul>
              </section>
            )}
            <section>
              <h2 className="text-2xl font-bold text-brand-primary mb-3">Why Astra Technology Horizon?</h2>
              <p>
                Work on real client projects with a small, senior-led team in Itahari, learn modern tools like React, Next.js and the cloud,
                and grow your career with mentorship and clear feedback.
              </p>
            </section>
          </article>

          <aside className="lg:col-span-2">
            <div id="apply" className="card p-6 sm:p-8 lg:sticky lg:top-28">
              <h2 className="text-xl font-bold text-brand-primary mb-6">Apply for this role</h2>
              <ApplicationForm jobs={allJobs} defaultRole={job.title} />
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
