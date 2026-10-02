import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { featuredProjects } from "@/lib/content";

const flagshipProjects = featuredProjects;

export default function Portfolio() {
  return (
    <section id="portfolio" aria-labelledby="portfolio-heading" className="py-16 lg:py-24 bg-brand-surface border-b border-brand-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-4">
          <SectionHeader
            id="portfolio-heading"
            subtitle="Featured Work"
            title="Digital products we've engineered"
            centered={false}
          />
          
          <Link href="/projects" className="hidden md:inline-flex items-center gap-2 group text-brand-accent font-semibold hover:text-brand-accent-hover transition-colors mb-6">
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>

        <div className="space-y-16 md:space-y-24">
          {flagshipProjects.map((project, index) => (
            <article 
              key={project.id}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
            >
              {/* Device Mockup */}
              <div className="w-full lg:w-3/5">
                <div className="relative mx-auto w-full max-w-[800px]">
                  {/* Laptop Top/Lid */}
                  <div className="relative rounded-t-2xl border-[8px] border-gray-900 bg-gray-900 aspect-[16/10] overflow-hidden shadow-2xl">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 60vw, 100vw"
                      className="object-cover object-top transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  {/* Laptop Base/Keyboard Deck (decorative) */}
                  <div aria-hidden="true" className="relative h-4 md:h-6 w-[110%] -ml-[5%] bg-gray-800 rounded-b-xl rounded-t-sm flex items-center justify-center shadow-xl">
                    <div className="w-1/6 h-1 md:h-1.5 bg-gray-600 rounded-b-md"></div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <p className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-3">
                  {project.category}
                </p>
                <h3 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-lg text-brand-text-secondary leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-brand-accent-soft border border-brand-accent-muted text-sm font-medium text-brand-accent-hover rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>

                <Link 
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2 group text-brand-accent font-semibold hover:text-brand-accent-hover transition-colors"
                >
                  Read the {project.title} case study
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 flex justify-center md:hidden">
          <Link href="/projects" className="btn-primary px-6 py-3">
            View All Projects
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>

      </div>
    </section>
  );
}
