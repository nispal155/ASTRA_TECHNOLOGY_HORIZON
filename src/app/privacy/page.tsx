import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";
import { site, fullAddress } from "@/lib/site";

export const metadata = pageMetadata({
 title: "Privacy Policy",
 description: "How Astra Technology Horizon collects, uses and protects information submitted through our website, contact and quote forms.",
 path: "/privacy",
});

export default function PrivacyPolicy() {
 return (
 <div className="min-h-screen flex flex-col bg-brand-surface">
 <Navbar />
 <main id="main" className="flex-grow pt-28 pb-24">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <Breadcrumbs items={[{ name: "Privacy Policy", path: "/privacy" }]} className="mb-6" />
 <div className="card p-6 sm:p-8 md:p-12">
 <h1 className="text-3xl sm:text-4xl font-bold text-brand-primary tracking-tight mb-8">Privacy Policy</h1>
 <div className="space-y-6 text-brand-text-secondary">
 <p className="text-lg">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
 
 <h2 className="text-2xl font-semibold text-brand-primary mt-8 mb-4">1. Information We Collect</h2>
 <p>
 Astra Technology Horizon (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) collects information that you provide directly to us when you use our website, such as when you fill out a contact form, request a quote, or communicate with our team. This may include your name, email address, phone number, company name, and any other details you choose to provide.
 </p>

 <h2 className="text-2xl font-semibold text-brand-primary mt-8 mb-4">2. How We Use Your Information</h2>
 <p>
 We use the information we collect to:
 </p>
 <ul className="list-disc pl-6 space-y-2">
 <li>Provide, maintain, and improve our services.</li>
 <li>Respond to your comments, questions, and requests.</li>
 <li>Communicate with you about services, offers, and promotions.</li>
 <li>Monitor and analyze trends, usage, and activities in connection with our website.</li>
 </ul>

 <h2 className="text-2xl font-semibold text-brand-primary mt-8 mb-4">3. Information Sharing</h2>
 <p>
 We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.
 </p>

 <h2 className="text-2xl font-semibold text-brand-primary mt-8 mb-4">4. Security</h2>
 <p>
 We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.
 </p>

 <h2 className="text-2xl font-semibold text-brand-primary mt-8 mb-4">5. Contact Us</h2>
 <p>
 If you have any questions about this Privacy Policy, please contact us at:
 <br />
 <strong>Email:</strong> <a href={`mailto:${site.email}`} className="text-brand-accent hover:underline">{site.email}</a>
 <br />
 <strong>Phone:</strong> <a href={`tel:${site.phone.e164}`} className="text-brand-accent hover:underline">{site.phone.display}</a>
 <br />
 <strong>Address:</strong> {fullAddress}
 </p>
 </div>
 </div>
 </div>
 </main>
 <Footer />
 </div>
 );
}
