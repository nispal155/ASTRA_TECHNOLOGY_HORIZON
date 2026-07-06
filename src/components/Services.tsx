"use client";

import { motion } from 'framer-motion';
import { Code, Cloud, Shield, Database, Smartphone, Lightbulb } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Custom Software Development',
      description: 'Tailored web and desktop applications engineered to solve your specific business challenges with scalable architecture.',
      icon: <Code className="w-8 h-8 text-brand-primary" />,
      className: "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900",
    },
    {
      title: 'Cloud Solutions',
      description: 'Secure, reliable, and scalable cloud infrastructure deployment and migration services.',
      icon: <Cloud className="w-8 h-8 text-brand-primary" />,
      className: "md:col-span-1 lg:col-span-2",
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Expert guidance on technology adoption and digital transformation.',
      icon: <Lightbulb className="w-8 h-8 text-brand-primary" />,
      className: "md:col-span-1 lg:col-span-1",
    },
    {
      title: 'Mobile App Development',
      description: 'High-performance native and cross-platform mobile experiences designed for intuitive user engagement.',
      icon: <Smartphone className="w-8 h-8 text-brand-primary" />,
      className: "md:col-span-2 lg:col-span-2",
    },
    {
      title: 'Cybersecurity',
      description: 'Vulnerability assessments and secure architecture.',
      icon: <Shield className="w-8 h-8 text-brand-primary" />,
      className: "md:col-span-1 lg:col-span-1",
    },
    {
      title: 'Data Analytics & AI',
      description: 'Unlock actionable insights from your data with advanced analytics and machine learning integrations.',
      icon: <Database className="w-8 h-8 text-brand-primary" />,
      className: "md:col-span-3 lg:col-span-4 bg-brand-primary text-white dark:bg-brand-primary",
      iconClass: "bg-white/10 text-white",
      textClass: "text-white"
    },
  ];

  return (
    <section id="services" className="py-24 bg-brand-light-bg dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
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
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-brand-text dark:text-white mb-6 tracking-tight"
          >
            Intelligent Tech Solutions
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-300"
          >
            We deliver robust, end-to-end technology services designed to elevate your business operations and drive sustainable growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 0.98 }}
              className={`rounded-3xl p-8 md:p-10 border border-brand-light-slate dark:border-slate-700 shadow-sm transition-all duration-300 group ${service.className || 'bg-white dark:bg-slate-800'}`}
            >
              <div className={`w-14 h-14 rounded-2xl bg-brand-light-slate dark:bg-slate-900 flex items-center justify-center mb-6 group-hover:bg-brand-accent/20 transition-colors ${service.iconClass || ''}`}>
                {service.icon}
              </div>
              <h4 className={`text-2xl font-bold mb-3 ${service.textClass || 'text-brand-text dark:text-white'}`}>
                {service.title}
              </h4>
              <p className={`leading-relaxed ${service.textClass ? 'text-slate-200' : 'text-slate-600 dark:text-slate-300'}`}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
