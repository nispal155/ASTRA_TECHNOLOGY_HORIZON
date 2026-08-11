"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import TextReveal from "./TextReveal";
import WebGLBackground from "./WebGLBackground";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section className="relative overflow-hidden bg-brand-primary text-white min-h-screen flex items-center justify-center">
      {/* Background Lighting & FX */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-700/30 via-brand-primary to-brand-primary"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-brand-primary to-transparent"></div>

        <WebGLBackground />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center text-center w-full">
        <motion.div
          className="w-full flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-slate-200 mb-8 backdrop-blur-md cursor-default"
          >
            <span className="flex h-2 w-2 rounded-full bg-brand-accent"></span>
            Based in Itahari, Nepal
          </motion.div>

          <div className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight relative z-20 flex flex-col items-center">
            <TextReveal delay={0.2}>We build web apps,</TextReveal>
            <TextReveal delay={0.5} className="text-brand-accent">
              cloud systems & mobile products.
            </TextReveal>
          </div>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl font-light leading-relaxed relative z-20"
          >
            A software engineering team in Nepal delivering production-ready technology for growing businesses.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 relative z-20 items-center justify-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors group block"
            >
              Start Your Project
            </Link>

            <Link
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 text-white hover:text-brand-accent px-8 py-4 text-lg font-medium transition-colors group block"
            >
              View Our Work
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
