"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCursor } from "@/components/CursorContext";

const ALL_PROJECTS = [
  {
    id: 1,
    title: "Enterprise E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1000&auto=format&fit=crop",
    tech: ["Next.js", "Stripe", "Tailwind"],
    description: "A highly scalable e-commerce solution processing thousands of transactions per day with millisecond latency."
  },
  {
    id: 2,
    title: "Healthcare Analytics Dashboard",
    category: "Data Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    tech: ["React", "Python", "AWS"],
    description: "Real-time analytics dashboard for hospitals to track patient flow and resource allocation."
  },
  {
    id: 3,
    title: "FinTech Mobile Application",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1000&auto=format&fit=crop",
    tech: ["React Native", "Node.js", "MongoDB"],
    description: "A secure and intuitive mobile banking application serving over 50,000 active users."
  },
  {
    id: 4,
    title: "Logistics Fleet Tracker",
    category: "IoT & Web",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop",
    tech: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
    description: "Real-time GPS tracking and route optimization system for commercial transport fleets."
  },
  {
    id: 5,
    title: "AI Customer Support Agent",
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop",
    tech: ["OpenAI", "Next.js", "LangChain"],
    description: "Intelligent autonomous support agent that resolves 60% of tier-1 customer inquiries automatically."
  },
  {
    id: 6,
    title: "Real Estate SaaS Platform",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeefa?q=80&w=1000&auto=format&fit=crop",
    tech: ["Next.js", "Prisma", "Supabase"],
    description: "Comprehensive property management and tenant portal for mid-sized real estate agencies."
  }
];

export default function ProjectsPage() {
  const { setCursorType } = useCursor();

  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      <Navbar />
      
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-brand-primary mb-6 tracking-tight"
            >
              Our <span className="text-brand-accent">Selected Work</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600 max-w-2xl mx-auto"
            >
              Explore our portfolio of digital transformations, scalable applications, and award-winning products.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ALL_PROJECTS.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative w-full h-[450px] rounded-3xl overflow-hidden cursor-none bg-slate-900"
                onMouseEnter={() => setCursorType('view')}
                onMouseLeave={() => setCursorType('default')}
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent z-10" />
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                  />
                </div>

                {/* Content */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                  <p className="text-brand-accent font-medium tracking-wider text-xs uppercase mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs text-white">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="w-12 h-12 rounded-full bg-white text-brand-primary flex items-center justify-center transform group-hover:-rotate-45 transition-transform duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
