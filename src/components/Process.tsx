import React from "react";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description: "We start by deeply understanding your business goals, technical requirements, and target audience to lay a solid foundation.",
    icon: <Search className="w-6 h-6 text-brand-accent" aria-hidden="true" />,
  },
  {
    number: "02",
    title: "UI/UX Design",
    description: "Our designers craft intuitive, high-converting interfaces tailored to your brand, ensuring a seamless user experience.",
    icon: <PenTool className="w-6 h-6 text-brand-accent" aria-hidden="true" />,
  },
  {
    number: "03",
    title: "Engineering",
    description: "We build scalable, secure, and lightning-fast applications using modern technologies and industry best practices.",
    icon: <Code2 className="w-6 h-6 text-brand-accent" aria-hidden="true" />,
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "After rigorous testing, we deploy your product and provide ongoing maintenance to ensure long-term success.",
    icon: <Rocket className="w-6 h-6 text-brand-accent" aria-hidden="true" />,
  },
];

export default function Process() {
  return (
    <section className="bg-brand-card py-16 lg:py-20 border-b border-brand-border" id="process" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-3">
            Our Process
          </p>
          <h2 id="process-heading" className="text-3xl md:text-4xl font-bold text-brand-primary mb-6 tracking-tight">
            How we turn ideas into reality.
          </h2>
          <p className="text-lg text-brand-text-secondary leading-relaxed">
            A transparent, structured, and collaborative approach to building world-class software.
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <li key={index} className="relative p-6 sm:p-8 bg-brand-surface rounded-[var(--radius-card)] border border-brand-border hover:border-brand-accent hover:shadow-[var(--shadow-card-hover)] transition-all group">
              {/* Decorative step number rendered via CSS content so it isn't read or contrast-checked as text */}
              <div
                aria-hidden="true"
                data-step={step.number}
                className="absolute top-6 right-6 text-5xl font-bold text-brand-accent/10 group-hover:text-brand-accent/20 transition-colors before:content-[attr(data-step)]"
              />
              <div className="w-14 h-14 bg-brand-card rounded-xl shadow-sm border border-brand-accent-muted flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-primary mb-3">
                {step.title}
              </h3>
              <p className="text-brand-text-secondary leading-relaxed">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
