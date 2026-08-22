import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { servicesData } from '@/data/services';

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

export default async function ServicePage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.id === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-brand-surface pt-20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white border-b border-brand-border py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/#services" className="inline-flex items-center gap-2 text-sm font-medium text-brand-text-secondary hover:text-brand-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
          
          <div className="w-16 h-16 mx-auto bg-brand-surface border border-brand-border rounded-xl flex items-center justify-center text-brand-primary mb-8">
            {service.icon}
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-brand-primary mb-6">
            {service.title}
          </h1>
          
          <p className="text-xl text-brand-text-secondary leading-relaxed max-w-2xl mx-auto">
            {service.description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none text-brand-text-secondary">
          <h2 className="text-2xl font-bold text-brand-primary mb-6">Overview</h2>
          <p className="mb-12 leading-relaxed">
            {service.details}
          </p>

          <h2 className="text-2xl font-bold text-brand-primary mb-6">Key Capabilities</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 list-none pl-0">
            {service.keyFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-primary shrink-0 mt-0.5" />
                <span className="font-medium text-brand-text">{feature}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-brand-primary mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-3 mb-16">
            {service.technologies.map((tech, index) => (
              <span key={index} className="px-4 py-2 bg-white border border-brand-border rounded-md font-medium text-brand-primary text-sm shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-primary rounded-xl p-8 sm:p-12 text-center shadow-lg mt-8">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to get started?</h3>
          <p className="text-brand-surface opacity-90 mb-8 max-w-xl mx-auto">
            Contact us today to discuss how our {service.title.toLowerCase()} services can help accelerate your business growth.
          </p>
          <Link 
            href={`/quote?service=${encodeURIComponent(service.title)}`}
            className="inline-flex items-center justify-center bg-white text-brand-primary hover:bg-brand-surface px-8 py-4 rounded-md font-bold transition-colors"
          >
            Request a Proposal
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
