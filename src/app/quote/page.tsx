"use client";

import { useState } from "react";
import { useQueryParam } from "@/lib/useQueryParam";
import { Code, Smartphone, Palette, Cloud, ShieldCheck, Megaphone, Send, CheckCircle2, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { FormInput, FormTextarea, FormSelect, FormAlert } from "@/components/FormFields";
import Breadcrumbs from "@/components/Breadcrumbs";
import { site, WEB3FORMS_ACCESS_KEY } from "@/lib/site";

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
    service: '',
    budget: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Pre-select a service when arriving from a service page (/quote?service=...)
  const requestedService = useQueryParam('service');
  const queryService = requestedService
    ? (IT_SERVICES.find((s) => s.title.toLowerCase() === requestedService.toLowerCase())
      ?? IT_SERVICES.find((s) => requestedService.toLowerCase().includes(s.title.split(' ')[0].toLowerCase())))?.title ?? 'Other'
    : '';
  const selectedService = formData.service || queryService || 'Web Development';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setHasError(false);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Quote Request: ${selectedService}`,
          ...formData,
          service: selectedService,
        }),
      });

      if (response.status === 200) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setHasError(true);
      }
    } catch {
      setHasError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-surface">
      <Navbar />
      <main id="main" className="flex-grow pt-16 sm:pt-20">
      <section className="pt-10 pb-6 lg:pt-14 lg:pb-8 bg-gradient-to-b from-brand-accent-soft to-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Get a Quote', path: '/quote' }]} className="mb-10" />
          <SectionHeader
            as="h1"
            subtitle="Get a Free Quote"
            title="Let's build something extraordinary."
            description="Select a service below and tell us about your project. Our experts will get back to you with a tailored proposal."
            centered={true}
          />
        </div>
      </section>

      <section className="py-14 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* Services List */}
        <div>
          <h2 className="text-2xl font-bold text-brand-primary mb-2">Our IT Services</h2>
          <p className="text-brand-text-secondary mb-8">Select the service you need — it will be pre-filled in the form.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {IT_SERVICES.map((service) => (
              <button
                type="button"
                key={service.id}
                aria-pressed={selectedService === service.title}
                onClick={() => setFormData(prev => ({...prev, service: service.title}))}
                className={`block w-full h-full text-left bg-white border rounded-[var(--radius-card)] p-6 hover:border-brand-accent hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 ${
                  selectedService === service.title ? 'border-brand-accent ring-2 ring-brand-accent/20 shadow-[var(--shadow-card)]' : 'border-brand-border'
                }`}
              >
                <span className={`w-12 h-12 rounded flex items-center justify-center mb-4 transition-colors ${
                  selectedService === service.title ? 'bg-brand-accent text-white' : 'bg-brand-accent-soft text-brand-accent border border-brand-accent-muted'
                }`}>
                  {service.icon}
                </span>
                <span className="block text-lg font-semibold text-brand-primary mb-2">{service.title}</span>
                <span className="block text-brand-text-secondary text-sm leading-relaxed">{service.description}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Quote Form */}
        <div>
          <div className="card p-6 sm:p-8 lg:sticky lg:top-28">
            <h2 className="text-2xl font-bold text-brand-primary mb-6">Request a Proposal</h2>
            
            {isSubmitted ? (
              <div role="status" className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-brand-success-soft rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-brand-success" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-brand-primary mb-2">Request Received!</h3>
                <p className="text-brand-text-secondary">Thank you for reaching out. We will review your project details and respond shortly with a quote.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {hasError && (
                  <FormAlert type="error">
                    Sorry, your request could not be sent. Please try again or email us at{' '}
                    <a href={`mailto:${site.email}`} className="underline font-medium">{site.email}</a>.
                  </FormAlert>
                )}
                <FormSelect
                  id="service"
                  name="service"
                  label="Service Required"
                  value={selectedService}
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
                    autoComplete="name"
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
                    autoComplete="email"
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
                    autoComplete="tel"
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
                  className="btn-primary w-full py-3.5"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                      Submitting...
                    </>
                  ) : (
                    <>Submit Request <Send className="w-4 h-4" aria-hidden="true" /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </section>
      </main>

      <Footer />
    </div>
  );
}
