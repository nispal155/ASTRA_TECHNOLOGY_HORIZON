import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

interface PlaceholderPageProps {
  title: string;
  message: string;
  backHref: string;
  backLabel: string;
  breadcrumbs: { name: string; path: string }[];
}

/** Shared layout for "coming soon" pages (blog, case studies). */
export default function PlaceholderPage({ title, message, backHref, backLabel, breadcrumbs }: PlaceholderPageProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main id="main" className="flex-grow pt-28 pb-24 px-4 bg-gradient-to-b from-brand-accent-soft to-brand-surface">
        <div className="max-w-2xl mx-auto">
          <Breadcrumbs items={breadcrumbs} className="mb-12" />
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-primary tracking-tight mb-6 text-balance">
              {title}
            </h1>
            <p className="text-xl text-brand-text-secondary mb-10">{message}</p>
            <Link href={backHref} className="btn-primary px-6 py-3">
              <ArrowLeft className="w-5 h-5" aria-hidden="true" />
              {backLabel}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
