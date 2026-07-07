"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Terminal, Database, Code2, Rocket, Search } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We analyze your business goals, target audience, and technical requirements to create a comprehensive roadmap.",
    icon: <Search className="w-5 h-5" />,
    code: `> Initializing discovery_module.sh...
> Connecting to client data streams...
[SUCCESS] Business objectives mapped.
> Analyzing target audience demographics...
[OK] Audience profile generated.
> Compiling technical roadmap...
> Ready for architectural design.`,
  },
  {
    number: "02",
    title: "Architecture Design",
    description: "Our engineers design scalable, secure, and high-performance system architectures tailored to your specific needs.",
    icon: <Database className="w-5 h-5" />,
    code: `> import { ScalableArch } from '@astra/core';
> const system = new ScalableArch({
    services: ['microservices', 'serverless'],
    db: 'distributed_sql',
    security: 'zero_trust'
  });
> system.validateTopology();
[OK] Architecture verified.
> Generating blueprint...`,
  },
  {
    number: "03",
    title: "Agile Development",
    description: "Iterative, sprint-based development ensuring transparent progress, rapid feedback, and high-quality code.",
    icon: <Code2 className="w-5 h-5" />,
    code: `> git checkout -b feature/agile-sprint
> npm run build --turbo
[STARTED] Compiling application...
[SUCCESS] Compiled successfully in 124ms.
> npm run test --watch
PASS  src/components/Architecture.test.tsx
PASS  src/api/endpoints.test.ts
Test Suites: 142 passed, 142 total.
> Committing high-quality code...`,
  },
  {
    number: "04",
    title: "Deployment & Scaling",
    description: "Seamless production deployment with continuous monitoring and automated scaling infrastructure.",
    icon: <Rocket className="w-5 h-5" />,
    code: `> docker build -t astra/app:latest .
> kubectl apply -f deployment.yaml
deployment.apps/astra-app created
> Initializing load balancer...
> Scaling pods to handle incoming traffic...
[INFO] Traffic spike detected. Auto-scaling to 5 replicas.
[SUCCESS] System is live and stable.
> Monitoring active...`,
  }
];

const TerminalView = ({ code }: { code: string }) => {
  return (
    <div className="bg-[#0D1117] rounded-2xl border border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden h-[450px] flex flex-col font-mono text-sm relative">
      {/* Terminal Header */}
      <div className="flex items-center px-4 py-3 bg-[#161B22] border-b border-slate-800 gap-2 sticky top-0 z-10">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm" />
          <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm" />
          <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm" />
        </div>
        <span className="ml-3 text-xs text-slate-400 font-medium tracking-wider flex items-center gap-2">
          <Terminal className="w-3 h-3" /> astra_engine_v2.0.sh
        </span>
      </div>
      
      {/* Terminal Body */}
      <div className="p-6 text-green-400 overflow-y-auto flex-1 bg-[url('https://transparenttextures.com/patterns/stardust.png')]">
        <AnimatePresence mode="wait">
          <motion.div 
            key={code}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            className="whitespace-pre-wrap leading-relaxed tracking-tight"
          >
            {code.split('\n').map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15, duration: 0.3, ease: "easeOut" }}
                className={line.includes('[SUCCESS]') || line.includes('[OK]') || line.includes('PASS') ? 'text-cyan-400 font-bold' : ''}
              >
                {line}
              </motion.div>
            ))}
            {/* Blinking Cursor */}
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
              className="inline-block w-2 h-4 bg-green-400 ml-1 align-middle mt-2"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Glass overlay reflection */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
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
      {/* Circuit Node */}
      <div className={`absolute left-0 top-12 w-6 h-6 rounded-full border-4 flex items-center justify-center transition-colors duration-500 z-20 bg-white ${isActive ? 'border-brand-accent shadow-[0_0_15px_rgba(245,158,11,0.6)]' : 'border-slate-300'}`}>
        <div className={`w-2 h-2 rounded-full transition-colors duration-500 ${isActive ? 'bg-brand-accent' : 'bg-transparent'}`} />
      </div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-40'}`}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className={`p-2 rounded-lg transition-colors duration-500 ${isActive ? 'bg-brand-accent/10 text-brand-accent' : 'bg-slate-100 text-slate-400'}`}>
            {step.icon}
          </div>
          <span className={`text-sm font-bold tracking-widest uppercase transition-colors duration-500 ${isActive ? 'text-brand-accent' : 'text-slate-400'}`}>
            Phase {step.number}
          </span>
        </div>
        <h3 className="text-3xl font-bold text-brand-text mb-4">{step.title}</h3>
        <p className="text-lg text-slate-600 leading-relaxed">{step.description}</p>
      </motion.div>
    </div>
  );
};

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center md:text-left mb-16 lg:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text mb-6 tracking-tight">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">Excellence</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
            Our proven methodology ensures your technical vision is executed with precision from concept to deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative" ref={containerRef}>
          
          {/* Left Column: Circuit Timeline */}
          <div className="relative">
            {/* Background Circuit Track */}
            <div className="absolute left-[11px] top-12 bottom-12 w-0.5 bg-slate-200" />
            
            {/* Animated Energy Pulse (Fill Line) */}
            <motion.div 
              className="absolute left-[11px] top-12 w-0.5 bg-gradient-to-b from-brand-primary via-brand-accent to-brand-accent origin-top shadow-[0_0_10px_rgba(245,158,11,0.5)] z-10"
              style={{ height: lineHeight }}
            />

            <div className="space-y-4">
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

          {/* Right Column: Sticky Terminal */}
          <div className="hidden lg:block relative">
            <div className="sticky top-32">
              {/* Subtle glowing backdrop for the terminal */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-primary/20 to-brand-accent/20 blur-3xl opacity-50 rounded-full" />
              <div className="relative z-10">
                <TerminalView code={steps[activeStep].code} />
              </div>
            </div>
          </div>

        </div>
        
        {/* Mobile Terminal View (shows at the bottom of the section on small screens) */}
        <div className="block lg:hidden mt-16">
          <TerminalView code={steps[activeStep].code} />
        </div>

      </div>
    </section>
  );
}
