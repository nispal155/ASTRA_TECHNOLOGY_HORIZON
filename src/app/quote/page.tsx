"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Smartphone, Palette, Cloud, ShieldCheck, Megaphone, Send, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const IT_SERVICES = [
  {
    id: "web-development",
    title: "Web Development",
    icon: <Code className="w-6 h-6" />,
    description: "Custom websites, web applications, and enterprise platforms tailored to your business needs."
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    icon: <Smartphone className="w-6 h-6" />,
    description: "Native and cross-platform mobile applications for iOS and Android devices."
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    icon: <Palette className="w-6 h-6" />,
    description: "Intuitive, user-centered design creating engaging and memorable digital experiences."
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    icon: <Cloud className="w-6 h-6" />,
    description: "Scalable and secure cloud architecture, deployment, and ongoing server management."
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Services",
    icon: <ShieldCheck className="w-6 h-6" />,
    description: "Comprehensive security audits, penetration testing, and data protection solutions."
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & SEO",
    icon: <Megaphone className="w-6 h-6" />,
    description: "Data-driven marketing strategies to increase visibility and drive targeted traffic."
  }
];

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Web Development',
    budget: '',
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
          subject: `New Quote Request: ${formData.service}`,
          ...formData
        }),
      });

      if (response.status === 200) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', company: '', service: 'Web Development', budget: '', message: '' });
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
    <main className="min-h-screen bg-slate-50 pt-20">
      <Navbar />
      
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-sm font-semibold text-brand-accent mb-6"
            >
              <Send className="w-4 h-4" />
              <span>Get a Quote</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-brand-primary mb-6 tracking-tight"
            >
              Let's build something <span className="text-brand-accent">extraordinary</span>.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 max-w-2xl mx-auto"
            >
              Select a service below and tell us about your project. Our experts will get back to you with a tailored proposal.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Services List */}
        <div>
          <h2 className="text-3xl font-bold text-brand-primary mb-8">Our IT Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16 lg:mb-0">
            {IT_SERVICES.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setFormData(prev => ({...prev, service: service.title}))}
                className={`bg-white border rounded-3xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer ${
                  formData.service === service.title ? 'border-brand-accent shadow-md bg-brand-accent/5' : 'border-slate-200'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors ${
                  formData.service === service.title ? 'bg-brand-accent text-white' : 'bg-brand-light-bg text-brand-primary'
                }`}>
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-text mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quote Form */}
        <div>
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-slate-200 sticky top-32">
            <h3 className="text-2xl font-bold text-brand-primary mb-6">Request a Proposal</h3>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h4 className="text-2xl font-bold text-brand-text mb-2">Request Received!</h4>
                <p className="text-slate-600">Thank you for reaching out. We will review your project details and respond shortly with a quote.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Service Required</label>
                  <select 
                    id="service" 
                    name="service" 
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent"
                  >
                    {IT_SERVICES.map(service => (
                      <option key={service.id} value={service.title}>{service.title}</option>
                    ))}
                    <option value="Other">Other Custom Solution</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent" placeholder="+977 98..." />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent" placeholder="Your Company Ltd." />
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-2">Estimated Budget (Optional)</label>
                  <select 
                    id="budget" 
                    name="budget" 
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent"
                  >
                    <option value="">Select a range...</option>
                    <option value="<$1k">Less than $1,000</option>
                    <option value="$1k-$5k">$1,000 - $5,000</option>
                    <option value="$5k-$10k">$5,000 - $10,000</option>
                    <option value="$10k+">More than $10,000</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Project Details</label>
                  <textarea required id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent resize-none" placeholder="Tell us about your requirements..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-brand-primary text-white rounded-xl font-semibold hover:bg-brand-primary/90 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>Submit Request <Send className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </section>

      <Footer />
    </main>
  );
}
