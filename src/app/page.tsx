import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Careers from "@/components/Careers";
import Testimonials from "@/components/Testimonials";
import Hours from "@/components/Hours";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TechStack />
        <About />
        <Services />
        <Process />
        <Portfolio />
        <Testimonials />
        <Careers />
        <Hours />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
