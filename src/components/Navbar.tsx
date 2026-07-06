"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary origin-left z-[60]" 
        style={{ scaleX: scrollYProgress }} 
      />
      <motion.header
        className={`fixed top-0 z-50 w-full flex justify-center transition-all duration-500 ${
          isScrolled ? 'pt-4 px-4' : 'pt-0 px-0'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div 
          className={`flex justify-between items-center w-full transition-all duration-500 ${
            isScrolled 
              ? 'max-w-4xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-full px-6 h-16' 
              : 'max-w-7xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 sm:px-6 lg:px-8 h-20'
          }`}
        >
          {/* Logo and Brand Name */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className={`relative flex items-center justify-center transition-all duration-500 group-hover:scale-105 ${isScrolled ? 'w-10 h-10' : 'w-16 sm:w-20 h-16 sm:h-20'}`}>
                <Image 
                  src="/Company-Logo.jpg" 
                  alt="Astra Technology Horizon Logo" 
                  fill
                  sizes="(max-width: 640px) 64px, 80px"
                  className="object-contain"
                />
              </div>
              <span 
                className={`font-bold tracking-tight hidden sm:block whitespace-nowrap transition-all duration-500 ${
                  isScrolled ? 'text-lg text-brand-primary dark:text-white' : 'text-xl text-brand-primary dark:text-white'
                }`}
              >
                Astra Technology Horizon <span className="inline-block animate-bounce relative top-1">🇳🇵</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium hover:text-brand-accent transition-colors ${
                  isScrolled ? 'text-sm text-slate-700 dark:text-slate-300' : 'text-base text-brand-text dark:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Magnetic>
              <Link
                href="#contact"
                className={`bg-brand-accent hover:bg-amber-500 text-white rounded-full font-medium transition-all shadow-sm hover:shadow-md block ${
                  isScrolled ? 'px-4 py-1.5 text-sm' : 'px-6 py-2.5'
                }`}
              >
                Get a Quote
              </Link>
            </Magnetic>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-text dark:text-white hover:text-brand-primary p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.div>
      </motion.header>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`md:hidden fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'top-24 px-4' : 'top-20'}`}
          >
            <div className={`bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl ${isScrolled ? 'rounded-2xl' : 'border-t-0'}`}>
              <div className="px-4 py-6 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-base font-medium text-brand-text dark:text-white hover:text-brand-primary hover:bg-brand-light-slate dark:hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 px-2">
                  <Link
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-center bg-brand-accent hover:bg-amber-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
