import Link from "next/link";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import type { Job } from "@/lib/content";

export default function JobCard({ job }: { job: Job }) {
  return (
    <article className="card relative p-6 hover:border-brand-accent hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 group">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="px-3 py-1 bg-brand-accent-soft text-brand-accent-hover border border-brand-accent-muted text-xs font-semibold rounded">{job.department}</span>
        <span className="flex items-center gap-1 text-brand-text-secondary text-sm"><MapPin className="w-4 h-4" aria-hidden="true" /> {job.location}</span>
        <span className="flex items-center gap-1 text-brand-text-secondary text-sm"><Clock className="w-4 h-4" aria-hidden="true" /> {job.type}</span>
      </div>
      <h3 className="text-xl font-semibold text-brand-primary mb-2 group-hover:text-brand-accent transition-colors">{job.title}</h3>
      <p className="text-brand-text-secondary text-sm leading-relaxed mb-4">{job.description}</p>
      <Link
        href={`/careers/${job.slug}`}
        className="inline-flex items-center gap-1 text-sm font-semibold text-brand-accent hover:text-brand-accent-hover after:absolute after:inset-0 after:content-['']"
      >
        View role &amp; apply<span className="sr-only">: {job.title}</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
      </Link>
    </article>
  );
}
