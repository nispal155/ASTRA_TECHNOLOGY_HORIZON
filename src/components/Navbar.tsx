"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Search } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/#services" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10);
  });

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMenuOpen]);

  // Page routes are "active" on their own path; in-page anchors are never marked active
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : !href.includes("#") && pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full bg-brand-card/95 backdrop-blur border-b border-brand-border transition-shadow duration-300 ${
          isScrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo and Brand Name */}
          <Link href="/" className="flex items-center gap-3 group shrink-0" aria-label="Astra Technology Horizon — home">
            <span className="relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 bg-brand-navy rounded-lg overflow-hidden">
              <Image
                src="/Company-Logo.jpg"
                alt=""
                fill
                sizes="48px"
                className="object-contain scale-150"
                priority
              />
            </span>
            <span className="font-bold tracking-tight text-base sm:text-lg text-brand-primary">
              <span className="hidden sm:inline">Astra Technology Horizon</span>
              <span className="sm:hidden">Astra Tech</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main" className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-brand-accent bg-brand-accent-soft"
                    : "text-brand-text-secondary hover:text-brand-accent hover:bg-brand-accent-soft"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/search" aria-label="Search the website" className="p-2.5 rounded-md text-brand-text-secondary hover:text-brand-accent hover:bg-brand-accent-soft transition-colors">
              <Search className="w-5 h-5" aria-hidden="true" />
            </Link>
            <ThemeToggle />
            <Link href="/ne" hrefLang="ne" lang="ne" className="px-2 py-2 rounded-md text-sm font-medium text-brand-text-secondary hover:text-brand-accent hover:bg-brand-accent-soft transition-colors">
              नेपाली
            </Link>
            <Link href="/quote" className="btn-primary ml-2 px-5 py-2.5 text-sm">
              Get a Free Quote <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </nav>

          {/* Mobile controls */}
          <div className="xl:hidden flex items-center gap-1">
          <Link href="/search" aria-label="Search the website" className="p-2.5 rounded-md text-brand-text-secondary hover:text-brand-accent hover:bg-brand-accent-soft transition-colors">
            <Search className="w-5 h-5" aria-hidden="true" />
          </Link>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-brand-primary hover:text-brand-accent hover:bg-brand-accent-soft p-2.5 rounded-md transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden fixed top-16 sm:top-20 left-0 w-full max-h-[calc(100dvh-4rem)] overflow-y-auto bg-brand-card border-b border-brand-border shadow-lg z-40"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`block px-4 py-3 text-base font-medium rounded-md transition-colors ${
                    isActive(link.href)
                      ? "text-brand-accent bg-brand-accent-soft"
                      : "text-brand-primary hover:text-brand-accent hover:bg-brand-accent-soft"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/ne"
                hrefLang="ne"
                lang="ne"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium rounded-md text-brand-primary hover:text-brand-accent hover:bg-brand-accent-soft transition-colors"
              >
                नेपाली
              </Link>
              <div className="pt-4 mt-2 border-t border-brand-border-light px-2">
                <Link
                  href="/quote"
                  onClick={() => setIsMenuOpen(false)}
                  className="btn-primary w-full px-6 py-3"
                >
                  Get a Free Quote <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
