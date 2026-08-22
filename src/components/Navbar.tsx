"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Articles", href: "/#insights" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full bg-white transition-shadow duration-300 ${
          isScrolled ? "shadow-sm border-b border-brand-border" : "border-b border-brand-border"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo and Brand Name */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 bg-brand-primary rounded-md p-1">
                <Image
                  src="/Company-Logo.jpg"
                  alt="Astra Technology Horizon Logo"
                  fill
                  sizes="48px"
                  className="object-contain p-1"
                />
              </div>
              <span className="font-bold tracking-tight text-base sm:text-lg text-brand-primary hidden sm:block">
                Astra Technology Horizon
              </span>
              <span className="font-bold tracking-tight text-base text-brand-primary sm:hidden">
                Astra
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-brand-text-secondary hover:text-brand-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/quote"
              className="bg-brand-primary hover:bg-brand-primary-light text-white px-5 py-2.5 rounded-md text-sm font-medium transition-colors shadow-sm"
            >
              Get a Quote →
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-text hover:text-brand-accent p-2 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-[64px] left-0 w-full bg-white border-b border-brand-border shadow-md z-40"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-brand-text hover:text-brand-accent hover:bg-brand-surface rounded-md transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-brand-border-light px-2">
                <Link
                  href="/quote"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center w-full bg-brand-primary hover:bg-brand-primary-light text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Get a Quote →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
