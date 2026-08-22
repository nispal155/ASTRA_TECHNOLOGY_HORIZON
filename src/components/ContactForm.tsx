"use client";

import { useState } from "react";
import { Send, CheckCircle2, MapPin, Phone, Mail, Clock } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { FormInput, FormTextarea, FormSelect } from "./FormFields";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
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
          ...formData,
        }),
      });

      if (response.status === 200) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          service: "",
          message: "",
        });
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Contact Info & Hours */}
          <div>
            <SectionHeader
              subtitle="Contact Us"
              title="Let's build something."
              description="Reach out to discuss your project, technical requirements, or to get a custom quote."
              centered={false}
            />

            <div className="space-y-8 mt-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-surface border border-brand-border rounded-md flex items-center justify-center text-brand-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-brand-primary mb-1">Office Location</h4>
                  <p className="text-brand-text-secondary">Itahari-4, Sunsari<br/>Koshi Province, Nepal</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-surface border border-brand-border rounded-md flex items-center justify-center text-brand-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-brand-primary mb-1">Email</h4>
                  <p className="text-brand-text-secondary">hello@astratechhorizon.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-surface border border-brand-border rounded-md flex items-center justify-center text-brand-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-brand-primary mb-1">Phone</h4>
                  <p className="text-brand-text-secondary">9852048719</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-brand-border">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-brand-primary" />
                <h3 className="text-xl font-bold text-brand-primary">Operational Hours</h3>
              </div>
              
              <div className="space-y-4 text-brand-text-secondary">
                <div className="flex justify-between items-center py-2 border-b border-brand-border-light">
                  <span className="font-medium text-brand-primary">Sunday – Thursday</span>
                  <span>10:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-brand-border-light">
                  <span className="font-medium text-brand-primary">Friday</span>
                  <span>10:00 AM – 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-brand-primary">Saturday</span>
                  <span className="px-2 py-1 rounded bg-brand-surface border border-brand-border text-xs font-medium text-brand-text-muted">Closed</span>
                </div>
              </div>
              <p className="text-sm text-brand-text-muted mt-4">Timezone: Nepal Standard Time (UTC+5:45)</p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-brand-surface border border-brand-border rounded-lg p-8 lg:p-10">
            {isSubmitted ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 bg-[#10b981]/10 text-[#10b981] rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-brand-primary">Message Sent Successfully!</h4>
                <p className="text-brand-text-secondary max-w-sm mx-auto">
                  Our team will reach out as soon as possible to discuss your inquiry.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-brand-primary mb-6">Send a Message</h3>
                
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

                <FormSelect
                  id="service"
                  name="service"
                  label="Interested Service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="" disabled>Select a service</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="Cloud Infrastructure">Cloud Infrastructure</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="IT Consulting">IT Consulting</option>
                </FormSelect>

                <FormTextarea
                  id="message"
                  name="message"
                  label="Message"
                  required
                  rows={4}
                  placeholder="Tell us about your technical requirements..."
                  value={formData.message}
                  onChange={handleChange}
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center bg-brand-accent hover:bg-brand-accent-hover text-white px-8 py-3.5 rounded-md text-base font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed group/btn"
                >
                  <span className="flex items-center gap-2">
                    {isSubmitting ? "Sending..." : "Submit Message"}
                    {!isSubmitting && (
                      <Send className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                    )}
                  </span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
