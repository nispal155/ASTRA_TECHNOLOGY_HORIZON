"use client";

import { useState } from "react";
import { Send, CheckCircle2, MapPin, Phone, Mail, Clock, Loader2 } from "lucide-react";
import SectionHeader from "./SectionHeader";
import OfficeMap from "./OfficeMap";
import { FormInput, FormTextarea, FormSelect, FormAlert } from "./FormFields";
import { site, fullAddress, WEB3FORMS_ACCESS_KEY } from "@/lib/site";

const contactItems = [
  { icon: MapPin, label: "Office Location", value: fullAddress, href: undefined },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: "Phone", value: site.phone.display, href: `tel:${site.phone.e164}` },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-16 lg:py-20 bg-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left Column: Contact Info, Hours & Map */}
          <div className="min-w-0">
            <SectionHeader
              id="contact-heading"
              subtitle="Contact Us"
              title="Let's build something together."
              description="Visit our office in Itahari, call us, or send a message to discuss your project, technical requirements, or a custom quote."
              centered={false}
            />

            <ul className="space-y-6">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="w-11 h-11 bg-brand-accent-soft border border-brand-accent-muted rounded-[var(--radius-control)] flex items-center justify-center text-brand-accent shrink-0">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-brand-primary mb-1">{label}</h3>
                    {href ? (
                      <a href={href} className="text-brand-text-secondary hover:text-brand-accent break-words transition-colors">
                        {value}
                      </a>
                    ) : (
                      <address className="not-italic text-brand-text-secondary">{value}</address>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-10 border-t border-brand-border">
              <div className="flex items-center gap-3 mb-5">
                <Clock className="w-5 h-5 text-brand-accent" aria-hidden="true" />
                <h3 className="text-xl font-bold text-brand-primary">Office Hours</h3>
              </div>

              <dl className="space-y-1 text-brand-text-secondary">
                {site.hours.map((h, i) => (
                  <div
                    key={h.label}
                    className={`flex justify-between items-center gap-4 py-2 ${i < site.hours.length - 1 ? "border-b border-brand-border-light" : ""}`}
                  >
                    <dt className="font-medium text-brand-primary">{h.label}</dt>
                    <dd>
                      {h.opens ? (
                        h.display
                      ) : (
                        <span className="px-2 py-1 rounded bg-brand-surface border border-brand-border text-xs font-medium text-brand-text-secondary">
                          {h.display}
                        </span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="text-sm text-brand-text-muted mt-4">Timezone: Nepal Standard Time (UTC+5:45)</p>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-bold text-brand-primary mb-4">Find Our Office</h3>
              <OfficeMap />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="min-w-0">
            <div className="card bg-brand-surface p-6 sm:p-8 lg:p-10 lg:sticky lg:top-28">
              {isSubmitted ? (
                <div role="status" className="min-h-[400px] flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 bg-brand-success-soft text-brand-success rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-primary">Message Sent Successfully!</h3>
                  <p className="text-brand-text-secondary max-w-sm mx-auto">
                    Our team will reach out as soon as possible to discuss your inquiry.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-brand-primary">Send Us a Message</h3>

                  {hasError && (
                    <FormAlert type="error">
                      Sorry, your message could not be sent. Please try again or email us at{" "}
                      <a href={`mailto:${site.email}`} className="underline font-medium">{site.email}</a>.
                    </FormAlert>
                  )}

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
                    className="btn-primary w-full px-8 py-3.5 text-base group/btn"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" aria-hidden="true" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
