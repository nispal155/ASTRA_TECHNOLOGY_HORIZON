"use client";

import React from "react";
import Link from "next/link";
import { motion, MotionConfig } from "framer-motion";
import { ArrowRight } from "lucide-react";

const techIcons = [
  { name: "React", src: "/tech/react.svg", size: "w-20 h-20", position: "top-[10%] right-[30%]", delay: 0, duration: 5 },
  { name: "Next.js", src: "/tech/nextjs.svg", size: "w-16 h-16", position: "top-[40%] right-[10%]", delay: 1, duration: 6 },
  { name: "TypeScript", src: "/tech/typescript.svg", size: "w-14 h-14", position: "bottom-[15%] right-[25%]", delay: 2, duration: 4.5 },
  { name: "Node.js", src: "/tech/nodejs.svg", size: "w-16 h-16", position: "bottom-[30%] left-[20%]", delay: 0.5, duration: 5.5 },
  { name: "Python", src: "/tech/python.svg", size: "w-14 h-14", position: "top-[20%] left-[25%]", delay: 1.5, duration: 5 },
  { name: "AWS", src: "/tech/amazonwebservices.svg", size: "w-16 h-16", position: "top-[45%] left-[5%]", delay: 2.5, duration: 6 },
  { name: "Docker", src: "/tech/docker.svg", size: "w-14 h-14", position: "bottom-[10%] left-[45%]", delay: 0.8, duration: 4.8 },
  { name: "PostgreSQL", src: "/tech/postgresql.svg", size: "w-12 h-12", position: "top-[5%] right-[5%]", delay: 1.2, duration: 5.2 },
  { name: "Flutter", src: "/tech/flutter.svg", size: "w-16 h-16", position: "bottom-[5%] right-[5%]", delay: 1.8, duration: 5.8 },
  { name: "MongoDB", src: "/tech/mongodb.svg", size: "w-14 h-14", position: "top-[5%] left-[10%]", delay: 0.3, duration: 4.6 },
  { name: "Firebase", src: "/tech/firebase.svg", size: "w-12 h-12", position: "bottom-[45%] right-[25%]", delay: 2.2, duration: 5.4 },
  { name: "GraphQL", src: "/tech/graphql.svg", size: "w-14 h-14", position: "bottom-[20%] left-[5%]", delay: 1.1, duration: 6.2 },
];

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative bg-gradient-to-b from-brand-accent-soft to-brand-bg min-h-[80vh] flex items-center pt-28 pb-14 lg:pt-32 lg:pb-20 border-b border-brand-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Column - Text Content */}
          <div className="max-w-3xl relative z-10">
            <p className="inline-flex items-center gap-2 rounded-full bg-brand-card border border-brand-accent-muted px-4 py-1.5 text-brand-accent font-semibold text-xs sm:text-sm tracking-wide uppercase mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-accent" aria-hidden="true" />
              <span className="hidden sm:inline">Software Development Company ·</span> Itahari, Nepal
            </p>

            <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-brand-primary leading-[1.1] tracking-tight mb-6 text-balance">
              We build web apps, cloud systems &amp; <span className="text-brand-accent">mobile products</span>.
            </h1>

            <p className="text-lg sm:text-xl text-brand-text-secondary leading-relaxed max-w-2xl mb-10">
              Astra Technology Horizon is a software engineering team in Itahari, Nepal, delivering production-ready websites, mobile apps, and cloud solutions for growing businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <Link href="/#contact" className="btn-primary px-8 py-3.5 text-base">
                Start Your Project <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>

              <Link href="/projects" className="btn-secondary px-8 py-3.5 text-base">
                View Our Work
              </Link>
            </div>
          </div>

          {/* Right Column - Floating Tech Icons (decorative) */}
          <MotionConfig reducedMotion="user">
          <div className="hidden lg:block relative w-full h-[500px]" aria-hidden="true">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-accent/10 rounded-full blur-3xl"></div>

            {techIcons.map((tech) => (
              <motion.div
                key={tech.name}
                className={`absolute ${tech.position} bg-white p-3 rounded-2xl shadow-[var(--shadow-card-hover)] border border-brand-accent-muted flex items-center justify-center`}
                animate={{
                  y: ["-15px", "15px", "-15px"],
                  rotate: [-2, 2, -2],
                }}
                transition={{
                  duration: tech.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: tech.delay,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tech.src}
                  alt=""
                  width={80}
                  height={80}
                  loading="lazy"
                  decoding="async"
                  className={`${tech.size} object-contain`}
                />
              </motion.div>
            ))}
          </div>
          </MotionConfig>

        </div>
      </div>
    </section>
  );
}
