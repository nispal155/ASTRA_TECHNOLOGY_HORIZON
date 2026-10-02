"use client";

import { useState } from "react";
import { useQueryParam } from "@/lib/useQueryParam";
import { MapPin, Clock, Send, CheckCircle2, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { FormInput, FormTextarea, FormSelect, FormAlert } from "@/components/FormFields";
import Breadcrumbs from "@/components/Breadcrumbs";
import { site, WEB3FORMS_ACCESS_KEY } from "@/lib/site";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    portfolio: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Pre-select a role when linked with /careers?role=...
  const requestedRole = useQueryParam('role');
  const selectedRole = formData.role || requestedRole || 'Senior Frontend Engineer';

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
          subject: `New Job Application: ${selectedRole}`,
          ...formData,
          role: selectedRole,
        }),
      });

      if (response.status === 200) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', role: '', portfolio: '', message: '' });
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

  const jobs = [
    {
      title: "Senior Frontend Engineer",
      location: "Itahari, Nepal (Hybrid)",
      type: "Full-time",
      department: "Engineering",
      description: "We are looking for an expert in Next.js, React, and Tailwind CSS to lead the development of high-performance web applications for our international clients."
    },
    {
      title: "Cloud Infrastructure Architect",
      location: "Remote",
      type: "Full-time",
      department: "DevOps",
      description: "Join us to design, deploy, and manage scalable cloud architectures on AWS and Azure. Experience with Kubernetes and Terraform is a must."
    },
    {
      title: "UI/UX Designer",
      location: "Itahari, Nepal (On-site)",
      type: "Part-time",
      department: "Design",
      description: "Help us craft beautiful, intuitive, and award-winning digital experiences. Strong portfolio required."
    }
  ];

  const internships = [
    {
      title: "Software Engineering Intern",
      location: "Itahari, Nepal (On-site)",
      type: "Internship (3-6 Months)",
      department: "Engineering",
      description: "Kickstart your career by working on real-world projects. You will learn modern React, Next.js, and backend integration under senior mentorship."
    },
    {
      title: "Digital Marketing Intern",
      location: "Hybrid",
      type: "Internship (3 Months)",
      department: "Marketing",
      description: "Learn the ropes of SEO, social media growth, and brand strategy while working with our cross-functional teams."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-surface">
      <Navbar />
      <main id="main" className="flex-grow pt-16 sm:pt-20">
      <section className="pt-10 pb-6 lg:pt-14 lg:pb-8 bg-gradient-to-b from-brand-accent-soft to-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Careers', path: '/careers' }]} className="mb-10" />
          <SectionHeader
            as="h1"
            subtitle="Careers at Astra"
            title="Build the future with us."
            description="We are always looking for exceptional talent and passionate learners to join our teams in Nepal and around the globe."
            centered={true}
          />
        </div>
      </section>

      <section className="py-14 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* Open Positions */}
        <div>
          <h2 className="text-2xl font-bold text-brand-primary mb-8">Open Positions</h2>
          <div className="space-y-6 mb-16">
            {jobs.map((job, index) => (
              <article
                key={index}
                className="card p-6 hover:border-brand-accent hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 group"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-brand-accent-soft text-brand-accent-hover border border-brand-accent-muted text-xs font-semibold rounded">{job.department}</span>
                  <span className="flex items-center gap-1 text-brand-text-secondary text-sm"><MapPin className="w-4 h-4" aria-hidden="true" /> {job.location}</span>
                  <span className="flex items-center gap-1 text-brand-text-secondary text-sm"><Clock className="w-4 h-4" aria-hidden="true" /> {job.type}</span>
                </div>
                <h3 className="text-xl font-semibold text-brand-primary mb-2 group-hover:text-brand-accent transition-colors">{job.title}</h3>
                <p className="text-brand-text-secondary text-sm leading-relaxed mb-4">{job.description}</p>
                <a
                  href="#apply"
                  onClick={() => setFormData(prev => ({...prev, role: job.title}))}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand-accent hover:text-brand-accent-hover hover:underline underline-offset-4"
                >
                  Apply<span className="sr-only"> for {job.title}</span> &rarr;
                </a>
              </article>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-brand-primary mb-8">Internship Programs</h2>
          <div className="space-y-6">
            {internships.map((intern, index) => (
              <article
                key={index}
                className="card p-6 hover:border-brand-accent hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 group"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-brand-accent-soft text-brand-accent-hover border border-brand-accent-muted text-xs font-semibold rounded">{intern.department}</span>
                  <span className="flex items-center gap-1 text-brand-text-secondary text-sm"><MapPin className="w-4 h-4" aria-hidden="true" /> {intern.location}</span>
                  <span className="flex items-center gap-1 text-brand-text-secondary text-sm"><Clock className="w-4 h-4" aria-hidden="true" /> {intern.type}</span>
                </div>
                <h3 className="text-xl font-semibold text-brand-primary mb-2 group-hover:text-brand-accent transition-colors">{intern.title}</h3>
                <p className="text-brand-text-secondary text-sm leading-relaxed mb-4">{intern.description}</p>
                <a
                  href="#apply"
                  onClick={() => setFormData(prev => ({...prev, role: intern.title}))}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand-accent hover:text-brand-accent-hover hover:underline underline-offset-4"
                >
                  Apply<span className="sr-only"> for {intern.title}</span> &rarr;
                </a>
              </article>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div>
          <div id="apply" className="card p-6 sm:p-8 lg:sticky lg:top-28">
            <h2 className="text-2xl font-bold text-brand-primary mb-6">Submit Your Application</h2>
            
            {isSubmitted ? (
              <div role="status" className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-brand-success-soft rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-brand-success" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-brand-primary mb-2">Application Received!</h3>
                <p className="text-brand-text-secondary">Thank you for your interest. Our hiring team will review your application and get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {hasError && (
                  <FormAlert type="error">
                    Sorry, your application could not be sent. Please try again or email us at{' '}
                    <a href={`mailto:${site.email}`} className="underline font-medium">{site.email}</a>.
                  </FormAlert>
                )}
                <FormSelect
                  id="role"
                  name="role"
                  label="Position Applying For"
                  value={selectedRole}
                  onChange={handleChange}
                >
                  <optgroup label="Full-Time Roles">
                    <option value="Senior Frontend Engineer">Senior Frontend Engineer</option>
                    <option value="Cloud Infrastructure Architect">Cloud Infrastructure Architect</option>
                    <option value="UI/UX Designer">UI/UX Designer</option>
                  </optgroup>
                  <optgroup label="Internships">
                    <option value="Software Engineering Intern">Software Engineering Intern</option>
                    <option value="Digital Marketing Intern">Digital Marketing Intern</option>
                  </optgroup>
                  <option value="Other">Other / Spontaneous Application</option>
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
                    required
                    autoComplete="tel"
                    placeholder="+977 98..."
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <FormInput
                    id="portfolio"
                    name="portfolio"
                    type="url"
                    label="Portfolio / LinkedIn URL"
                    placeholder="https://"
                    value={formData.portfolio}
                    onChange={handleChange}
                  />
                </div>

                <FormTextarea
                  id="message"
                  name="message"
                  label="Cover Letter / Message"
                  required
                  rows={4}
                  placeholder="Tell us why you're a great fit..."
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
                    <>Submit Application <Send className="w-4 h-4" aria-hidden="true" /></>
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
