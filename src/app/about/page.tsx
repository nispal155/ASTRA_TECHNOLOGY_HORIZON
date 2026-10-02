import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import About from "@/components/About";
import Process from "@/components/Process";
import Leadership from "@/components/Leadership";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About Us — IT Company in Itahari, Nepal",
  description:
    "Meet Astra Technology Horizon, a software development and IT consulting company in Itahari, Sunsari. Our team, our process and the clients we work with.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main id="main" className="flex-grow pt-16 sm:pt-20">
        <section className="bg-gradient-to-b from-brand-accent-soft to-brand-bg pt-10 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ name: "About", path: "/about" }]} className="mb-10" />
            <h1 className="text-4xl md:text-5xl font-bold text-brand-primary tracking-tight max-w-3xl text-balance">
              About {site.name}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-brand-text-secondary max-w-3xl">
              We are a software engineering team in {site.address.locality}, {site.address.district}, helping businesses across Nepal and
              abroad design, build and run reliable websites, apps and cloud systems.
            </p>
          </div>
        </section>
        <About />
        <Process />
        <Leadership />
        <section className="py-16 bg-brand-surface text-center px-4">
          <h2 className="text-3xl font-bold text-brand-primary mb-4">Let&rsquo;s work together</h2>
          <p className="text-brand-text-secondary mb-8 max-w-xl mx-auto">Tell us about your idea and we&rsquo;ll suggest the right approach, timeline and budget.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/quote" className="btn-primary px-7 py-3">Get a Free Quote <ArrowRight className="w-4 h-4" aria-hidden="true" /></Link>
            <Link href="/careers" className="btn-secondary px-7 py-3">Join Our Team</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
