"use client";

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Code, Megaphone, LineChart, Cloud, Search, Smartphone } from 'lucide-react';

const SpotlightCard = ({ children, className, delay = 0 }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => {
    setOpacity(0);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative overflow-hidden group rounded-3xl p-8 md:p-10 border border-brand-light-slate dark:border-slate-700/50 shadow-sm transition-shadow duration-300 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(245,158,11,0.08), transparent 40%)`,
        }}
      />
      
      {/* VengeanceUI / SkiperUI Style Border Glow */}
      <div 
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(200px circle at ${position.x}px ${position.y}px, rgba(245,158,11,0.5), transparent 40%)`,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />
      
      <div style={{ transform: "translateZ(20px)" }} className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default function Services() {
  const services = [
    {
      title: 'Custom Web Development',
      description: 'Tailored web applications engineered to solve your specific business challenges with scalable architecture.',
      icon: <Code className="w-8 h-8 text-brand-primary" />,
      className: "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900",
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic digital marketing to expand your reach and accelerate business growth.',
      icon: <Megaphone className="w-8 h-8 text-brand-primary" />,
      className: "md:col-span-1 lg:col-span-2 bg-white dark:bg-slate-800",
    },
    {
      title: 'Dashboards & Analytics',
      description: 'Actionable data visualization and business intelligence dashboards for informed decision making.',
      icon: <LineChart className="w-8 h-8 text-brand-primary" />,
      className: "md:col-span-1 lg:col-span-1 bg-white dark:bg-slate-800",
    },
    {
      title: 'Cloud & Deployment',
      description: 'Secure, reliable, and scalable cloud infrastructure deployment and migration services.',
      icon: <Cloud className="w-8 h-8 text-brand-primary" />,
      className: "md:col-span-2 lg:col-span-2 bg-white dark:bg-slate-800",
    },
    {
      title: 'SEO Optimization',
      description: 'Data-driven search engine optimization to maximize your visibility and organic traffic.',
      icon: <Search className="w-8 h-8 text-brand-primary" />,
      className: "md:col-span-1 lg:col-span-1 bg-white dark:bg-slate-800",
    },
    {
      title: 'Mobile App Development',
      description: 'High-performance native and cross-platform mobile experiences designed for intuitive user engagement.',
      icon: <Smartphone className="w-8 h-8 text-brand-primary" />,
      className: "md:col-span-3 lg:col-span-4 bg-white dark:bg-slate-800",
    },
  ];

  return (
    <section id="services" className="py-24 bg-brand-light-bg dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-accent font-semibold tracking-wide uppercase text-sm mb-3"
          >
            Our Expertise
          </motion.h2>
          
          <div className="overflow-hidden">
            <motion.h3 
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-5xl font-bold text-brand-text dark:text-white mb-6 tracking-tight"
            >
              Intelligent Tech Solutions
            </motion.h3>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-slate-600 dark:text-slate-300"
          >
            We deliver robust, end-to-end technology services designed to elevate your business operations and drive sustainable growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 perspective-[1000px]">
          {services.map((service, index) => (
            <SpotlightCard 
              key={index}
              delay={index * 0.1}
              className={service.className}
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-light-slate dark:bg-slate-900/80 flex items-center justify-center mb-6 group-hover:bg-brand-accent/20 transition-colors shadow-inner">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold mb-3 text-brand-text dark:text-white">
                {service.title}
              </h4>
              <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                {service.description}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
