"use client";

import Image from 'next/image';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const leaders = [
  {
    name: 'Nispal Bhattarai',
    role: 'CEO & Founder',
    bio: 'Visionary leader with a passion for driving technological innovation and business growth. Oversees the strategic direction and operations of Astra Technology Horizon.',
    image: '/images/ceo.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/nispal-bhattarai-2661b430a/',
      email: 'mailto:contact@nispalbhattarai.com.np',
    }
  },
  {
    name: 'Saphal Koirala', 
    role: 'Director',
    bio: 'Strategic director focusing on operational excellence and building long-lasting client relationships across global markets.',
    image: '/images/director.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/saphalkoirala19/',
      email: 'mailto:forsaphal.koirala@gmail.com',
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Leadership() {
  return (
    <section id="leadership" className="py-16 lg:py-20 bg-brand-surface border-b border-brand-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-4 block">Our Leadership</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
            Meet the Visionaries
          </h2>
          <p className="text-lg text-brand-text-secondary leading-relaxed">
            The driving force behind Astra Technology Horizon's commitment to excellence and innovation.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {leaders.map((leader, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-8 rounded-full overflow-hidden bg-slate-100 border-4 border-white shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
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
                  className="object-cover z-10 transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              
              <h3 className="text-2xl font-bold text-brand-text mb-2 group-hover:text-brand-primary transition-colors">{leader.name}</h3>
              <p className="text-brand-accent font-semibold tracking-wide uppercase text-sm mb-4">{leader.role}</p>
              <p className="text-brand-text-secondary mb-6 leading-relaxed max-w-md">
                {leader.bio}
              </p>
              
              <div className="flex items-center gap-4">
                {leader.social.linkedin && (
                  <a href={leader.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white shadow-sm border border-brand-border flex items-center justify-center text-brand-text-secondary hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all duration-300 hover:-translate-y-1">
                    <LinkedinIcon />
                  </a>
                )}
                {leader.social.email && (
                  <a href={leader.social.email} className="w-10 h-10 rounded-full bg-white shadow-sm border border-brand-border flex items-center justify-center text-brand-text-secondary hover:text-white hover:bg-brand-primary hover:border-brand-primary transition-all duration-300 hover:-translate-y-1">
                    <Mail className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
