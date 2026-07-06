"use client";

import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } }
  };

  return (
    <section className="relative overflow-hidden bg-brand-primary text-white">
      {/* Background elegant pattern / gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-700/30 via-brand-primary to-brand-primary"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-brand-primary to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 md:pt-36 md:pb-40">
        <motion.div 
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-brand-primary/10 border border-white/20 text-sm font-medium text-brand-light-slate mb-8">
            <span className="flex h-2 w-2 rounded-full bg-brand-accent animate-pulse"></span>
            Itahari's Premier Technical Partner
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            Turning ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-amber-300">intelligent technology.</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl font-light leading-relaxed">
            Innovation with precision. We engineer digital solutions that empower businesses to scale, operate efficiently, and lead in a connected world.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-amber-500/20 group"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-white dark:bg-brand-primary/10 hover:bg-white dark:bg-brand-primary/20 text-white border border-white/20 px-8 py-4 rounded-full text-lg font-semibold transition-all backdrop-blur-sm"
            >
              Explore Services
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4">
        <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" d="M45.7,-76.4C58.9,-69.3,69,-55.4,76.6,-40.5C84.2,-25.6,89.4,-9.7,87.3,5.5C85.2,20.6,75.9,35,65.3,47.8C54.7,60.6,42.8,71.8,28.6,78.5C14.4,85.2,-2,87.4,-17.7,84.1C-33.3,80.7,-48.2,71.7,-59.8,59.3C-71.4,46.8,-79.8,30.9,-83.4,13.8C-87,-3.3,-85.9,-21.6,-78.6,-37.2C-71.3,-52.8,-57.8,-65.7,-42.6,-71.8C-27.4,-77.9,-13.7,-77.2,1.3,-79C16.2,-80.8,32.4,-83.4,45.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>
    </section>
  );
}
