"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import SectionHeader from './SectionHeader';

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a comprehensive suite of digital engineering services including custom web application development, mobile app creation (iOS & Android), scalable cloud architecture, API integrations, and ongoing technical maintenance."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity and scope. A standard corporate website might take 4-6 weeks, while a full-scale web application or SaaS platform can take 3-6 months. We provide detailed timelines during our initial discovery phase."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes! We believe in long-term partnerships. We offer various SLA (Service Level Agreement) packages that include regular maintenance, security updates, feature enhancements, and dedicated technical support."
  },
  {
    question: "What is your development methodology?",
    answer: "We employ an Agile development methodology, breaking projects into manageable 2-week sprints. This allows for continuous feedback, regular milestone deliveries, and the flexibility to adapt to changing requirements."
  },
  {
    question: "Do you work with startups or established enterprises?",
    answer: "Both. We have experience helping early-stage startups build their MVPs from the ground up, as well as assisting established enterprises in modernizing their legacy systems or scaling their infrastructure."
  }
];

const FAQItem = ({ faq, isOpen, onClick }: { faq: any, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className={`border border-brand-border rounded-lg mb-4 bg-white overflow-hidden transition-colors ${isOpen ? 'border-brand-accent' : ''}`}>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
      >
        <h4 className={`text-lg font-semibold transition-colors duration-300 ${isOpen ? 'text-brand-accent' : 'text-brand-primary group-hover:text-brand-accent'}`}>
          {faq.question}
        </h4>
        <div className={`ml-4 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-brand-accent text-white' : 'bg-brand-surface text-brand-text-muted group-hover:bg-brand-border-light'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-brand-text-secondary leading-relaxed border-t border-brand-border pt-4">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-24 bg-brand-surface border-b border-brand-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about our services and methodology."
        />

        <div className="mt-10">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
