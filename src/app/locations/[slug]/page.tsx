import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import DraftBanner from "@/components/DraftBanner";
import JsonLd from "@/components/JsonLd";
import OfficeMap from "@/components/OfficeMap";
import { allLocations, getLocation, isVisible, visibleLocations } from "@/lib/content";
import { servicesData } from "@/data/services";
import { pageMetadata } from "@/lib/seo";
import { localBusinessSchema } from "@/lib/schema";
import { site } from "@/lib/site";

interface LocationPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return allLocations.filter(isVisible).map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const loc = getLocation((await params).slug);
  if (!loc) return {};
  return pageMetadata({
    title: `${loc.headline}, ${loc.district}`,
    description: `Web development, mobile apps, cloud and digital marketing for businesses in ${loc.city}, ${loc.district}. ${site.name} — based in Itahari, Nepal.`,
    path: `/locations/${loc.slug}`,
    noindex: loc.draft,
  });
}

export default async function LocationPage({ params }: LocationPageProps) {
  const loc = getLocation((await params).slug);
  if (!loc || !isVisible(loc)) notFound();
  const isHome = loc.slug === "itahari";
  const others = visibleLocations.filter((l) => l.slug !== loc.slug);

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg">
      {isHome && <JsonLd data={localBusinessSchema()} />}
      <Navbar />
      <main id="main" className="flex-grow pt-16 sm:pt-20">
        {loc.draft && <DraftBanner what="location page" />}
        <section className="bg-gradient-to-b from-brand-accent-soft to-brand-bg pt-10 pb-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ name: "Locations", path: "/locations/itahari" }, { name: loc.city, path: `/locations/${loc.slug}` }]} className="mb-10" />
            <p className="flex items-center gap-2 text-brand-accent font-semibold text-sm uppercase tracking-wider mb-3">
              <MapPin className="w-4 h-4" aria-hidden="true" /> {loc.city}, {loc.district}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-primary tracking-tight mb-6 text-balance">{loc.headline}</h1>
            <p className="text-lg sm:text-xl text-brand-text-secondary max-w-3xl">{loc.intro}</p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link href="/quote" className="btn-primary px-7 py-3">Get a Free Quote <ArrowRight className="w-4 h-4" aria-hidden="true" /></Link>
              <Link href="/contact" className="btn-secondary px-7 py-3">Contact Our Team</Link>
            </div>
          </div>
        </section>

        <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
          <section className="space-y-4 text-lg text-brand-text-secondary leading-relaxed max-w-3xl">
            {loc.body.map((p, i) => <p key={i}>{p}</p>)}
          </section>

          <section aria-labelledby="loc-services">
            <h2 id="loc-services" className="text-2xl font-bold text-brand-primary mb-6">Our services in {loc.city}</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <Link href={`/services/${s.id}`} className="group card flex items-center gap-3 p-5 h-full hover:border-brand-accent transition-colors">
                    <span className="w-10 h-10 rounded-[var(--radius-control)] bg-brand-accent-soft flex items-center justify-center shrink-0">{s.icon}</span>
                    <span className="font-semibold text-brand-primary group-hover:text-brand-accent">{s.title}<span className="sr-only"> in {loc.city}</span></span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {loc.nearby.length > 0 && (
            <p className="text-brand-text-secondary">
              We also work with businesses in nearby areas, including {loc.nearby.join(", ")}.
            </p>
          )}

          <section aria-labelledby="loc-office">
            <h2 id="loc-office" className="text-2xl font-bold text-brand-primary mb-6">{isHome ? "Visit our office" : "Our office"}</h2>
            <OfficeMap />
          </section>

          {others.length > 0 && (
            <nav aria-label="Other locations" className="text-sm text-brand-text-secondary">
              Other areas we serve:{" "}
              {others.map((l, i) => (
                <span key={l.slug}>
                  {i > 0 && ", "}
                  <Link href={`/locations/${l.slug}`} className="text-brand-accent font-medium hover:underline">{l.city}</Link>
                </span>
              ))}
            </nav>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
}
