"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Terminal, FileCode2, ChevronRight, Play } from "lucide-react";
import Link from 'next/link';
import TextReveal from "./TextReveal";

const jobs = [
  {
    id: "frontend",
    filename: "frontend_engineer.ts",
    title: "Senior Frontend Engineer",
    location: "Itahari, Nepal (Hybrid)",
    type: "Full-time",
    department: "Engineering",
    description: "We are looking for an expert in Next.js, React, and Tailwind CSS to lead the development of high-performance web applications for our international clients.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind"]
  },
  {
    id: "cloud",
    filename: "cloud_architect.ts",
    title: "Cloud Infrastructure Architect",
    location: "Remote",
    type: "Full-time",
    department: "DevOps",
    description: "Join us to design, deploy, and manage scalable cloud architectures on AWS and Azure. Experience with Kubernetes and Terraform is a must.",
    tech: ["AWS", "Azure", "Kubernetes", "Terraform"]
  },
  {
    id: "design",
    filename: "ui_ux_designer.ts",
    title: "UI/UX Designer",
    location: "Itahari, Nepal (On-site)",
    type: "Part-time",
    department: "Design",
    description: "Help us craft beautiful, intuitive, and award-winning digital experiences. Strong portfolio required.",
    tech: ["Figma", "Prototyping", "Wireframing"]
  },
  {
    id: "intern",
    filename: "internship.ts",
    title: "Software Engineering Intern",
    location: "Itahari, Nepal (On-site)",
    type: "Internship",
    department: "Engineering",
    description: "Kickstart your career by working on real-world projects. Learn modern React, Next.js, and backend integration under senior mentorship.",
    tech: ["React", "Next.js", "Learning"]
  }
];

export default function Careers() {
  const [activeJobId, setActiveJobId] = useState(jobs[0].id);
  const activeJob = jobs.find(j => j.id === activeJobId) || jobs[0];

  return (
    <section id="careers" className="py-24 md:py-32 bg-brand-light-slate border-b border-slate-200 overflow-hidden relative font-mono">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-sm font-semibold text-brand-accent mb-6 font-sans"
            >
              <Briefcase className="w-4 h-4" />
              <span>Join Our Team</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-primary tracking-tight font-sans mb-4">
              <TextReveal>Build the</TextReveal> <span className="text-brand-accent"><TextReveal delay={0.2}>future</TextReveal></span> <TextReveal delay={0.3}>with us.</TextReveal>
            </h2>
            <p className="text-lg text-slate-600 font-sans max-w-xl">
              We are always looking for exceptional talent to join our engineering and design teams in Nepal and around the globe.
            </p>
          </div>
        </div>

        {/* The IDE Window (Light Theme) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl flex flex-col"
        >
          {/* IDE Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-slate-200">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="text-xs text-slate-500 font-medium flex items-center gap-2">
              <Terminal className="w-3 h-3" />
              <span>astra-workspace — {activeJob.filename}</span>
            </div>
            <div className="w-16" /> {/* Spacer for centering */}
          </div>

          <div className="flex flex-col md:flex-row min-h-[500px]">
            
            {/* File Explorer Sidebar */}
            <div className="w-full md:w-64 bg-slate-50 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col">
              <div className="px-4 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                <ChevronRight className="w-3 h-3" /> OPEN ROLES
              </div>
              <div className="flex flex-col pb-4">
                {jobs.map((job) => (
                  <button
                    key={job.id}
                    onClick={() => setActiveJobId(job.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 text-sm transition-colors text-left font-medium ${
                      activeJobId === job.id 
                        ? 'bg-blue-50 text-blue-600 border-l-2 border-blue-600' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 border-l-2 border-transparent'
                    }`}
                  >
                    <FileCode2 className="w-4 h-4 shrink-0" />
                    <span className="truncate">{job.filename}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Code Editor Area */}
            <div className="flex-1 flex flex-col bg-white overflow-x-auto relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeJob.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="p-6 md:p-8 flex-1 text-sm md:text-base leading-relaxed whitespace-pre font-mono"
                >
                  <div className="text-slate-400">{'/**'}</div>
                  <div className="text-slate-400">{' * @department '}<span className="text-brand-accent">{activeJob.department}</span></div>
                  <div className="text-slate-400">{' * @location   '}<span className="text-brand-accent">{activeJob.location}</span></div>
                  <div className="text-slate-400">{' * @type       '}<span className="text-brand-accent">{activeJob.type}</span></div>
                  <div className="text-slate-400">{' */'}</div>
                  
                  <div className="mt-4">
                    <span className="text-purple-600 font-medium">export const</span> <span className="text-blue-600 font-medium">{activeJob.title.replace(/\s+/g, '')}</span> <span className="text-slate-800">= {'{'}</span>
                  </div>
                  
                  <div className="pl-6">
                    <span className="text-slate-700">title:</span> <span className="text-green-600">"{activeJob.title}"</span><span className="text-slate-800">,</span>
                  </div>
                  
                  <div className="pl-6 mt-2 whitespace-pre-wrap">
                    <span className="text-slate-700">description:</span> <span className="text-green-600">"{activeJob.description}"</span><span className="text-slate-800">,</span>
                  </div>

                  <div className="pl-6 mt-2">
                    <span className="text-slate-700">tech_stack:</span> <span className="text-slate-800">[</span>
                    {activeJob.tech.map((t, i) => (
                      <span key={t}>
                        <span className="text-orange-600">"{t}"</span>
                        {i < activeJob.tech.length - 1 && <span className="text-slate-800">, </span>}
                      </span>
                    ))}
                    <span className="text-slate-800">],</span>
                  </div>
                  
                  <div className="pl-6 mt-4">
                    <span className="text-blue-600 font-medium">apply</span><span className="text-slate-800">: () ={'>'} {'{'}</span>
                  </div>
                  <div className="pl-12">
                    <span className="text-purple-600 font-medium">await</span> <span className="text-blue-600 font-medium">execute</span><span className="text-slate-800">(</span><span className="text-green-600">"./apply.sh --role={activeJob.id}"</span><span className="text-slate-800">);</span>
                  </div>
                  <div className="pl-6 text-slate-800">{'}'}</div>
                  <div className="text-slate-800">{'};'}</div>
                </motion.div>
              </AnimatePresence>

              {/* Integrated Terminal for Application */}
              <div className="mt-auto border-t border-slate-200 bg-slate-50 p-4 md:px-6 flex items-center justify-between">
                <div className="flex items-center gap-3 text-sm flex-wrap">
                  <span className="text-brand-primary font-bold">visitor@astra:~$</span>
                  <span className="text-slate-800 font-medium">./apply.sh --role={activeJob.id}</span>
                  <span className="animate-pulse w-2 h-4 bg-slate-400 block" />
                </div>
                <Link 
                  href={`/careers?role=${encodeURIComponent(activeJob.title)}`}
                  className="ml-4 shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-brand-primary hover:bg-brand-accent text-white font-sans font-semibold rounded-lg transition-colors group shadow-sm hover:shadow"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Execute</span>
                </Link>
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
