import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { servicesData } from "@/data/services";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-16 lg:py-20 bg-brand-surface border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="services-heading"
          subtitle="Our Services"
          title="IT Services That Grow Your Business"
          description="End-to-end software development, cloud, and digital marketing services from our team in Itahari, Nepal — engineered to meet your business goals."
        />

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service) => (
            <li key={service.id}>
              <article className="group card relative p-6 hover:shadow-[var(--shadow-card-hover)] hover:border-brand-accent hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full">
                <div className="w-11 h-11 rounded-[var(--radius-control)] bg-brand-accent-soft border border-brand-accent-muted flex items-center justify-center mb-5">
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
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:text-brand-accent-hover mt-auto after:absolute after:inset-0 after:content-['']"
                >
                  Learn more<span className="sr-only"> about {service.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
