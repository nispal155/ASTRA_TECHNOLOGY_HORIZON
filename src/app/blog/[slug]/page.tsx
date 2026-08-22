import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Article() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 px-4 bg-brand-surface flex items-center justify-center text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
            Article in Progress
          </h1>
          <p className="text-xl text-brand-text-secondary mb-10">
            Our engineering team is finalizing the content for this technical deep-dive. Check back soon.
          </p>
          <Link 
            href="/#insights"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-lg font-medium hover:bg-brand-primary/90 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Insights
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
