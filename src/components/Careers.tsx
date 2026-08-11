"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import TextReveal from "./TextReveal";

const jobs = [
  {
    id: "frontend",
    title: "Senior Frontend Engineer",
    location: "Itahari, Nepal (Hybrid)",
    type: "Full-time",
    department: "Engineering",
    description: "We are looking for an engineer experienced in Next.js, React, and TypeScript to build performant web applications for client products.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
  {
    id: "cloud",
    title: "Cloud Infrastructure Architect",
    location: "Remote",
    type: "Full-time",
    department: "DevOps",
    description: "Design, deploy, and maintain scalable cloud infrastructure on AWS and Azure. Hands-on experience with Kubernetes and Terraform required.",
    tech: ["AWS", "Azure", "Kubernetes", "Terraform"],
  },
  {
    id: "design",
    title: "UI/UX Designer",
    location: "Itahari, Nepal (On-site)",
    type: "Part-time",
    department: "Design",
    description: "Help us craft clean, user-friendly digital interfaces and design systems for web and mobile products.",
    tech: ["Figma", "Prototyping", "Wireframing"],
  },
  {
    id: "intern",
    title: "Software Engineering Intern",
    location: "Itahari, Nepal (On-site)",
    type: "Internship",
    department: "Engineering",
    description: "Gain hands-on experience working on web applications under senior developer mentorship.",
    tech: ["React", "Next.js", "TypeScript"],
  },
];

export default function Careers() {
  return (
    <section id="careers" className="py-24 md:py-32 bg-brand-light-slate border-b border-slate-200 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-sm font-semibold text-brand-accent mb-6"
            >
              <Briefcase className="w-4 h-4" />
              <span>Careers</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-primary tracking-tight mb-4">
              <TextReveal>Work</TextReveal> <span className="text-brand-accent"><TextReveal delay={0.2}>with</TextReveal></span> <TextReveal delay={0.3}>us.</TextReveal>
            </h2>
            <p className="text-lg text-slate-600 max-w-xl">
              We are always looking for software engineers and designers who value clean code and good design.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-brand-primary/5 text-brand-primary text-xs font-semibold rounded-full">
                  {job.department}
                </span>
                <span className="flex items-center gap-1 text-slate-500 text-sm font-medium">
                  <MapPin className="w-3 h-3" /> {job.location}
                </span>
                <span className="text-slate-400 text-sm">•</span>
                <span className="text-slate-500 text-sm font-medium">{job.type}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-brand-text mb-3">{job.title}</h3>
              <p className="text-slate-600 mb-6 flex-grow">{job.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {job.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md">
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="mt-auto pt-6 border-t border-slate-100">
                <Link
                  href={`/careers?role=${encodeURIComponent(job.title)}`}
                  className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:text-brand-accent transition-colors group"
                >
                  Learn More & Apply
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
