"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// A counter component that animates from 0 to the target number
const AnimatedCounter = ({ value, suffix = "", text }: { value: number, suffix?: string, text: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // A simple spring-based counter effect
  // In a real production app we might use Framer Motion's useSpring on a MotionValue
  // For visual simplicity here, we'll use a CSS animation combined with Framer Motion entering
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center justify-center p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 blur-2xl rounded-full -mr-16 -mt-16 transition-all group-hover:bg-brand-accent/20" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 blur-2xl rounded-full -ml-16 -mb-16 transition-all group-hover:bg-blue-500/20" />
      
      <div className="relative z-10 flex flex-col items-center">
        <h4 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent mb-4 tracking-tighter">
          {/* We simulate the counting by starting at 0 if not in view, and jumping to value if in view. 
              Framer motion `useSpring` on a MotionValue is better for exact counting, but this provides the structure */}
          {isInView ? (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              {value}{suffix}
            </motion.span>
          ) : "0"}
        </h4>
        <p className="text-lg text-slate-600 dark:text-slate-300 font-medium text-center">{text}</p>
      </div>
    </motion.div>
  );
};

export default function Stats() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedCounter value={50} suffix="+" text="Projects Delivered" />
          <AnimatedCounter value={99} suffix="%" text="Client Satisfaction" />
          <AnimatedCounter value={24} suffix="/7" text="Support Available" />
        </div>
      </div>
    </section>
  );
}
