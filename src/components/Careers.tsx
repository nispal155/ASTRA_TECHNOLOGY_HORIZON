"use client";

import { motion } from "framer-motion";
import { Briefcase, ArrowRight, MapPin, Clock } from "lucide-react";

export default function Careers() {
  const jobs = [
    {
      title: "Senior Frontend Engineer",
      location: "Itahari, Nepal (Hybrid)",
      type: "Full-time",
      department: "Engineering",
      description: "We are looking for an expert in Next.js, React, and Tailwind CSS to lead the development of high-performance web applications for our international clients."
    },
    {
      title: "Cloud Infrastructure Architect",
      location: "Remote",
      type: "Full-time",
      department: "DevOps",
      description: "Join us to design, deploy, and manage scalable cloud architectures on AWS and Azure. Experience with Kubernetes and Terraform is a must."
    },
    {
      title: "UI/UX Designer",
      location: "Itahari, Nepal (On-site)",
      type: "Part-time",
      department: "Design",
      description: "Help us craft beautiful, intuitive, and award-winning digital experiences. Strong portfolio required."
    }
  ];

  return (
    <section id="careers" className="py-24 bg-brand-light-slate dark:bg-brand-primary border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-sm font-semibold text-brand-accent mb-6"
          >
            <Briefcase className="w-4 h-4" />
            <span>Join Our Team</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-brand-primary dark:text-white mb-6 tracking-tight"
          >
            Build the future with us.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-slate-300"
          >
            We are always looking for exceptional talent to join our engineering and design teams in Nepal and around the globe.
          </motion.p>
        </div>

        <div className="space-y-6">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-brand-light-slate dark:bg-slate-800 text-brand-primary dark:text-slate-300 text-xs font-semibold rounded-full">
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-sm">
                      <MapPin className="w-4 h-4" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-sm">
                      <Clock className="w-4 h-4" /> {job.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-text dark:text-white mb-3 group-hover:text-brand-accent transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                    {job.description}
                  </p>
                </div>
                
                <div className="md:self-center">
                  <a href="#contact" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-light-bg dark:bg-slate-800 group-hover:bg-brand-accent text-brand-primary dark:text-white group-hover:text-white transition-all shadow-sm">
                    <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
