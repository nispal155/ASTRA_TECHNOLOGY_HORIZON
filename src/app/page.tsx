import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Careers from '@/components/Careers';
import Testimonials from '@/components/Testimonials';
import Map from '@/components/Map';
import Hours from '@/components/Hours';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Careers />
        <Map />
        <Hours />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
