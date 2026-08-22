"use client";

import React from "react";
import SectionHeader from "./SectionHeader";

export default function TechStack() {
  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Language" },
    { name: "AWS", category: "Cloud" },
    { name: "Azure", category: "Cloud" },
    { name: "TailwindCSS", category: "Styling" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Docker", category: "DevOps" },
    { name: "GraphQL", category: "API" }
  ];

  return (
    <section className="py-20 bg-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Technologies We Use"
          centered={true}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center justify-center p-6 rounded-lg bg-brand-surface border border-brand-border hover:border-brand-accent transition-colors duration-300"
            >
              <span className="text-xl font-bold text-brand-primary group-hover:text-brand-accent transition-colors duration-300 mb-2">
                {tech.name}
              </span>
              <span className="text-sm font-medium text-brand-text-muted">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
