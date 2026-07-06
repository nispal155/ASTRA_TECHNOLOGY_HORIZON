"use client";

import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import TextReveal from './TextReveal';
import { useCursor } from './CursorContext';

const projects = [
  {
    id: 1,
    title: "Enterprise E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1000&auto=format&fit=crop",
    tech: ["Next.js", "Stripe", "Tailwind"]
  },
  {
    id: 2,
    title: "Healthcare Analytics Dashboard",
    category: "Data Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    tech: ["React", "Python", "AWS"]
  },
  {
    id: 3,
    title: "FinTech Mobile Application",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1000&auto=format&fit=crop",
    tech: ["React Native", "Node.js", "MongoDB"]
  }
];

const ProjectCard = ({ project }: { project: any }) => {
  const { setCursorType } = useCursor();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative w-full h-[400px] rounded-3xl overflow-hidden cursor-none bg-slate-900"
      onMouseEnter={() => setCursorType('view')}
      onMouseLeave={() => setCursorType('default')}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-10" />
        <Image 
          src={project.image} 
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
        <p className="text-brand-accent font-medium tracking-wider text-sm uppercase mb-2">
          {project.category}
        </p>
        <h3 className="text-3xl font-bold text-white mb-4 group-hover:-translate-y-2 transition-transform duration-300">
          {project.title}
        </h3>
        
        {/* Tech Stack Pills */}
        <div className="flex gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
          {project.tech.map((tech: string) => (
            <span key={tech} className="px-3 py-1 text-xs font-medium text-white bg-white/20 backdrop-blur-md rounded-full border border-white/20">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-brand-light-slate dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <TextReveal className="text-brand-accent font-semibold tracking-wider uppercase mb-3">
              Featured Work
            </TextReveal>
            <div className="text-3xl md:text-5xl font-bold text-brand-text dark:text-white">
              <TextReveal>Transforming complex problems into</TextReveal>
              <TextReveal delay={0.3} className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">
                elegant solutions.
              </TextReveal>
            </div>
          </div>
          
          <button className="hidden md:flex items-center gap-2 group text-brand-text dark:text-white font-medium hover:text-brand-accent transition-colors">
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <button className="inline-flex items-center gap-2 group text-brand-text dark:text-white font-medium hover:text-brand-accent transition-colors">
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
