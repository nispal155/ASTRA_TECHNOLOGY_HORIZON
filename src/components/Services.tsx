"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { servicesData } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-24 bg-brand-surface border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Our Services"
          title="What We Do"
          description="End-to-end software development and technical consulting services engineered to meet your business goals."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
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
                href={`/services/${service.id}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-primary group-hover:text-brand-accent transition-colors mt-auto"
              >
                Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
