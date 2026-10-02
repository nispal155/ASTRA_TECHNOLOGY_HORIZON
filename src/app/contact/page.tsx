import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import BookingEmbed from "@/components/BookingEmbed";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { localBusinessSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact Us — Office in Itahari, Sunsari",
  description: `Contact ${site.name} in Itahari-4, Sunsari. Call ${site.phone.display}, email ${site.email}, get directions to our office or send us a message.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={localBusinessSchema()} />
      <Navbar />
      <main id="main" className="flex-grow pt-16 sm:pt-20">
        <section className="bg-gradient-to-b from-brand-accent-soft to-brand-bg pt-10 pb-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} className="mb-8" />
            <h1 className="text-4xl md:text-5xl font-bold text-brand-primary tracking-tight">Contact {site.name}</h1>
          </div>
        </section>
        <ContactForm />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <BookingEmbed />
        </div>
      </main>
      <Footer />
    </div>
  );
}
