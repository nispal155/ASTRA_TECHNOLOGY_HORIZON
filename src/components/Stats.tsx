"use client";

import { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

// A counter component that animates from 0 to the target number
const AnimatedCounter = ({ value, suffix = "", text }: { value: number, suffix?: string, text: string }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const numberRef = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30, // Lower damping = faster
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (numberRef.current) {
        numberRef.current.textContent = Intl.NumberFormat("en-US").format(Math.round(latest)) + suffix;
      }
    });
  }, [springValue, suffix]);
  
  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col items-center justify-center p-8 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 blur-2xl rounded-full -mr-16 -mt-16 transition-all group-hover:bg-brand-accent/20" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 blur-2xl rounded-full -ml-16 -mb-16 transition-all group-hover:bg-blue-500/20" />
      
      <div className="relative z-10 flex flex-col items-center">
        <h4 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent mb-4 tracking-tighter">
          <span ref={numberRef}>0{suffix}</span>
        </h4>
        <p className="text-lg text-slate-600 font-medium text-center">{text}</p>
      </div>
    </motion.div>
  );
};

export default function Stats() {
 return (
 <section className="py-24 bg-slate-50 ">
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
