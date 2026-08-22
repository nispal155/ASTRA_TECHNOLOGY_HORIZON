"use client";

import { useState } from "react";
import { Code, Smartphone, Palette, Cloud, ShieldCheck, Megaphone, Send, CheckCircle2, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { FormInput, FormTextarea, FormSelect } from "@/components/FormFields";

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
    <main className="min-h-screen bg-brand-surface pt-20">
      <Navbar />
      
      <section className="py-20 lg:py-24 bg-white border-b border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            subtitle="Get a Quote"
            title="Let's build something extraordinary."
            description="Select a service below and tell us about your project. Our experts will get back to you with a tailored proposal."
            centered={true}
          />
        </div>
      </section>

      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Services List */}
        <div>
          <h2 className="text-2xl font-bold text-brand-primary mb-8">Our IT Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16 lg:mb-0">
            {IT_SERVICES.map((service) => (
              <div 
                key={service.id}
                onClick={() => setFormData(prev => ({...prev, service: service.title}))}
                className={`bg-white border rounded-lg p-6 hover:border-brand-accent transition-all duration-300 cursor-pointer ${
                  formData.service === service.title ? 'border-brand-accent shadow-sm' : 'border-brand-border'
                }`}
              >
                <div className={`w-12 h-12 rounded flex items-center justify-center mb-4 transition-colors ${
                  formData.service === service.title ? 'bg-brand-accent text-white' : 'bg-brand-surface text-brand-primary border border-brand-border'
                }`}>
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-brand-primary mb-2">{service.title}</h3>
                <p className="text-brand-text-secondary text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Form */}
        <div>
          <div className="bg-white rounded-lg p-8 shadow-sm border border-brand-border sticky top-32">
            <h3 className="text-2xl font-bold text-brand-primary mb-6">Request a Proposal</h3>
            
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="text-xl font-bold text-brand-primary mb-2">Request Received!</h4>
                <p className="text-brand-text-secondary">Thank you for reaching out. We will review your project details and respond shortly with a quote.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <FormSelect
                  id="service"
                  name="service"
                  label="Service Required"
                  value={formData.service}
                  onChange={handleChange}
                >
                  {IT_SERVICES.map(service => (
                    <option key={service.id} value={service.title}>{service.title}</option>
                  ))}
                  <option value="Other">Other Custom Solution</option>
                </FormSelect>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    id="name"
                    name="name"
                    label="Full Name"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <FormInput
                    id="email"
                    name="email"
                    type="email"
                    label="Email Address"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    id="phone"
                    name="phone"
                    type="tel"
                    label="Phone Number"
                    placeholder="+977 98..."
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <FormInput
                    id="company"
                    name="company"
                    label="Company Name"
                    placeholder="Your Company Ltd."
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <FormSelect
                  id="budget"
                  name="budget"
                  label="Estimated Budget (Optional) — NPR"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">Select a range...</option>
                  <option value="10k-25k">NPR 10,000 – 25,000</option>
                  <option value="25k-50k">NPR 25,000 – 50,000</option>
                  <option value="50k-100k">NPR 50,000 – 100,000</option>
                  <option value="100k-250k">NPR 100,000 – 250,000</option>
                  <option value="250k+">NPR 250,000+</option>
                </FormSelect>

                <FormTextarea
                  id="message"
                  name="message"
                  label="Project Details"
                  required
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={handleChange}
                />

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full py-3 text-white rounded font-semibold transition-colors flex items-center justify-center gap-2 ${
                    isSubmitting 
                      ? 'bg-brand-primary/70 cursor-not-allowed' 
                      : 'bg-brand-primary hover:bg-brand-primary/90'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
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
