"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, Send, Upload, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
              <Briefcase className="w-4 h-4" />
              <span>Join Our Team</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-brand-primary mb-6 tracking-tight"
            >
              Build the future with us.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 max-w-2xl mx-auto"
            >
              We are always looking for exceptional talent and passionate learners to join our teams in Nepal and around the globe.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Open Positions */}
        <div>
          <h2 className="text-3xl font-bold text-brand-primary mb-8">Open Positions</h2>
          <div className="space-y-6 mb-16">
            {jobs.map((job, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer" onClick={() => setFormData(prev => ({...prev, role: job.title}))}>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-brand-light-slate text-brand-primary text-xs font-semibold rounded-full">{job.department}</span>
                  <span className="flex items-center gap-1 text-slate-500 text-sm"><MapPin className="w-4 h-4" /> {job.location}</span>
                  <span className="flex items-center gap-1 text-slate-500 text-sm"><Clock className="w-4 h-4" /> {job.type}</span>
                </div>
                <h3 className="text-xl font-bold text-brand-text mb-2 group-hover:text-brand-accent transition-colors">{job.title}</h3>
                <p className="text-slate-600 text-sm">{job.description}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-brand-primary mb-8">Internship Programs</h2>
          <div className="space-y-6">
            {internships.map((intern, index) => (
              <div key={index} className="bg-gradient-to-br from-brand-accent/5 to-white border border-brand-accent/20 rounded-3xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer" onClick={() => setFormData(prev => ({...prev, role: intern.title}))}>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-brand-accent/10 text-brand-accent text-xs font-semibold rounded-full">{intern.department}</span>
                  <span className="flex items-center gap-1 text-slate-500 text-sm"><MapPin className="w-4 h-4" /> {intern.location}</span>
                  <span className="flex items-center gap-1 text-slate-500 text-sm"><Clock className="w-4 h-4" /> {intern.type}</span>
                </div>
                <h3 className="text-xl font-bold text-brand-text mb-2 group-hover:text-brand-accent transition-colors">{intern.title}</h3>
                <p className="text-slate-600 text-sm">{intern.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div>
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-slate-200 sticky top-32">
            <h3 className="text-2xl font-bold text-brand-primary mb-6">Submit Your Application</h3>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h4 className="text-2xl font-bold text-brand-text mb-2">Application Received!</h4>
                <p className="text-slate-600">Thank you for your interest. Our hiring team will review your application and get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-slate-700 mb-2">Position Applying For</label>
                  <select 
                    id="role" 
                    name="role" 
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent"
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
                    <label htmlFor="portfolio" className="block text-sm font-medium text-slate-700 mb-2">Portfolio / LinkedIn URL</label>
                    <input required type="url" id="portfolio" name="portfolio" value={formData.portfolio} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent" placeholder="https://" />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Cover Letter / Message</label>
                  <textarea required id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent resize-none" placeholder="Tell us why you're a great fit..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-brand-primary text-white rounded-xl font-semibold hover:bg-brand-primary/90 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
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
