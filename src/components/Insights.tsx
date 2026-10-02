import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import SectionHeader from "./SectionHeader";
import type { PostMeta } from "@/lib/blog";

const formatDate = (d: string) => new Date(d).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });


export default function Insights({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) return null;
  const insights = posts.slice(0, 3);
  return (
    <section id="insights" aria-labelledby="insights-heading" className="py-16 lg:py-20 bg-brand-card border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-4">
          <SectionHeader
            id="insights-heading"
            subtitle="Insights"
            title="Thoughts on technology and design"
            centered={false}
          />
          
          <Link href="/blog" className="hidden md:inline-flex items-center gap-2 group text-brand-accent font-semibold hover:text-brand-accent-hover transition-colors mb-6">
            Read all articles
            <ArrowUpRight aria-hidden="true" className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight) => (
            <Link 
              key={insight.slug} 
              href={`/blog/${insight.slug}`}
              className="group card flex flex-col h-full overflow-hidden hover:border-brand-accent hover:shadow-[var(--shadow-card-hover)] transition-all"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={insight.image}
                  alt={insight.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-brand-card/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-accent uppercase tracking-wider">
                  {insight.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-brand-text-secondary mb-4 font-medium">
                  <time dateTime={insight.date}>{formatDate(insight.date)}</time>
                  <span className="w-1 h-1 rounded-full bg-brand-border-dark"></span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" aria-hidden="true" />
                    {insight.readingMinutes} min read
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-brand-primary mb-4 leading-snug group-hover:text-brand-accent transition-colors">
                  {insight.title}
                </h3>
                
                <div className="mt-auto pt-4 border-t border-brand-border flex items-center text-sm font-semibold text-brand-accent">
                  Read article
                  <ArrowUpRight aria-hidden="true" className="w-4 h-4 ml-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 md:hidden">
          <Link href="/blog" className="inline-flex items-center gap-2 group text-brand-accent font-semibold hover:text-brand-accent-hover transition-colors">
            Read all articles
            <ArrowUpRight aria-hidden="true" className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
