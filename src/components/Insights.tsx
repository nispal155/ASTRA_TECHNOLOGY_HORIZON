"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import SectionHeader from "./SectionHeader";

const insights = [
  {
    id: 1,
    title: "Why Next.js is the Future of Enterprise Web Applications",
    category: "Engineering",
    readTime: "5 min read",
    date: "Aug 15, 2026",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    link: "/blog/1",
  },
  {
    id: 2,
    title: "Scaling Startups: When to Transition from MVP to Custom Architecture",
    category: "Strategy",
    readTime: "7 min read",
    date: "Aug 02, 2026",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop",
    link: "/blog/2",
  },
  {
    id: 3,
    title: "The True Cost of Bad UI/UX Design in B2B Software",
    category: "Design",
    readTime: "4 min read",
    date: "Jul 28, 2026",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop",
    link: "/blog/3",
  }
];

export default function Insights() {
  return (
    <section id="insights" className="py-16 lg:py-20 bg-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-4">
          <SectionHeader
            subtitle="Insights"
            title="Thoughts on technology and design"
            centered={false}
          />
          
          <Link href="/blog" className="hidden md:inline-flex items-center gap-2 group text-brand-primary font-medium hover:text-brand-accent transition-colors mb-6">
            Read all articles
            <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight) => (
            <Link 
              key={insight.id} 
              href={insight.link}
              className="group flex flex-col bg-white border border-brand-border rounded-xl overflow-hidden hover:border-brand-accent/40 transition-colors"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-primary uppercase tracking-wider">
                  {insight.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-brand-text-muted mb-4 font-medium">
                  <span>{insight.date}</span>
                  <span className="w-1 h-1 rounded-full bg-brand-border-dark"></span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {insight.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-brand-primary mb-4 leading-snug group-hover:text-brand-accent transition-colors">
                  {insight.title}
                </h3>
                
                <div className="mt-auto pt-4 border-t border-brand-border flex items-center text-sm font-semibold text-brand-primary group-hover:text-brand-accent transition-colors">
                  Read Article 
                  <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 md:hidden">
          <Link href="/blog" className="inline-flex items-center gap-2 group text-brand-primary font-medium hover:text-brand-accent transition-colors">
            Read all articles
            <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
