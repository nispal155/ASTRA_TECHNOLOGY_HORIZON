import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Portfolio from '@/components/Portfolio';
import Projects from '@/components/Projects';
import Stats from '@/components/Stats';
import Careers from '@/components/Careers';
import Testimonials from '@/components/Testimonials';
import Map from '@/components/Map';
import Hours from '@/components/Hours';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TechStack />
        <Marquee />
        <About />
        <Services />
        <Process />
        <Portfolio />
        {/* <Projects /> Optional: old projects section if needed, but Portfolio is the new one */}
        <Stats />
        <Testimonials />
        <Careers />
        <Map />
        <Hours />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
