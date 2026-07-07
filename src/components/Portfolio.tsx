"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import TextReveal from './TextReveal';
import { useCursor } from './CursorContext';

const projects = [
  {
    id: 1,
    title: "Enterprise E-Commerce",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1000&auto=format&fit=crop",
    tech: ["Next.js", "Stripe", "Tailwind"],
    color: "#F59E0B" // Amber
  },
  {
    id: 2,
    title: "Healthcare Analytics",
    category: "Data Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    tech: ["React", "Python", "AWS"],
    color: "#0F172A" // Slate
  },
  {
    id: 3,
    title: "FinTech Application",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1000&auto=format&fit=crop",
    tech: ["React Native", "Node.js", "MongoDB"],
    color: "#3B82F6" // Blue
  }
];

export default function Portfolio() {
  const { setCursorType } = useCursor();
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  // Mouse tracking for floating image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for fluid movement
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    // Only add listener if we're actively hovering a project to save performance
    if (activeProject !== null) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [activeProject, mouseX, mouseY]);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-brand-light-bg relative">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div className="max-w-2xl">
            <TextReveal className="text-brand-accent font-semibold tracking-wider uppercase mb-3">
              Featured Work
            </TextReveal>
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text tracking-tight leading-tight">
              <TextReveal>Transforming complex problems into</TextReveal>
              <TextReveal delay={0.3} className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent italic font-serif pr-2">
                elegant solutions.
              </TextReveal>
            </div>
          </div>
          
          <Link href="/projects" className="hidden md:flex items-center gap-2 group text-brand-text font-semibold hover:text-brand-accent transition-colors pb-2 border-b-2 border-transparent hover:border-brand-accent">
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* The List Container */}
        <div className="flex flex-col border-t border-slate-200">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              onMouseEnter={() => {
                setActiveProject(index);
                setCursorType('view');
              }}
              onMouseLeave={() => {
                setActiveProject(null);
                setCursorType('default');
              }}
              className="group relative border-b border-slate-200 py-10 md:py-16 flex flex-col md:flex-row md:items-center justify-between cursor-none transition-colors duration-500 hover:bg-slate-50"
            >
              {/* Left side: Category & Title */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 z-10 mix-blend-difference">
                <span className="text-sm font-semibold tracking-widest uppercase text-slate-400 group-hover:text-brand-accent transition-colors duration-300">
                  0{index + 1}
                </span>
                <h3 className="text-4xl md:text-6xl lg:text-[5.5rem] font-bold uppercase tracking-tighter text-brand-text group-hover:text-brand-primary transition-colors duration-500 leading-none">
                  {project.title}
                </h3>
              </div>

              {/* Right side: Tech & Mobile Image */}
              <div className="mt-6 md:mt-0 flex flex-col items-start md:items-end z-10 mix-blend-difference">
                <span className="text-lg font-medium text-slate-500 mb-2 md:mb-4 group-hover:text-brand-text transition-colors">
                  {project.category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-semibold text-slate-500 border border-slate-200 rounded-full group-hover:border-brand-accent group-hover:text-brand-accent transition-colors duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mobile-only static image (hidden on desktop) */}
              <div className="block md:hidden mt-8 w-full h-[250px] relative rounded-2xl overflow-hidden shadow-lg">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="w-12 h-12 rounded-full bg-brand-accent flex items-center justify-center text-white">
                      <ArrowUpRight className="w-5 h-5" />
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-12 text-center md:hidden">
          <Link href="/projects" className="inline-flex items-center gap-2 group text-brand-text font-bold hover:text-brand-accent transition-colors">
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>

      {/* Floating Image (Desktop Only) */}
      <AnimatePresence>
        {activeProject !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="hidden md:block fixed z-50 pointer-events-none w-[450px] h-[320px] rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
            style={{
              left: smoothX,
              top: smoothY,
              x: "-50%",
              y: "-50%",
            }}
          >
            {/* Render all images but only fade in the active one for instant switching without re-mounting */}
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${activeProject === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                <div className="absolute inset-0 bg-black/10 z-10" />
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority={true}
                />
                
                {/* Floating "View Case" badge */}
                <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-brand-text font-bold text-sm shadow-xl">
                  View Case <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
