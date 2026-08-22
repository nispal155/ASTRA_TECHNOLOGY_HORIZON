"use client";

import React from "react";
import { Database, Code2, Rocket, Search } from "lucide-react";
import SectionHeader from "./SectionHeader";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We define project scope, technical requirements, and core business goals to establish a practical execution plan.",
    icon: <Search className="w-5 h-5" />,
  },
  {
    number: "02",
    title: "System Architecture",
    description: "Our team designs secure, modular, and scalable software structures tailored to your technical requirements.",
    icon: <Database className="w-5 h-5" />,
  },
  {
    number: "03",
    title: "Agile Development",
    description: "Sprint-based implementation with frequent code reviews, automated testing, and clear progress visibility.",
    icon: <Code2 className="w-5 h-5" />,
  },
  {
    number: "04",
    title: "Deployment & Support",
    description: "Automated production deployment, performance monitoring, and ongoing post-launch maintenance.",
    icon: <Rocket className="w-5 h-5" />,
  },
];

const StepItem = ({ step }: any) => {
  return (
    <div className="relative pl-12 md:pl-16 py-12">
      <div className="absolute left-0 top-12 w-8 h-8 rounded-full border-2 flex items-center justify-center bg-white border-brand-border text-brand-text-muted">
        <span className="text-xs font-mono font-bold">{step.number}</span>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-brand-primary mb-3">{step.title}</h3>
        <p className="text-lg text-brand-text-secondary leading-relaxed">{step.description}</p>
      </div>
    </div>
  );
};

export default function Process() {
  return (
    <section className="py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="How We Work"
          title="A practical, milestone-driven approach"
          description="We follow a systematic methodology to deliver reliable software on schedule, ensuring transparency at every step."
          centered={true}
        />

        <div className="max-w-3xl mx-auto relative mt-12">
          {/* Background line */}
          <div className="absolute left-[15px] top-12 bottom-12 w-[2px] bg-brand-border" />

          <div className="space-y-2">
            {steps.map((step) => (
              <StepItem
                key={step.number}
                step={step}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
