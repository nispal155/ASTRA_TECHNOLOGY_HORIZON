"use client";

import { useState, useEffect } from "react";
import { Briefcase, MapPin, Clock, Send, CheckCircle2, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { FormInput, FormTextarea, FormSelect } from "@/components/FormFields";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Frontend Engineer',
    portfolio: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const roleParam = searchParams.get('role');
      if (roleParam) {
        setFormData(prev => ({ ...prev, role: roleParam }));
      }
    }
  }, []);

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
          subject: `New Job Application: ${formData.role}`,
          ...formData
        }),
      });

      if (response.status === 200) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', role: 'Frontend Engineer', portfolio: '', message: '' });
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
    <main className="min-h-screen bg-brand-surface pt-20">
      <Navbar />
      
      <section className="py-20 lg:py-24 bg-white border-b border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            subtitle="Join Our Team"
            title="Build the future with us."
            description="We are always looking for exceptional talent and passionate learners to join our teams in Nepal and around the globe."
            centered={true}
          />
        </div>
      </section>

      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Open Positions */}
        <div>
          <h2 className="text-2xl font-bold text-brand-primary mb-8">Open Positions</h2>
          <div className="space-y-6 mb-16">
            {jobs.map((job, index) => (
              <div 
                key={index} 
                className="bg-white border border-brand-border rounded-lg p-6 hover:border-brand-accent transition-colors duration-300 group cursor-pointer" 
                onClick={() => setFormData(prev => ({...prev, role: job.title}))}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-brand-surface text-brand-text-secondary border border-brand-border text-xs font-semibold rounded">{job.department}</span>
                  <span className="flex items-center gap-1 text-brand-text-muted text-sm"><MapPin className="w-4 h-4" /> {job.location}</span>
                  <span className="flex items-center gap-1 text-brand-text-muted text-sm"><Clock className="w-4 h-4" /> {job.type}</span>
                </div>
                <h3 className="text-xl font-semibold text-brand-primary mb-2 group-hover:text-brand-accent transition-colors">{job.title}</h3>
                <p className="text-brand-text-secondary text-sm leading-relaxed">{job.description}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-brand-primary mb-8">Internship Programs</h2>
          <div className="space-y-6">
            {internships.map((intern, index) => (
              <div 
                key={index} 
                className="bg-white border border-brand-border rounded-lg p-6 hover:border-brand-accent transition-colors duration-300 group cursor-pointer" 
                onClick={() => setFormData(prev => ({...prev, role: intern.title}))}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-brand-surface text-brand-text-secondary border border-brand-border text-xs font-semibold rounded">{intern.department}</span>
                  <span className="flex items-center gap-1 text-brand-text-muted text-sm"><MapPin className="w-4 h-4" /> {intern.location}</span>
                  <span className="flex items-center gap-1 text-brand-text-muted text-sm"><Clock className="w-4 h-4" /> {intern.type}</span>
                </div>
                <h3 className="text-xl font-semibold text-brand-primary mb-2 group-hover:text-brand-accent transition-colors">{intern.title}</h3>
                <p className="text-brand-text-secondary text-sm leading-relaxed">{intern.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div>
          <div className="bg-white rounded-lg p-8 shadow-sm border border-brand-border sticky top-32">
            <h3 className="text-2xl font-bold text-brand-primary mb-6">Submit Your Application</h3>
            
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="text-xl font-bold text-brand-primary mb-2">Application Received!</h4>
                <p className="text-brand-text-secondary">Thank you for your interest. Our hiring team will review your application and get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <FormSelect
                  id="role"
                  name="role"
                  label="Position Applying For"
                  value={formData.role}
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
                    required
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
                    <>Submit Application <Send className="w-4 h-4" /></>
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
