import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { servicesData } from "@/data/services";

export const metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main id="main" className="flex-grow pt-28 pb-20 px-4 bg-gradient-to-b from-brand-accent-soft to-brand-bg">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-7xl font-bold text-brand-accent mb-4">404</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-brand-primary mb-4">We can&rsquo;t find that page</h1>
          <p className="text-lg text-brand-text-secondary mb-8">
            The page may have moved or the link may be broken. Try one of these instead:
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Link href="/" className="btn-primary px-6 py-3"><ArrowLeft className="w-4 h-4" aria-hidden="true" /> Back to Home</Link>
            <Link href="/search" className="btn-secondary px-6 py-3"><Search className="w-4 h-4" aria-hidden="true" /> Search the site</Link>
          </div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-text-secondary mb-4">Popular services</h2>
          <ul className="flex flex-wrap justify-center gap-2">
            {servicesData.map((s) => (
              <li key={s.id}>
                <Link href={`/services/${s.id}`} className="inline-block rounded-full border border-brand-border bg-brand-card px-4 py-2 text-sm font-medium text-brand-text-secondary hover:border-brand-accent hover:text-brand-accent transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
