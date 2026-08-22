import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary text-white border-t border-brand-border/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 flex items-center justify-center rounded bg-white p-2">
                <Image
                  src="/Company-Logo.jpg"
                  alt="Astra Technology Horizon Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Astra Technology Horizon
              </span>
            </Link>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              Delivering high-performance software engineering, cloud architecture, and IT consulting services from Nepal to clients worldwide.
            </p>
            <div className="space-y-4 text-slate-400 text-sm">
              <a
                href="mailto:contact@astratechnologyhorizon.com"
                className="hover:text-white transition-colors flex items-center gap-3 w-fit"
              >
                <Mail className="w-4 h-4 text-brand-accent" />
                contact@astratechnologyhorizon.com
              </a>
              <a
                href="tel:+9779852048719"
                className="hover:text-white transition-colors flex items-center gap-3 w-fit"
              >
                <Phone className="w-4 h-4 text-brand-accent" />
                +977 9852048719
              </a>
              <div className="flex items-start gap-3 w-fit">
                <MapPin className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                <span>Itahari-4, Sunsari, Koshi Province, Nepal</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {currentYear} Astra Technology Horizon. All rights reserved.</p>
          <p>Itahari-4, Sunsari, Nepal</p>
        </div>
      </div>
    </footer>
  );
}
