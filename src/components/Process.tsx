import React from "react";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description: "We start by deeply understanding your business goals, technical requirements, and target audience to lay a solid foundation.",
    icon: <Search className="w-6 h-6 text-brand-accent" />,
  },
  {
    number: "02",
    title: "UI/UX Design",
    description: "Our designers craft intuitive, high-converting interfaces tailored to your brand, ensuring a seamless user experience.",
    icon: <PenTool className="w-6 h-6 text-brand-accent" />,
  },
  {
    number: "03",
    title: "Engineering",
    description: "We build scalable, secure, and lightning-fast applications using modern technologies and industry best practices.",
    icon: <Code2 className="w-6 h-6 text-brand-accent" />,
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "After rigorous testing, we deploy your product and provide ongoing maintenance to ensure long-term success.",
    icon: <Rocket className="w-6 h-6 text-brand-accent" />,
  },
];

export default function Process() {
  return (
    <section className="bg-white py-16 lg:py-20 border-b border-brand-border" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-3">
            Our Process
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6 tracking-tight">
            How we turn ideas into reality.
          </h3>
          <p className="text-lg text-brand-text-secondary leading-relaxed">
            A transparent, structured, and collaborative approach to building world-class software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative p-6 sm:p-8 bg-brand-surface rounded-2xl border border-brand-border hover:border-brand-accent/50 transition-colors group">
              <div className="absolute top-6 right-6 text-5xl font-bold text-brand-primary/5 group-hover:text-brand-accent/10 transition-colors">
                {step.number}
              </div>
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-brand-border flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h4 className="text-xl font-bold text-brand-primary mb-3">
                {step.title}
              </h4>
              <p className="text-brand-text-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
