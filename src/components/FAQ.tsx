"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

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
    <div className="border-b border-slate-200 dark:border-slate-800 last:border-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
      >
        <h4 className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${isOpen ? 'text-brand-accent' : 'text-brand-text dark:text-white group-hover:text-brand-accent/80'}`}>
          {faq.question}
        </h4>
        <div className={`ml-4 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-brand-accent text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:bg-slate-200 dark:group-hover:bg-slate-700'}`}>
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
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-600 dark:text-slate-400 leading-relaxed pr-12">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white dark:bg-slate-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-accent font-semibold tracking-wider uppercase mb-3">Got Questions?</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-brand-text dark:text-white">
            Frequently Asked Questions
          </h3>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-10 shadow-sm"
        >
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              faq={faq} 
              isOpen={openIndex === index} 
              onClick={() => setOpenIndex(openIndex === index ? null : index)} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
