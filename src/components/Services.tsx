"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Megaphone, LineChart, Cloud, Search, Smartphone, ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionHeader from "./SectionHeader";

export default function Services() {
  const services = [
    {
      title: "Custom Web Development",
      description: "Tailored web applications engineered to solve specific operational challenges with modern, scalable architecture.",
      icon: <Code className="w-5 h-5 text-brand-primary group-hover:text-brand-accent transition-colors duration-300" />,
    },
    {
      title: "Digital Marketing",
      description: "Data-focused digital strategy and content marketing to expand brand awareness and drive customer acquisition.",
      icon: <Megaphone className="w-5 h-5 text-brand-primary group-hover:text-brand-accent transition-colors duration-300" />,
    },
    {
      title: "Dashboards & Analytics",
      description: "Clear data visualizations and internal admin tools that provide actionable insights for decision-makers.",
      icon: <LineChart className="w-5 h-5 text-brand-primary group-hover:text-brand-accent transition-colors duration-300" />,
    },
    {
      title: "Cloud & Infrastructure",
      description: "Reliable cloud migration, deployment automation, and server management for consistent uptime.",
      icon: <Cloud className="w-5 h-5 text-brand-primary group-hover:text-brand-accent transition-colors duration-300" />,
    },
    {
      title: "SEO & Performance",
      description: "Technical SEO and speed optimizations designed to improve search visibility and page load speeds.",
      icon: <Search className="w-5 h-5 text-brand-primary group-hover:text-brand-accent transition-colors duration-300" />,
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform iOS and Android applications crafted for responsive performance and intuitive user experiences.",
      icon: <Smartphone className="w-5 h-5 text-brand-primary group-hover:text-brand-accent transition-colors duration-300" />,
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-24 bg-brand-surface border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Our Services"
          title="What We Do"
          description="End-to-end software development and technical consulting services engineered to meet your business goals."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(index * 0.1, 0.3), duration: 0.4 }}
              className="group bg-white border border-brand-border rounded-lg p-6 shadow-sm hover:shadow-md hover:border-brand-accent transition-all duration-300 flex flex-col h-full"
            >
              <div className="w-10 h-10 rounded-md bg-brand-surface border border-brand-border-light flex items-center justify-center mb-5">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brand-primary">
                {service.title}
              </h3>
              <p className="text-brand-text-secondary leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              <Link
                href={`/quote?service=${encodeURIComponent(service.title)}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-accent hover:text-brand-accent-hover transition-colors mt-auto"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
