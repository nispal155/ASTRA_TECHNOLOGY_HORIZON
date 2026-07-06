"use client";

import { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactForm() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', company: '', subject: 'General Inquiry', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-brand-light-slate dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700"
        >
          <div className="flex flex-col lg:flex-row">
            
            {/* Contact Information */}
            <div className="lg:w-1/3 bg-brand-primary text-white p-10 md:p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
                <p className="text-slate-300 leading-relaxed mb-12">
                  Ready to elevate your technical infrastructure? Reach out to our engineering team today to discuss your project requirements.
                </p>
                
                <div className="space-y-8">
                  <a href="tel:+9779852048719" className="flex items-center gap-4 group">
                    <div className="bg-white dark:bg-brand-primary/10 p-3 rounded-full group-hover:bg-brand-accent transition-colors">
                      <Phone className="w-6 h-6 text-brand-accent group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Call Us Direct</p>
                      <p className="font-semibold text-lg group-hover:text-brand-accent transition-colors">+977 9852048719</p>
                    </div>
                  </a>
                  
                  <a href="mailto:contact@astratechnologyhorizon.com" className="flex items-center gap-4 group">
                    <div className="bg-white dark:bg-brand-primary/10 p-3 rounded-full group-hover:bg-brand-accent transition-colors">
                      <Mail className="w-6 h-6 text-brand-accent group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Email Our Team</p>
                      <p className="font-semibold text-lg group-hover:text-brand-accent transition-colors break-all">contact@astratechnologyhorizon.com</p>
                    </div>
                  </a>
                </div>
              </div>
              
              <div className="mt-16 pt-8 border-t border-white/20">
                <p className="text-sm text-slate-400">
                  We aim to respond to all inquiries within 24 business hours.
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:w-2/3 p-10 md:p-12 lg:p-16">
              <h3 className="text-2xl font-bold text-brand-text dark:text-white mb-8">Send us a message</h3>
              
              {isSubmitted ? (
                <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-brand-text dark:text-white">Message Sent Successfully!</h4>
                  <p className="text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
                    Our team will reach out as soon as possible to discuss your inquiry.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-brand-text dark:text-white">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all bg-brand-light-bg dark:bg-slate-900"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-brand-text dark:text-white">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all bg-brand-light-bg dark:bg-slate-900"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-brand-text dark:text-white">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all bg-brand-light-bg dark:bg-slate-900"
                        placeholder="+977 9800000000"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-brand-text dark:text-white">Company Name (Optional)</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all bg-brand-light-bg dark:bg-slate-900"
                        placeholder="Your Business Ltd."
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-brand-text dark:text-white">What would you like to talk about?</label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all bg-brand-light-bg dark:bg-slate-900 text-brand-text dark:text-white"
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
                    <label htmlFor="message" className="text-sm font-medium text-brand-text dark:text-white">Project Details</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all bg-brand-light-bg dark:bg-slate-900 resize-none"
                      placeholder="Tell us about your technical requirements..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                    {!isSubmitting && <Send className="w-4 h-4" />}
                  </button>
                </form>
              )}
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
