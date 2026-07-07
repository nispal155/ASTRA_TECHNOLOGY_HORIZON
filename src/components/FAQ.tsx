"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Maximize2, Minimize2 } from 'lucide-react';

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
 <div className="border-b border-slate-200 last:border-0">
 <button
 onClick={onClick}
 className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
 >
 <h4 className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${isOpen ? 'text-brand-accent' : 'text-brand-text group-hover:text-brand-accent/80'}`}>
 {faq.question}
 </h4>
 <div className={`ml-4 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-brand-accent text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200 '}`}>
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
 <p className="pb-6 text-slate-600 leading-relaxed pr-12">
 {faq.answer}
 </p>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 );
};

export default function FAQ() {
 const [openIndices, setOpenIndices] = useState<number[]>([]);

 const toggleFAQ = (index: number) => {
   setOpenIndices(prev => 
     prev.includes(index)
       ? prev.filter(i => i !== index)
       : [...prev, index]
   );
 };

 const expandAll = () => setOpenIndices(faqs.map((_, i) => i));
 const collapseAll = () => setOpenIndices([]);

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            className="text-4xl md:text-5xl font-bold text-brand-primary mb-6"
          >
            Frequently Asked <span className="text-brand-accent">Questions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto mb-8"
          >
            Everything you need to know about our services and methodology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-4"
          >
            <button 
              onClick={expandAll}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:text-brand-accent transition-colors bg-slate-50 hover:bg-slate-100 rounded-full"
            >
              <Maximize2 className="w-4 h-4" /> Expand All
            </button>
            <button 
              onClick={collapseAll}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:text-brand-accent transition-colors bg-slate-50 hover:bg-slate-100 rounded-full"
            >
              <Minimize2 className="w-4 h-4" /> Collapse All
            </button>
          </motion.div>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-slate-100">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              faq={faq}
              isOpen={openIndices.includes(index)}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
