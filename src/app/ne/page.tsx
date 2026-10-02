import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OfficeMap from "@/components/OfficeMap";
import JsonLd from "@/components/JsonLd";
import ne from "@content/ne.json";
import { servicesData } from "@/data/services";
import { pageMetadata } from "@/lib/seo";
import { localBusinessSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const base = pageMetadata({ title: ne.title, description: ne.description, path: "/ne" });

export const metadata = {
  ...base,
  alternates: { canonical: "/ne", languages: { en: "/", ne: "/ne", "x-default": "/" } },
  openGraph: { ...base.openGraph, locale: "ne_NP" },
};

type ServiceKey = keyof typeof ne.services;

export default function NepaliHome() {
  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={localBusinessSchema()} />
      <Navbar />
      <main id="main" lang="ne" className="flex-grow pt-16 sm:pt-20">
        <section className="bg-gradient-to-b from-brand-accent-soft to-brand-bg py-14 lg:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p lang="en" className="text-right text-sm mb-6">
              <Link href="/" hrefLang="en" className="text-brand-accent font-semibold hover:underline">{ne.englishLink} →</Link>
            </p>
            <p className="inline-flex rounded-full bg-brand-card border border-brand-accent-muted px-4 py-1.5 text-brand-accent font-semibold text-sm mb-6">{ne.eyebrow}</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-brand-primary leading-tight mb-6">{ne.heading}</h1>
            <p className="text-lg sm:text-xl text-brand-text-secondary max-w-3xl mb-10">{ne.intro}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote" className="btn-primary px-8 py-3.5">{ne.ctaPrimary} <ArrowRight className="w-4 h-4" aria-hidden="true" /></Link>
              <Link href="/contact" className="btn-secondary px-8 py-3.5">{ne.ctaSecondary}</Link>
            </div>
          </div>
        </section>

        <section aria-labelledby="ne-services" className="py-16 bg-brand-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="ne-services" className="text-3xl font-bold text-brand-primary text-center mb-10">{ne.servicesHeading}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesData.map((s) => {
                const t = ne.services[s.id as ServiceKey];
                return (
                  <li key={s.id} className="card p-6 flex flex-col">
                    <span className="w-11 h-11 rounded-[var(--radius-control)] bg-brand-accent-soft flex items-center justify-center mb-4">{s.icon}</span>
                    <h3 className="text-xl font-semibold text-brand-primary mb-2">{t?.title ?? s.title}</h3>
                    <p className="text-brand-text-secondary mb-4 flex-grow">{t?.description ?? s.description}</p>
                    <Link href={`/services/${s.id}`} hrefLang="en" className="text-sm font-semibold text-brand-accent hover:underline">
                      {ne.learnMore}<span className="sr-only">: {t?.title ?? s.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section aria-labelledby="ne-why" className="py-16 bg-brand-bg">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="ne-why" className="text-3xl font-bold text-brand-primary text-center mb-10">{ne.whyHeading}</h2>
            <ul className="grid sm:grid-cols-2 gap-6">
              {ne.why.map((w) => (
                <li key={w.title} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-accent shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-lg font-semibold text-brand-primary mb-1">{w.title}</h3>
                    <p className="text-brand-text-secondary">{w.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="ne-contact" className="py-16 bg-brand-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
            <div>
              <h2 id="ne-contact" className="text-3xl font-bold text-brand-primary mb-8">{ne.contactHeading}</h2>
              <dl className="space-y-6">
                <div>
                  <dt className="flex items-center gap-3 font-semibold text-brand-primary"><MapPin className="w-5 h-5 text-brand-accent" aria-hidden="true" />{ne.addressLabel}</dt>
                  <dd className="text-brand-text-secondary pl-8">{ne.address}</dd>
                </div>
                <div>
                  <dt className="flex items-center gap-3 font-semibold text-brand-primary"><Phone className="w-5 h-5 text-brand-accent" aria-hidden="true" />{ne.phoneLabel}</dt>
                  <dd className="pl-8"><a href={`tel:${site.phone.e164}`} className="text-brand-text-secondary hover:text-brand-accent">{site.phone.display}</a></dd>
                </div>
                <div>
                  <dt className="flex items-center gap-3 font-semibold text-brand-primary"><Mail className="w-5 h-5 text-brand-accent" aria-hidden="true" />{ne.emailLabel}</dt>
                  <dd className="pl-8"><a href={`mailto:${site.email}`} className="text-brand-text-secondary hover:text-brand-accent">{site.email}</a></dd>
                </div>
                <div>
                  <dt className="flex items-center gap-3 font-semibold text-brand-primary"><Clock className="w-5 h-5 text-brand-accent" aria-hidden="true" />{ne.hoursLabel}</dt>
                  {ne.hours.map((h) => <dd key={h} className="text-brand-text-secondary pl-8">{h}</dd>)}
                </div>
              </dl>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-primary mb-8">{ne.mapHeading}</h2>
              <OfficeMap />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
