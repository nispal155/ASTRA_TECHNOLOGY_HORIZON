"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import projects from "@content/projects.json";

const ALL_PROJECTS = projects;
const CATEGORIES = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? ALL_PROJECTS 
    : ALL_PROJECTS.filter(p => p.category === filter);

  return (
    <div className="flex flex-col min-h-screen bg-brand-surface">
      <Navbar />
      <main id="main" className="flex-grow pt-16 sm:pt-20">
      <section className="pt-10 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-brand-accent-soft via-brand-bg to-brand-bg border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Projects', path: '/projects' }]} className="mb-10" />
          <div className="text-center mb-8">
            <SectionHeader
              as="h1"
              subtitle="Our Selected Work"
              title="Digital transformations."
              description="Explore our portfolio of scalable applications and award-winning products."
              centered={true}
            />
          </div>

          <div role="group" aria-label="Filter projects by category" className="flex flex-wrap justify-center gap-2 mb-12">
            {CATEGORIES.map(category => (
              <button
                type="button"
                key={category}
                onClick={() => setFilter(category)}
                aria-pressed={filter === category}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  filter === category 
                    ? "bg-brand-accent-strong border-brand-accent-strong text-white shadow-[var(--shadow-card)]" 
                    : "bg-brand-card text-brand-text-secondary border-brand-border hover:border-brand-accent hover:text-brand-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group card flex flex-col overflow-hidden hover:border-brand-accent hover:shadow-[var(--shadow-card-hover)] transition-all duration-300"
              >
                {/* Background Image */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-brand-accent-soft">
                  <Image 
                    src={project.image} 
                    alt={project.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-brand-accent font-medium text-xs uppercase mb-2 tracking-wider">
                    {project.category}
                  </p>
                  <h2 className="text-xl font-bold text-brand-primary mb-3">
                    {project.title}
                  </h2>
                  <p className="text-brand-text-secondary text-sm mb-6 line-clamp-2">
                    {project.summary}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(t => (
                      <span key={t} className="px-2 py-1 bg-brand-accent-soft border border-brand-accent-muted rounded text-xs font-medium text-brand-accent-hover">
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link href={`/projects/${project.id}`} className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:text-brand-accent-hover transition-colors">
                    View case study<span className="sr-only">: {project.title}</span> <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div role="status" className="text-center py-20 text-brand-text-secondary">
              No projects found for this category.
            </div>
          )}
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}
