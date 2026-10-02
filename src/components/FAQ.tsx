"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/data/faqs";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-brand-surface py-16 lg:py-20 border-b border-brand-border" id="faq" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-3">
            FAQ
          </p>
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-brand-primary mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-brand-text-secondary leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about partnering with Astra Technology Horizon.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index}
                className={`bg-white border rounded-[var(--radius-card)] overflow-hidden transition-colors ${isOpen ? "border-brand-accent shadow-[var(--shadow-card)]" : "border-brand-border hover:border-brand-accent-muted"}`}
              >
                <h3>
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-button-${index}`}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-brand-accent-soft/50 transition-colors"
                >
                  <span className="text-base sm:text-lg font-semibold text-brand-primary">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-brand-accent" : "text-brand-text-muted"}`}>
                    <ChevronDown className="w-5 h-5" aria-hidden="true" />
                  </div>
                </button>
                </h3>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${index}`}
                      role="region"
                      aria-labelledby={`faq-button-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-brand-text-secondary leading-relaxed border-t border-brand-border/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
