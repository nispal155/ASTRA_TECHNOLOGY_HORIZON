"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Terminal, Database, Code2, Rocket, Search } from "lucide-react";
import SectionHeader from "./SectionHeader";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We define project scope, technical requirements, and core business goals to establish a practical execution plan.",
    icon: <Search className="w-5 h-5" />,
    code: `> Initializing discovery_module.sh...
> Connecting to client data streams...
[SUCCESS] Requirements mapped.
> Analyzing target audience demographics...
[OK] Technical spec finalized.
> Compiling execution roadmap...
> Ready for architecture design.`,
  },
  {
    number: "02",
    title: "System Architecture",
    description: "Our team designs secure, modular, and scalable software structures tailored to your technical requirements.",
    icon: <Database className="w-5 h-5" />,
    code: `> import { SystemArch } from '@astra/core';
> const system = new SystemArch({
    services: ['api', 'web_client'],
    database: 'postgresql',
    security: 'oauth2_jwt'
  });
> system.validateTopology();
[OK] Architecture verified.
> Generating build spec...`,
  },
  {
    number: "03",
    title: "Agile Development",
    description: "Sprint-based implementation with frequent code reviews, automated testing, and clear progress visibility.",
    icon: <Code2 className="w-5 h-5" />,
    code: `> git checkout -b feature/core-services
> npm run build --turbo
[STARTED] Compiling application...
[SUCCESS] Compiled successfully in 124ms.
> npm run test
PASS  src/components/CoreApp.test.tsx
PASS  src/api/endpoints.test.ts
Test Suites: 142 passed, 142 total.
> Committing production code...`,
  },
  {
    number: "04",
    title: "Deployment & Support",
    description: "Automated production deployment, performance monitoring, and ongoing post-launch maintenance.",
    icon: <Rocket className="w-5 h-5" />,
    code: `> docker build -t astra/app:latest .
> kubectl apply -f deployment.yaml
deployment.apps/astra-app created
> Initializing load balancer...
> Verifying health check endpoints...
[SUCCESS] Application is live and operational.
> Monitoring active...`,
  },
];

const TerminalView = ({ code }: { code: string }) => {
  return (
    <div className="bg-[#0D1117] rounded-lg border border-slate-700 shadow-md overflow-hidden h-[450px] flex flex-col font-mono text-sm relative">
      <div className="flex items-center px-4 py-3 bg-[#161B22] border-b border-slate-700 gap-2 sticky top-0 z-10">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-slate-600" />
          <div className="w-3 h-3 rounded-full bg-slate-600" />
          <div className="w-3 h-3 rounded-full bg-slate-600" />
        </div>
        <span className="ml-3 text-xs text-slate-400 font-medium tracking-wider flex items-center gap-2">
          <Terminal className="w-3 h-3" /> astra_console
        </span>
      </div>

      <div className="p-6 text-green-400 overflow-y-auto flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={code}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            className="whitespace-pre-wrap leading-relaxed tracking-tight"
          >
            {code.split("\n").map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.12, duration: 0.25, ease: "easeOut" }}
                className={line.includes("[SUCCESS]") || line.includes("[OK]") || line.includes("PASS") ? "text-cyan-400 font-bold" : ""}
              >
                {line}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const StepItem = ({ step, index, setActiveStep, isActive }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveStep(index);
    }
  }, [isInView, index, setActiveStep]);

  return (
    <div ref={ref} className="relative pl-12 md:pl-16 py-12">
      <div
        className={`absolute left-0 top-12 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors duration-300 z-20 bg-white ${
          isActive ? "border-brand-accent text-brand-accent" : "border-brand-border text-brand-text-muted"
        }`}
      >
        <span className="text-xs font-mono font-bold">{step.number}</span>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className={`transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-70"}`}
      >
        <h3 className="text-2xl font-bold text-brand-primary mb-3">{step.title}</h3>
        <p className="text-lg text-brand-text-secondary leading-relaxed">{step.description}</p>
      </motion.div>
    </div>
  );
};

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="How We Work"
          title="A practical, milestone-driven approach"
          description="We follow a systematic methodology to deliver reliable software on schedule, ensuring transparency at every step."
          centered={false}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative mt-12" ref={containerRef}>
          <div className="relative">
            {/* Background line */}
            <div className="absolute left-[15px] top-12 bottom-12 w-[2px] bg-brand-border" />
            {/* Active line */}
            <motion.div
              className="absolute left-[15px] top-12 w-[2px] bg-brand-accent origin-top z-10"
              style={{ height: lineHeight }}
            />

            <div className="space-y-2">
              {steps.map((step, index) => (
                <StepItem
                  key={step.number}
                  step={step}
                  index={index}
                  setActiveStep={setActiveStep}
                  isActive={activeStep === index}
                />
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="sticky top-32">
              <TerminalView code={steps[activeStep].code} />
            </div>
          </div>
        </div>

        <div className="block lg:hidden mt-12">
          <TerminalView code={steps[activeStep].code} />
        </div>
      </div>
    </section>
  );
}
