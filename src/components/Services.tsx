"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Code, Megaphone, LineChart, Cloud, Search, Smartphone, ArrowRight } from "lucide-react";
import Link from "next/link";

const SpotlightCard = ({ children, className, delay = 0, title }: any) => {
  const ref = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.5 }}
      whileHover={{ scale: 1.02, zIndex: 10 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative overflow-hidden group rounded-3xl p-8 md:p-10 border border-white/40 bg-white/40 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.4), transparent 40%)`,
        }}
      />

      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(200px circle at ${position.x}px ${position.y}px, rgba(245,158,11,0.6), transparent 40%)`,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />

      <div style={{ transform: "translateZ(30px)" }} className="relative z-10 flex flex-col h-full">
        {children}

        <motion.div
          initial={{ opacity: 0, height: 0, marginTop: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            height: isHovered ? "auto" : 0,
            marginTop: isHovered ? 24 : 0,
          }}
          className="overflow-hidden mt-auto"
        >
          <Link
            href={`/quote?service=${encodeURIComponent(title)}`}
            className="inline-flex items-center gap-2 text-brand-accent font-semibold hover:text-amber-600 transition-colors"
          >
            Request Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function Services() {
  const services = [
    {
      title: "Custom Web Development",
      description: "Tailored web applications engineered to solve specific operational challenges with modern, scalable architecture.",
      icon: <Code className="w-8 h-8 text-brand-primary group-hover:text-brand-accent transition-colors duration-300" />,
      className: "md:col-span-2 lg:col-span-2",
    },
    {
      title: "Digital Marketing",
      description: "Data-focused digital strategy and content marketing to expand brand awareness and drive customer acquisition.",
      icon: <Megaphone className="w-8 h-8 text-brand-primary group-hover:text-brand-accent transition-colors duration-300" />,
      className: "md:col-span-1 lg:col-span-2",
    },
    {
      title: "Dashboards & Analytics",
      description: "Clear data visualizations and internal admin tools that provide actionable insights for decision-makers.",
      icon: <LineChart className="w-8 h-8 text-brand-primary group-hover:text-brand-accent transition-colors duration-300" />,
      className: "md:col-span-1 lg:col-span-1",
    },
    {
      title: "Cloud & Infrastructure",
      description: "Reliable cloud migration, deployment automation, and server management for consistent uptime.",
      icon: <Cloud className="w-8 h-8 text-brand-primary group-hover:text-brand-accent transition-colors duration-300" />,
      className: "md:col-span-2 lg:col-span-2",
    },
    {
      title: "SEO & Performance",
      description: "Technical SEO and speed optimizations designed to improve search visibility and page load speeds.",
      icon: <Search className="w-8 h-8 text-brand-primary group-hover:text-brand-accent transition-colors duration-300" />,
      className: "md:col-span-1 lg:col-span-1",
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform iOS and Android applications crafted for responsive performance and intuitive user experiences.",
      icon: <Smartphone className="w-8 h-8 text-brand-primary group-hover:text-brand-accent transition-colors duration-300" />,
      className: "md:col-span-3 lg:col-span-4",
    },
  ];

  return (
    <section id="services" className="relative py-32 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: ["0%", "5%", "-5%", "0%"],
            y: ["0%", "-5%", "5%", "0%"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-blue-400/20 rounded-full blur-[120px] mix-blend-multiply"
        />
        <motion.div
          animate={{
            x: ["0%", "-5%", "5%", "0%"],
            y: ["0%", "5%", "-5%", "0%"],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[10%] w-[60%] h-[80%] bg-amber-400/20 rounded-full blur-[120px] mix-blend-multiply"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-sm font-semibold text-brand-accent mb-6 backdrop-blur-md"
          >
            <Code className="w-4 h-4" />
            <span>Our Services</span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h3
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-6 tracking-tight"
            >
              What We <span className="text-brand-accent">Do</span>
            </motion.h3>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-slate-600 leading-relaxed"
          >
            End-to-end software development and technical consulting services engineered to meet your business goals.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 perspective-[1000px]">
          {services.map((service, index) => (
            <SpotlightCard
              key={index}
              title={service.title}
              delay={index * 0.1}
              className={service.className}
            >
              <div className="w-14 h-14 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/60 flex items-center justify-center mb-6 shadow-sm">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold mb-3 text-brand-primary">
                {service.title}
              </h4>
              <p className="leading-relaxed text-slate-600 font-medium">
                {service.description}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
