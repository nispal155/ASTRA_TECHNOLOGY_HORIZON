"use client";

import { motion } from "framer-motion";
import { Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Careers() {
  return (
    <section id="careers" className="py-24 md:py-32 bg-brand-light-slate border-b border-slate-200 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-sm font-semibold text-brand-accent mb-6"
        >
          <Briefcase className="w-4 h-4" />
          <span>Careers</span>
        </motion.div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary tracking-tight mb-6 flex justify-center flex-wrap gap-x-3">
          Work <span className="text-brand-accent">with</span> us.
        </h2>
        
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10">
          We are always looking for software engineers and designers who value clean code and good design to join our team in Nepal and remotely.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/careers"
            className="inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-accent text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors group shadow-lg hover:shadow-xl"
          >
            View Open Positions
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
