"use client";

import Image from 'next/image';
import { Mail } from 'lucide-react';

const leaders = [
  {
    name: 'Nispal Bhattarai',
    role: 'CEO & Founder',
    bio: 'Visionary leader with a passion for driving technological innovation and business growth. Oversees the strategic direction and operations of Astra Technology Horizon.',
    image: '/images/ceo.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'mailto:contact@astratechnologyhorizon.com',
    }
  },
  {
    name: 'Jane Doe', 
    role: 'Director',
    bio: 'Strategic director focusing on operational excellence and building long-lasting client relationships across global markets.',
    image: '/images/director.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'mailto:contact@astratechnologyhorizon.com',
    }
  }
];

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-4 block">Our Leadership</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
            Meet the Visionaries
          </h2>
          <p className="text-lg text-brand-text-secondary leading-relaxed">
            The driving force behind Astra Technology Horizon's commitment to excellence and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mt-16 max-w-5xl mx-auto">
          {leaders.map((leader, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-8 rounded-full overflow-hidden bg-slate-100 border border-brand-border">
                {/* Fallback avatar if image fails */}
                <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-300">
                  <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover z-10 transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              
              <h3 className="text-2xl font-bold text-brand-text mb-2">{leader.name}</h3>
              <p className="text-brand-accent font-medium mb-4">{leader.role}</p>
              <p className="text-brand-text-secondary mb-6 leading-relaxed max-w-md">
                {leader.bio}
              </p>
              
              <div className="flex items-center gap-4">
                <a href={leader.social.linkedin} className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-text-secondary hover:text-brand-primary hover:border-brand-primary transition-colors">
                  <LinkedinIcon />
                </a>
                <a href={leader.social.twitter} className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-text-secondary hover:text-brand-primary hover:border-brand-primary transition-colors">
                  <TwitterIcon />
                </a>
                <a href={leader.social.email} className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-text-secondary hover:text-brand-primary hover:border-brand-primary transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
