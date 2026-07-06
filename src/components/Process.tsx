"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We analyze your business goals, target audience, and technical requirements to create a comprehensive roadmap."
  },
  {
    number: "02",
    title: "Architecture Design",
    description: "Our engineers design scalable, secure, and high-performance system architectures tailored to your specific needs."
  },
  {
    number: "03",
    title: "Agile Development",
    description: "Iterative, sprint-based development ensuring transparent progress, rapid feedback, and high-quality code."
  },
  {
    number: "04",
    title: "Deployment & Scaling",
    description: "Seamless production deployment with continuous monitoring and automated scaling infrastructure."
  }
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Transform scroll progress into the height of the connecting line
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-text dark:text-white mb-6">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">Excellence</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Our proven methodology ensures your technical vision is executed with precision from concept to deployment.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto" ref={containerRef}>
          
          {/* Background Track Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />
          
          {/* Animated Fill Line */}
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 w-1 bg-gradient-to-b from-brand-primary via-brand-accent to-brand-accent -translate-x-1/2 origin-top shadow-[0_0_15px_rgba(245,158,11,0.5)] z-10"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12 md:space-y-24 relative z-20">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={step.number} className="flex flex-col md:flex-row items-center justify-between w-full">
                  
                  {/* Left Content */}
                  <div className={`w-full md:w-[45%] pl-20 md:pl-0 ${isEven ? 'md:text-right md:pr-12' : 'md:order-3 md:text-left md:pl-12'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <h3 className="text-2xl font-bold text-brand-text dark:text-white mb-3">{step.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{step.description}</p>
                    </motion.div>
                  </div>

                  {/* Center Node */}
                  <div className={`absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center ${!isEven && 'md:order-2'}`}>
                    <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 border-4 border-brand-accent flex items-center justify-center shadow-lg relative group">
                      <div className="absolute inset-0 rounded-full bg-brand-accent animate-ping opacity-20" />
                      <span className="text-sm font-bold text-brand-accent">{step.number}</span>
                    </div>
                  </div>

                  {/* Right Spacer (for alternating layout) */}
                  <div className={`hidden md:block w-[45%] ${isEven ? 'order-3' : 'order-1'}`} />
                  
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
