"use client";

import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-brand-primary min-h-[80vh] flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="text-brand-accent font-medium text-sm sm:text-base tracking-wide uppercase mb-6">
            Software Engineering • Nepal
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-white leading-[1.1] tracking-tight mb-8">
            We build web apps, cloud systems & mobile products.
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
            A software engineering team in Nepal delivering production-ready technology for growing businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Link
              href="/#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-brand-accent hover:bg-brand-accent-hover text-white px-8 py-3.5 rounded-md text-base font-medium transition-colors"
            >
              Start Your Project
            </Link>

            <Link
              href="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center text-white border border-white/20 hover:bg-white/5 px-8 py-3.5 rounded-md text-base font-medium transition-colors"
            >
              View Our Work →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
