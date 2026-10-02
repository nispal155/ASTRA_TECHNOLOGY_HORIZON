import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import DraftBanner from "@/components/DraftBanner";
import CostEstimator from "@/components/CostEstimator";
import { pricing, isVisible } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Website & App Development Pricing in Nepal",
  description:
    "Transparent website, e-commerce and mobile app development packages in NPR, plus an instant project cost estimator from Astra Technology Horizon, Itahari.",
  path: "/pricing",
  noindex: pricing.draft,
});

const npr = (n: number) => `NPR ${n.toLocaleString("en-IN")}`;

export default function PricingPage() {
  // Placeholder prices stay hidden in production until content/pricing.json is reviewed.
  if (!isVisible(pricing)) notFound();

  return (
    <div className="flex flex-col min-h-screen bg-brand-surface">
      <Navbar />
      <main id="main" className="flex-grow pt-16 sm:pt-20">
        {pricing.draft && <DraftBanner what="pricing page" />}
        <section className="bg-gradient-to-b from-brand-accent-soft to-brand-surface pt-10 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ name: "Pricing", path: "/pricing" }]} className="mb-10" />
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-primary tracking-tight mb-5">Simple, Transparent Pricing</h1>
              <p className="text-lg text-brand-text-secondary">Choose a starting package or use the estimator for a ballpark figure. Every project gets a detailed, fixed quote before work begins.</p>
            </div>
          </div>
        </section>

        <section aria-label="Packages" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricing.packages.map((pkg) => (
              <li key={pkg.name} className={`card relative p-8 flex flex-col ${pkg.highlighted ? "border-2 border-brand-accent shadow-[var(--shadow-card-hover)]" : ""}`}>
                {pkg.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-accent-strong text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Most popular</span>
                )}
                <h2 className="text-xl font-bold text-brand-primary mb-2">{pkg.name}</h2>
                <p className="text-brand-text-secondary text-sm mb-6">{pkg.description}</p>
                <p className="mb-6">
                  <span className="text-sm text-brand-text-secondary">From </span>
                  <span className="text-3xl font-bold text-brand-primary">{npr(pkg.priceFrom)}</span>
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-brand-text">
                      <Check className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" aria-hidden="true" />{f}
                    </li>
                  ))}
                </ul>
                <Link href={`/quote?service=${encodeURIComponent(pkg.name)}`} className={pkg.highlighted ? "btn-primary px-6 py-3" : "btn-secondary px-6 py-3"}>
                  {pkg.cta}<span className="sr-only"> — {pkg.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <CostEstimator config={pricing.estimator} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
