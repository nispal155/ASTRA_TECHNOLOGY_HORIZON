"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "The timeline depends on the complexity and scope of the project. A simple website might take 2-4 weeks, while a custom enterprise application can take 3-6 months. During our discovery phase, we provide a detailed timeline before any commitment is made.",
  },
  {
    question: "What is your pricing model?",
    answer: "We offer both fixed-price contracts for well-defined projects and time-and-materials pricing for ongoing or agile development. We work transparently to ensure our solutions fit within your budget.",
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    answer: "Absolutely. We believe that launching is just the beginning. We offer dedicated maintenance and support packages to ensure your application remains secure, updated, and performing optimally as your business scales.",
  },
  {
    question: "Will I have full ownership of the source code?",
    answer: "Yes. Once the project is completed and all invoices are settled, the intellectual property and full source code are completely transferred to you.",
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern, scalable technologies including React, Next.js, Node.js, Python, Flutter, and cloud infrastructure like AWS and Firebase. We choose the best tool for your specific business requirements.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-brand-surface py-16 lg:py-20 border-b border-brand-border" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-3">
            FAQ
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6 tracking-tight">
            Frequently Asked Questions
          </h3>
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
                className="bg-white border border-brand-border rounded-xl overflow-hidden hover:border-brand-accent/30 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-lg font-semibold text-brand-primary pr-8">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-brand-accent" : "text-brand-text-muted"}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
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
