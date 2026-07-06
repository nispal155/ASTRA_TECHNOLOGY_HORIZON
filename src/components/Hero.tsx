"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const Hero3D = dynamic(() => import('./Hero3D'), { 
  ssr: false,
  loading: () => <div className="w-full h-full animate-pulse bg-white/5 rounded-full blur-3xl"></div>
});

const MagneticButton = ({ children, className, href }: any) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = e.currentTarget.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };
  
  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };
  
  return (
    <motion.a
      href={href}
      className={className}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
    >
      {children}
    </motion.a>
  );
};

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section className="relative overflow-hidden bg-brand-primary text-white min-h-screen flex items-center">
      {/* VengeanceUI Style Aurora / Spotlight Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-700/30 via-brand-primary to-brand-primary"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-brand-primary to-transparent"></div>
        
        {/* Animated Orbs */}
        <motion.div
          animate={{
            x: [0, 50, 0, -50, 0],
            y: [0, 30, 60, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] right-[20%] w-[400px] h-[400px] bg-brand-accent/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -60, 0, 60, 0],
            y: [0, -40, -80, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div 
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* AnimMasterLib Style Shiny Pill */}
          <motion.div variants={itemVariants} className="relative overflow-hidden inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-slate-200 mb-8 backdrop-blur-md group cursor-default">
            <span className="flex h-2 w-2 rounded-full bg-brand-accent animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.8)]"></span>
            Itahari's Premier Technical Partner
            
            <motion.div
              animate={{ x: ["-100%", "250%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
              className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
            />
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight relative z-20">
            Turning ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-amber-200">intelligent technology.</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl font-light leading-relaxed relative z-20">
            Innovation with precision. We engineer digital solutions that empower businesses to scale, operate efficiently, and lead in a connected world.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 relative z-20">
            <MagneticButton
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] group"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
            
            <MagneticButton
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full text-lg font-semibold transition-colors backdrop-blur-sm group"
            >
              Explore Services
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
          </motion.div>
        </motion.div>
        
        {/* 3D Interactive Element */}
        <div className="relative h-[400px] lg:h-[600px] w-full hidden md:block">
          <Hero3D />
        </div>
      </div>
    </section>
  );
}
