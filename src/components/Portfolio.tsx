"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    id: 1,
    title: "Enterprise E-Commerce",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1000&auto=format&fit=crop",
    tech: ["Next.js", "Stripe", "Tailwind"],
  },
  {
    id: 2,
    title: "Healthcare Analytics",
    category: "Data Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    tech: ["React", "Python", "AWS"],
  },
  {
    id: 3,
    title: "FinTech Application",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1000&auto=format&fit=crop",
    tech: ["React Native", "Node.js", "MongoDB"],
  },
  {
    id: 4,
    title: "Logistics Dashboard",
    category: "Internal Tools",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    tech: ["Vue", "PostgreSQL", "Docker"],
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 lg:py-24 bg-brand-surface border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeader
            subtitle="Featured Work"
            title="Recent projects we've delivered"
            centered={false}
          />
          
          <Link href="/projects" className="hidden md:inline-flex items-center gap-2 group text-brand-primary font-medium hover:text-brand-accent transition-colors mb-6">
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group block"
            >
              <Link href={`/projects/${project.id}`}>
                <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden border border-brand-border mb-5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-brand-primary mb-1 group-hover:text-brand-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-brand-text-secondary font-medium">
                      {project.category}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white border border-brand-border-light text-xs font-medium text-brand-text-muted rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 md:hidden">
          <Link href="/projects" className="inline-flex items-center gap-2 group text-brand-primary font-medium hover:text-brand-accent transition-colors">
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
