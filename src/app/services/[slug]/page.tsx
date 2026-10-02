import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { servicesData } from '@/data/services';
import { pageMetadata } from '@/lib/seo';
import { serviceSchema } from '@/lib/schema';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.id === slug);
  if (!service) return {};

  return pageMetadata({
    title: `${service.title} Services in Nepal`,
    description: `${service.description} Based in Itahari, Nepal.`,
    path: `/services/${service.id}`,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.id === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const relatedServices = servicesData.filter((s) => s.id !== service.id);

  return (
    <div className="flex flex-col min-h-screen bg-brand-surface">
      <JsonLd data={serviceSchema(service)} />
      <Navbar />

      <main id="main" className="flex-grow pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-brand-accent-soft to-brand-bg border-b border-brand-border py-14 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              className="mb-10"
              items={[
                { name: 'Services', path: '/#services' },
                { name: service.title, path: `/services/${service.id}` },
              ]}
            />

            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-brand-card border border-brand-accent-muted rounded-xl flex items-center justify-center mb-8 shadow-[var(--shadow-card)] [&_svg]:w-7 [&_svg]:h-7">
                {service.icon}
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-brand-primary tracking-tight mb-6 text-balance">
                {service.title} Services in Nepal
              </h1>

              <p className="text-lg sm:text-xl text-brand-text-secondary leading-relaxed max-w-2xl mx-auto mb-8">
                {service.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href={`/quote?service=${encodeURIComponent(service.title)}`} className="btn-primary px-7 py-3">
                  Get a {service.title} Quote <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link href="/#contact" className="btn-secondary px-7 py-3">
                  Talk to Our Team
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <article className="py-14 lg:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-brand-text-secondary">
            <h2 className="text-2xl font-bold text-brand-primary mb-4">Overview</h2>
            <p className="mb-12 text-lg leading-relaxed">
              {service.details}
            </p>

            <h2 className="text-2xl font-bold text-brand-primary mb-6">Key Capabilities</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {service.keyFeatures.map((feature, index) => (
                <li key={index} className="card flex items-start gap-3 p-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="font-medium text-brand-text">{feature}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-brand-primary mb-6">Technologies We Use</h2>
            <ul className="flex flex-wrap gap-3 mb-14">
              {service.technologies.map((tech, index) => (
                <li key={index} className="px-4 py-2 bg-brand-accent-soft border border-brand-accent-muted rounded-md font-medium text-brand-accent-hover text-sm">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-brand-accent-strong rounded-[var(--radius-card)] p-8 sm:p-12 text-center shadow-[var(--shadow-card-hover)]">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to get started?</h2>
            <p className="text-white mb-8 max-w-xl mx-auto">
              Contact us today to discuss how our {service.title.toLowerCase()} services can help accelerate your business growth.
            </p>
            <Link
              href={`/quote?service=${encodeURIComponent(service.title)}`}
              className="inline-flex items-center justify-center gap-2 bg-brand-card text-brand-accent hover:bg-brand-accent-soft px-8 py-4 rounded-[var(--radius-control)] font-bold transition-colors focus-visible:outline-white"
            >
              Request a Proposal <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </article>

        {/* Related services — internal linking */}
        <section aria-labelledby="related-services" className="bg-brand-card border-t border-brand-border py-14 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="related-services" className="text-2xl font-bold text-brand-primary mb-8 text-center">
              Explore Our Other IT Services
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedServices.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.id}`}
                    className="group card flex items-center gap-4 p-5 h-full hover:border-brand-accent hover:shadow-[var(--shadow-card-hover)] transition-all"
                  >
                    <span className="w-10 h-10 rounded-[var(--radius-control)] bg-brand-accent-soft border border-brand-accent-muted flex items-center justify-center shrink-0">
                      {s.icon}
                    </span>
                    <span className="font-semibold text-brand-primary group-hover:text-brand-accent transition-colors">
                      {s.title}
                    </span>
                    <ArrowRight className="w-4 h-4 ml-auto text-brand-accent group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
