import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, MessageCircle, Navigation } from "lucide-react";
import { site, fullAddress, directionsUrl } from "@/lib/site";
import { servicesData } from "@/data/services";

const companyLinks = [
  { name: "About Us", href: "/#about" },
  { name: "Projects & Portfolio", href: "/projects" },
  { name: "Careers", href: "/careers" },
  { name: "Insights & Blog", href: "/blog" },
  { name: "FAQ", href: "/#faq" },
  { name: "Request a Quote", href: "/quote" },
  { name: "Contact Us", href: "/#contact" },
];

const linkClass = "text-slate-300 hover:text-white hover:underline underline-offset-4 transition-colors";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary text-white">
      <div className="h-1 bg-brand-accent" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <span className="relative w-12 h-12 rounded-lg bg-white/5 border border-white/10 overflow-hidden">
                <Image src="/Company-Logo.jpg" alt="" fill sizes="48px" className="object-contain scale-150" />
              </span>
              <span className="font-bold text-xl tracking-tight">{site.name}</span>
            </Link>
            <p className="text-slate-300 max-w-sm mb-8 leading-relaxed">
              Software development, cloud infrastructure, and IT consulting from Itahari, Nepal — serving businesses across Nepal and worldwide.
            </p>
            <address className="not-italic space-y-3 text-sm">
              <a href={`mailto:${site.email}`} className={`${linkClass} flex items-center gap-3 w-fit`}>
                <Mail className="w-4 h-4 text-brand-accent-light" aria-hidden="true" />
                {site.email}
              </a>
              <a href={`tel:${site.phone.e164}`} className={`${linkClass} flex items-center gap-3 w-fit`}>
                <Phone className="w-4 h-4 text-brand-accent-light" aria-hidden="true" />
                {site.phone.display}
              </a>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className={`${linkClass} flex items-center gap-3 w-fit`}>
                <MessageCircle className="w-4 h-4 text-brand-accent-light" aria-hidden="true" />
                Chat with us on WhatsApp
              </a>
              <span className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-brand-accent-light shrink-0 mt-0.5" aria-hidden="true" />
                {fullAddress}
              </span>
              <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className={`${linkClass} flex items-center gap-3 w-fit`}>
                <Navigation className="w-4 h-4 text-brand-accent-light" aria-hidden="true" />
                Get directions to our office
              </a>
            </address>
          </div>

          <nav aria-labelledby="footer-services" className="lg:col-span-3">
            <h2 id="footer-services" className="text-base font-semibold mb-5">Services</h2>
            <ul className="space-y-3 text-sm">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link href={`/services/${service.id}`} className={linkClass}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-company" className="lg:col-span-2">
            <h2 id="footer-company" className="text-base font-semibold mb-5">Company</h2>
            <ul className="space-y-3 text-sm">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-legal" className="lg:col-span-2">
            <h2 id="footer-legal" className="text-base font-semibold mb-5">Legal</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy" className={linkClass}>Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className={linkClass}>Terms of Service</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400 text-center">
          <p>&copy; {currentYear} {site.name}. All rights reserved.</p>
          <p>Software Development Company in {site.address.locality}, {site.address.district}, Nepal</p>
        </div>
      </div>
    </footer>
  );
}
