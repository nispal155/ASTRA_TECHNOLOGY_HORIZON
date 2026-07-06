import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-20 h-20 flex items-center justify-center rounded overflow-hidden">
                <Image 
                  src="/Company-Logo.jpg" 
                  alt="Astra Technology Horizon Logo" 
                  fill
                  sizes="80px"
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Astra Technology Horizon <span className="inline-block animate-bounce relative top-1">🇳🇵</span>
              </span>
            </Link>
            <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
              Turning ideas into intelligent technology. Innovation with precision. We engineer digital solutions that empower businesses to scale.
            </p>
            <div className="space-y-3 text-slate-400 text-sm">
              <p>
                <a href="mailto:contact@nispalbhattarai.com.np" className="hover:text-white transition-colors flex items-center gap-3 w-fit">
                  <Mail className="w-5 h-5 text-brand-accent" />
                  contact@nispalbhattarai.com.np
                </a>
              </p>
              <p>
                <a href="tel:+9779852048719" className="hover:text-white transition-colors flex items-center gap-3 w-fit">
                  <Phone className="w-5 h-5 text-brand-accent" />
                  +977 9852048719
                </a>
              </p>
              <div className="flex items-start gap-3 w-fit">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <span>
                  Itahari-4, Sunsari<br />
                  Koshi Province, Nepal
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-slate-400 hover:text-brand-accent transition-colors flex items-center gap-1 group">
                  Home
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-400 hover:text-brand-accent transition-colors flex items-center gap-1 group">
                  Services
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-slate-400 hover:text-brand-accent transition-colors flex items-center gap-1 group">
                  About
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="#careers" className="text-slate-400 hover:text-brand-accent transition-colors flex items-center gap-1 group">
                  Careers
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="#location-hours" className="text-slate-400 hover:text-brand-accent transition-colors flex items-center gap-1 group">
                  Location & Hours
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-slate-400 hover:text-brand-accent transition-colors flex items-center gap-1 group">
                  FAQ
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-slate-400 hover:text-brand-accent transition-colors flex items-center gap-1 group">
                  Contact Us
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-brand-accent transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-brand-accent transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-slate-500 text-sm">
              &copy; {currentYear} Astra Technology Horizon. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm font-medium">
              Developed by Astra Technology Horizon
            </p>
          </div>
          <p className="text-slate-500 text-sm">
            Located in Itahari-4, Nepal
          </p>
        </div>
      </div>
    </footer>
  );
}
