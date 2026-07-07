"use client";

import { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, ChevronDown, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
 const [isExpanded, setIsExpanded] = useState(false);
 const [formData, setFormData] = useState({
 name: '',
 email: '',
 phone: '',
 company: '',
 subject: 'General Inquiry',
 message: ''
 });
 
 const [isSubmitting, setIsSubmitting] = useState(false);
 const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE",
          ...formData
        }),
      });

      if (response.status === 200) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', company: '', subject: 'General Inquiry', message: '' });
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
 const { name, value } = e.target;
 setFormData(prev => ({ ...prev, [name]: value }));
 };

 return (
 <section id="contact" className="py-24 bg-brand-light-slate border-b border-slate-200 ">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative group">
 
 {/* Animated Aura Background */}
 <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-brand-accent/40 via-amber-400/20 to-brand-accent/40 opacity-30 blur-xl transition-all duration-500 group-hover:opacity-70 group-hover:duration-200 animate-pulse pointer-events-none" />
 
 <motion.div 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.7 }}
 className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 "
 >
 {/* Collapsible Header */}
 <button 
 onClick={() => setIsExpanded(!isExpanded)}
 className="w-full flex items-center justify-between p-6 md:p-8 bg-slate-50 hover:bg-slate-100 transition-colors"
 >
 <h3 className="text-2xl md:text-3xl font-bold text-brand-text flex items-center gap-3">
 <Mail className="w-6 h-6 text-brand-accent" />
 Directly Send us Message
 </h3>
 <motion.div
 animate={{ rotate: isExpanded ? 180 : 0 }}
 transition={{ duration: 0.3 }}
 >
 <ChevronDown className="w-6 h-6 text-slate-500" />
 </motion.div>
 </button>

 <AnimatePresence>
 {isExpanded && (
 <motion.div
 initial={{ height: 0, opacity: 0 }}
 animate={{ height: "auto", opacity: 1 }}
 exit={{ height: 0, opacity: 0 }}
 transition={{ duration: 0.4, ease: "easeInOut" }}
 className="overflow-hidden"
 >
 <div className="flex flex-col border-t border-slate-200 ">
 
 {/* Contact Form */}
 <div className="w-full p-10 md:p-12 lg:p-16 relative bg-white ">
 <h3 className="text-2xl font-bold text-brand-text mb-8">Send us a message</h3>
 
 {isSubmitted ? (
 <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-500">
 <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 relative">
 <div className="absolute inset-0 rounded-full bg-green-100 animate-ping opacity-75" />
 <CheckCircle2 className="w-10 h-10 relative z-10" />
 </div>
 <h4 className="text-2xl font-bold text-brand-text ">Message Sent Successfully!</h4>
 <p className="text-slate-600 max-w-sm mx-auto">
 Our team will reach out as soon as possible to discuss your inquiry.
 </p>
 </div>
 ) : (
 <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div className="space-y-2">
 <label htmlFor="name" className="text-sm font-medium text-brand-text ">Full Name</label>
 <input
 type="text"
 id="name"
 name="name"
 required
 value={formData.name}
 onChange={handleChange}
 className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all bg-brand-light-bg hover:bg-white "
 placeholder="John Doe"
 />
 </div>
 <div className="space-y-2">
 <label htmlFor="email" className="text-sm font-medium text-brand-text ">Email Address</label>
 <input
 type="email"
 id="email"
 name="email"
 required
 value={formData.email}
 onChange={handleChange}
 suppressHydrationWarning
 className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all bg-brand-light-bg hover:bg-white "
 placeholder="john@example.com"
 />
 </div>
 </div>
 
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div className="space-y-2">
 <label htmlFor="phone" className="text-sm font-medium text-brand-text ">Phone Number</label>
 <input
 type="tel"
 id="phone"
 name="phone"
 required
 value={formData.phone}
 onChange={handleChange}
 className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all bg-brand-light-bg hover:bg-white "
 placeholder="+977 9800000000"
 />
 </div>
 <div className="space-y-2">
 <label htmlFor="company" className="text-sm font-medium text-brand-text ">Company Name (Optional)</label>
 <input
 type="text"
 id="company"
 name="company"
 value={formData.company}
 onChange={handleChange}
 className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all bg-brand-light-bg hover:bg-white "
 placeholder="Your Business Ltd."
 />
 </div>
 </div>

 <div className="space-y-2">
 <label htmlFor="subject" className="text-sm font-medium text-brand-text ">What would you like to talk about?</label>
 <select
 id="subject"
 name="subject"
 required
 value={formData.subject}
 onChange={handleChange}
 className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all bg-brand-light-bg hover:bg-white text-brand-text "
 >
 <option value="General Inquiry">General Inquiry</option>
 <option value="Web Development">Web & App Development</option>
 <option value="Cloud Solutions">Cloud Infrastructure & Solutions</option>
 <option value="IT Consulting">IT Consulting & Strategy</option>
 <option value="Cybersecurity">Cybersecurity Services</option>
 <option value="Other">Other</option>
 </select>
 </div>
 
 <div className="space-y-2">
 <label htmlFor="message" className="text-sm font-medium text-brand-text ">Project Details</label>
 <textarea
 id="message"
 name="message"
 required
 rows={5}
 value={formData.message}
 onChange={handleChange}
 className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all bg-brand-light-bg hover:bg-white resize-none"
 placeholder="Tell us about your technical requirements..."
 ></textarea>
 </div>
 
 <button
 type="submit"
 disabled={isSubmitting}
 className="w-full sm:w-auto relative group/btn inline-flex items-center justify-center overflow-hidden bg-brand-accent hover:bg-amber-500 text-white px-8 py-4 rounded-lg font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(245,158,11,0.2)] hover:shadow-[0_0_25px_rgba(245,158,11,0.4)]"
 >
 <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover/btn:w-56 group-hover/btn:h-56 opacity-10"></span>
 <span className="relative flex items-center gap-2">
 {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
 {!isSubmitting && <Send className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />}
 </span>
 </button>
 </form>
 )}
 </div>
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </motion.div>
 </div>
 </section>
 );
}
