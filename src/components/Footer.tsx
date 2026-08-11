import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-14 h-14 flex items-center justify-center rounded overflow-hidden">
                <Image
                  src="/Company-Logo.jpg"
                  alt="Astra Technology Horizon Logo"
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Astra Technology Horizon
              </span>
            </Link>
            <p className="text-slate-400 max-w-sm mb-6 leading-relaxed text-sm">
              Delivering high-performance software engineering, cloud architecture, and IT consulting services from Nepal to clients worldwide.
            </p>
            <div className="space-y-3 text-slate-400 text-sm">
              <p>
                <a
                  href="mailto:contact@astratechnologyhorizon.com"
                  className="hover:text-white transition-colors flex items-center gap-3 w-fit"
                >
                  <Mail className="w-4 h-4 text-brand-accent" />
                  contact@astratechnologyhorizon.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+9779852048719"
                  className="hover:text-white transition-colors flex items-center gap-3 w-fit"
                >
                  <Phone className="w-4 h-4 text-brand-accent" />
                  +977 9852048719
                </a>
              </p>
              <div className="flex items-start gap-3 w-fit">
                <MapPin className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                <span>Itahari-4, Sunsari, Koshi Province, Nepal</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 hover:text-brand-accent transition-colors flex items-center gap-1 group"
                >
                  Home
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-slate-400 hover:text-brand-accent transition-colors flex items-center gap-1 group"
                >
                  Services
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-slate-400 hover:text-brand-accent transition-colors flex items-center gap-1 group"
                >
                  About Us
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="#careers"
                  className="text-slate-400 hover:text-brand-accent transition-colors flex items-center gap-1 group"
                >
                  Careers
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="#location-hours"
                  className="text-slate-400 hover:text-brand-accent transition-colors flex items-center gap-1 group"
                >
                  Location & Hours
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-slate-400 hover:text-brand-accent transition-colors flex items-center gap-1 group"
                >
                  FAQ
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-slate-400 hover:text-brand-accent transition-colors flex items-center gap-1 group"
                >
                  Contact Us
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-brand-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-brand-accent transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {currentYear} Astra Technology Horizon. All rights reserved.</p>
          <p>Itahari-4, Sunsari, Nepal</p>
        </div>
      </div>
    </footer>
  );
}
