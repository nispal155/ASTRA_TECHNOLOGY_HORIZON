"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const techIcons = [
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", size: "w-20 h-20", position: "top-[10%] right-[30%]", delay: 0, duration: 5 },
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", size: "w-16 h-16", position: "top-[40%] right-[10%]", delay: 1, duration: 6 },
  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", size: "w-14 h-14", position: "bottom-[15%] right-[25%]", delay: 2, duration: 4.5 },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", size: "w-16 h-16", position: "bottom-[30%] left-[20%]", delay: 0.5, duration: 5.5 },
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", size: "w-14 h-14", position: "top-[20%] left-[25%]", delay: 1.5, duration: 5 },
  { name: "AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", size: "w-16 h-16", position: "top-[45%] left-[5%]", delay: 2.5, duration: 6 },
  { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", size: "w-14 h-14", position: "bottom-[10%] left-[45%]", delay: 0.8, duration: 4.8 },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", size: "w-12 h-12", position: "top-[5%] right-[5%]", delay: 1.2, duration: 5.2 },
  { name: "Flutter", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg", size: "w-16 h-16", position: "bottom-[5%] right-[5%]", delay: 1.8, duration: 5.8 },
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", size: "w-14 h-14", position: "top-[5%] left-[10%]", delay: 0.3, duration: 4.6 },
  { name: "Firebase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg", size: "w-12 h-12", position: "bottom-[45%] right-[25%]", delay: 2.2, duration: 5.4 },
  { name: "GraphQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg", size: "w-14 h-14", position: "bottom-[20%] left-[5%]", delay: 1.1, duration: 6.2 },
];

export default function Hero() {
  return (
    <section className="bg-brand-surface min-h-[80vh] flex items-center pt-20 pb-12 lg:pt-24 lg:pb-16 border-b border-brand-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Text Content */}
          <div className="max-w-3xl relative z-10">
            <div className="text-brand-text-secondary font-medium text-sm sm:text-base tracking-wide uppercase mb-6">
              Software Engineering • Nepal
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-brand-primary leading-[1.1] tracking-tight mb-8">
              We build web apps, cloud systems & mobile products.
            </h1>

            <p className="text-lg sm:text-xl text-brand-text-secondary leading-relaxed max-w-2xl mb-10">
              A software engineering team in Nepal delivering production-ready technology for growing businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link
                href="/#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-brand-primary hover:bg-brand-primary-light text-white px-8 py-3.5 rounded-md text-base font-medium transition-colors shadow-sm"
              >
                Start Your Project
              </Link>

              <Link
                href="/projects"
                className="w-full sm:w-auto inline-flex items-center justify-center text-brand-primary bg-white border border-brand-border hover:border-brand-accent hover:text-brand-accent px-8 py-3.5 rounded-md text-base font-medium transition-all shadow-sm"
              >
                View Our Work →
              </Link>
            </div>
          </div>

          {/* Right Column - Floating Tech Icons */}
          <div className="hidden lg:block relative w-full h-[500px]">
            {/* Background glowing circle for aesthetic */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-accent/5 rounded-full blur-3xl"></div>
            
            {techIcons.map((tech, index) => (
              <motion.div
                key={tech.name}
                className={`absolute ${tech.position} bg-white p-3 rounded-2xl shadow-lg border border-brand-border-light flex items-center justify-center`}
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
                <img 
                  src={tech.src} 
                  alt={tech.name} 
                  title={tech.name}
                  className={`${tech.size} object-contain`}
                />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
