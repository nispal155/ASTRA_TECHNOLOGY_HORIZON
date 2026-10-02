"use client";

import React from "react";
import { Users, Target, Rocket, Award, Quote, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import Counter from "./Counter";
import testimonialData from "@content/testimonials.json";
import ClientsStrip from "./ClientsStrip";
import VideoTestimonials from "./VideoTestimonials";
import { integrations } from "@/lib/site";

const stats = [
  { label: "Years Experience", value: 2, suffix: "+", icon: <Award className="w-5 h-5" /> },
  { label: "Projects Delivered", value: 20, suffix: "+", icon: <Target className="w-5 h-5" /> },
  { label: "Engineers & Designers", value: 10, suffix: "+", icon: <Users className="w-5 h-5" /> },
  { label: "Client Satisfaction", value: 99, suffix: "%", icon: <Rocket className="w-5 h-5" /> },
];

const testimonials = testimonialData.written;

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-16 lg:py-20 bg-brand-card border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-20">
          <div>
            <SectionHeader
              id="about-heading"
              subtitle="About Us"
              title="Built on solid engineering."
              description="Based in Itahari, Nepal, Astra Technology Horizon is a software development and IT consulting company. We help companies design, build, and maintain digital applications that scale effortlessly."
              centered={false}
            />
            <p className="text-lg text-brand-text-secondary leading-relaxed max-w-xl -mt-10">
              Our approach focuses on clean code, solid technical architecture, and straightforward communication — guiding your project from concept to launch.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="card bg-brand-surface p-6"
              >
                <div className="w-10 h-10 bg-brand-accent-soft border border-brand-accent-muted rounded-[var(--radius-control)] flex items-center justify-center text-brand-accent mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-brand-primary mb-1 tracking-tight">
                  <Counter 
                    to={stat.value} 
                    suffix={stat.suffix} 
                    duration={2.5} 
                  />
                </div>
                <div className="text-sm font-medium text-brand-text-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-brand-border pt-16">
          <h3 className="text-2xl font-bold text-brand-primary mb-8 text-center">Trusted by our clients</h3>
          <ClientsStrip />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <figure
                key={idx}
                className="card p-8 flex flex-col justify-between hover:border-brand-accent-muted transition-colors"
              >
                <div>
                  <Quote className="w-8 h-8 text-brand-accent-light opacity-60 mb-4" aria-hidden="true" />
                  <blockquote className="text-lg text-brand-text-secondary leading-relaxed mb-8">
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>
                </div>
                <figcaption className="flex items-center gap-4">
                  <div aria-hidden="true" className="w-12 h-12 rounded-full bg-brand-accent-strong flex items-center justify-center font-bold text-white text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <Link
                      href={testimonial.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-brand-primary hover:text-brand-accent transition-colors flex items-center gap-1 group/link"
                    >
                      {testimonial.name}
                      <ArrowUpRight aria-hidden="true" className="w-3 h-3 opacity-50 group-hover/link:opacity-100 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-all" />
                    </Link>
                    <div className="text-sm text-brand-text-secondary">{testimonial.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          {integrations.googleReviewUrl && (
            <p className="text-center mt-10">
              <a href={integrations.googleReviewUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary px-6 py-3">
                Worked with us? Leave a Google review
              </a>
            </p>
          )}

          <VideoTestimonials />
        </div>
      </div>
    </section>
  );
}
