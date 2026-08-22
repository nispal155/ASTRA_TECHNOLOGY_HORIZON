"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";

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

const CATEGORIES = ["All", "Web Development", "Mobile App", "Data Analytics", "Machine Learning", "IoT & Web", "Web Application"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? ALL_PROJECTS 
    : ALL_PROJECTS.filter(p => p.category === filter);

  return (
    <main className="min-h-screen bg-brand-surface pt-20">
      <Navbar />
      
      <section className="py-20 lg:py-24 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionHeader
              subtitle="Our Selected Work"
              title="Digital transformations."
              description="Explore our portfolio of scalable applications and award-winning products."
              centered={true}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category 
                    ? "bg-brand-primary text-white" 
                    : "bg-brand-surface text-brand-text-secondary border border-brand-border hover:border-brand-accent hover:text-brand-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="group bg-brand-surface border border-brand-border rounded-lg overflow-hidden hover:border-brand-accent transition-colors duration-300"
              >
                {/* Background Image */}
                <div className="relative w-full h-56 overflow-hidden bg-slate-200">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-brand-accent font-medium text-xs uppercase mb-2 tracking-wider">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-bold text-brand-primary mb-3">
                    {project.title}
                  </h3>
                  <p className="text-brand-text-secondary text-sm mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(t => (
                      <span key={t} className="px-2 py-1 bg-white border border-brand-border rounded text-xs text-brand-text-muted">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-accent transition-colors">
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-brand-text-muted">
              No projects found for this category.
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
