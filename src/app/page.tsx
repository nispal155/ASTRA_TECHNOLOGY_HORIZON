import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Leadership from "@/components/Leadership";
import FAQ from "@/components/FAQ";
import Insights from "@/components/Insights";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import JsonLd from "@/components/JsonLd";
import { faqs } from "@/data/faqs";
import { pageMetadata } from "@/lib/seo";
import { localBusinessSchema, faqSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Software Development Company in Itahari, Nepal",
  description:
    "Software development company in Itahari, Nepal building websites, mobile apps, cloud solutions and digital marketing for growing businesses. Get a free quote.",
  path: "/",
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <JsonLd data={[localBusinessSchema(), faqSchema(faqs)]} />
      <Navbar />
      <main id="main" className="flex-grow">
        <Hero />
        
        <AnimatedSection delay={0.1}>
          <TechMarquee />
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <About />
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <Services />
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <Process />
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <Portfolio />
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <Leadership />
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <Insights />
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <FAQ />
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <ContactForm />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
