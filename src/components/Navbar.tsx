"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Careers', href: '#careers' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white dark:bg-brand-primary/80 dark:bg-brand-primary/90 border-b border-brand-light-slate dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Brand Name */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center transition-transform group-hover:scale-105">
                <Image 
                  src="/Company-Logo.jpg" 
                  alt="Astra Technology Horizon Logo" 
                  fill
                  sizes="(max-width: 640px) 64px, 80px"
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-xl text-brand-primary dark:text-white tracking-tight hidden sm:block">
                Astra Technology Horizon <span className="inline-block animate-bounce relative top-1">🇳🇵</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-brand-text dark:text-white font-medium hover:text-brand-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="bg-brand-accent hover:bg-amber-500 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-sm hover:shadow-md"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-text dark:text-white hover:text-brand-primary p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-brand-primary dark:bg-brand-primary border-b dark:border-slate-800 border-brand-light-slate dark:border-slate-800 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-brand-text dark:text-white hover:text-brand-primary hover:bg-brand-light-slate dark:bg-slate-900 rounded-md transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center bg-brand-accent hover:bg-amber-500 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
