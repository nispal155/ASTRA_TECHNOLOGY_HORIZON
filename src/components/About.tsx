"use client";

import React from "react";
import { Users, Target, Rocket, Award, Quote, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import SectionHeader from "./SectionHeader";

const stats = [
  { label: "Years Experience", value: "2+", icon: <Award className="w-5 h-5" /> },
  { label: "Projects Delivered", value: "20+", icon: <Target className="w-5 h-5" /> },
  { label: "Engineers & Designers", value: "10+", icon: <Users className="w-5 h-5" /> },
  { label: "Client Satisfaction", value: "99%", icon: <Rocket className="w-5 h-5" /> },
];

const testimonials = [
  {
    name: "Bodhi Tree Journeys Nepal",
    role: "Travel & Tour Operator",
    content: "Astra Technology Horizon completely transformed our digital presence. The website they built for us is fast, intuitive, and beautifully represents our brand. Their technical execution was spot on.",
    link: "https://bodhitreejourneysnepal.com/",
  },
  {
    name: "Rahul Parajuli",
    role: "Personal Portfolio",
    content: "The attention to detail and design aesthetics provided by Astra Technology Horizon elevated my personal brand to a whole new level. Highly recommended!",
    link: "https://rahulparajuli.com.np/",
  },
  {
    name: "MDS Foundation",
    role: "Trusted Client — Saujanya Koirala",
    content: "Astra Technology Horizon helped us build a reliable platform for our organization. Their team was professional, responsive, and delivered exactly what we needed.",
    link: "https://mdsfoundation.org.np/",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-24 bg-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-20">
          <div>
            <SectionHeader
              subtitle="About Us"
              title="Built on solid engineering."
              description="Based in Itahari, Nepal, Astra Technology Horizon is a software engineering and IT consulting firm. We help companies design, build, and maintain digital applications that scale effortlessly."
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
                className="bg-brand-surface p-6 rounded-lg border border-brand-border"
              >
                <div className="w-10 h-10 bg-white border border-brand-border-light rounded-md flex items-center justify-center text-brand-primary mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-brand-primary mb-1 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-brand-text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-brand-border pt-16">
          <h3 className="text-2xl font-bold text-brand-primary mb-10 text-center">Trusted by our clients</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-brand-surface border border-brand-border rounded-lg p-8 flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-8 h-8 text-brand-text-muted opacity-50 mb-4" />
                  <p className="text-lg text-brand-text-secondary leading-relaxed mb-8">
                    "{testimonial.content}"
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center font-bold text-white text-lg">
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
                      <ArrowUpRight className="w-3 h-3 opacity-50 group-hover/link:opacity-100 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-all" />
                    </Link>
                    <div className="text-sm text-brand-text-muted">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
