"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Careers() {
  return (
    <section id="careers" className="py-24 md:py-32 bg-brand-light-slate border-b border-slate-200 overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        <div className="text-brand-accent font-medium text-sm sm:text-base tracking-wide uppercase mb-4">
          Careers
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary tracking-tight mb-6 flex justify-center flex-wrap gap-x-3">
          Work <span className="text-brand-accent">with</span> us.
        </h2>
        
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10">
          We are always looking for software engineers and designers who value clean code and good design to join our team in Nepal and remotely.
        </p>

        <Link
          href="/careers"
          className="inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-accent text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors group"
        >
          View Open Positions
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
