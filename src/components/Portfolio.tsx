"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "./SectionHeader";

const flagshipProjects = [
  {
    id: 1,
    title: "Enterprise E-Commerce Platform",
    category: "Web Application",
    description: "A high-performance e-commerce platform built for scale, featuring real-time inventory management, seamless payment gateways, and an intuitive admin dashboard.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1200&auto=format&fit=crop",
    tech: ["Next.js", "Stripe", "Tailwind CSS", "Node.js"],
  },
  {
    id: 2,
    title: "Healthcare Analytics Dashboard",
    category: "Data Analytics",
    description: "Secure, HIPAA-compliant analytics dashboard providing healthcare professionals with actionable insights through advanced data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    tech: ["React", "Python", "AWS", "PostgreSQL"],
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 lg:py-24 bg-brand-surface border-b border-brand-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <SectionHeader
            subtitle="Featured Work"
            title="Digital products we've engineered"
            centered={false}
          />
          
          <Link href="/projects" className="hidden md:inline-flex items-center gap-2 group text-brand-primary font-medium hover:text-brand-accent transition-colors mb-6">
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="space-y-32">
          {flagshipProjects.map((project, index) => (
            <div 
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
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  {/* Laptop Base/Keyboard Deck */}
                  <div className="relative h-4 md:h-6 w-[110%] -ml-[5%] bg-gray-800 rounded-b-xl rounded-t-sm flex items-center justify-center shadow-xl">
                    <div className="w-1/6 h-1 md:h-1.5 bg-gray-600 rounded-b-md"></div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <h4 className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-3">
                  {project.category}
                </h4>
                <h3 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-lg text-brand-text-secondary leading-relaxed mb-8">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-white border border-brand-border text-sm font-medium text-brand-text-muted rounded-md shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <Link 
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2 group text-brand-primary font-semibold hover:text-brand-accent transition-colors"
                >
                  Read Case Study
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center md:hidden">
          <Link href="/projects" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-lg font-medium hover:bg-brand-primary/90 transition-colors">
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
