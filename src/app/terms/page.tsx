import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
 title: 'Terms of Service | Astra Technology Horizon',
 description: 'Terms of Service for Astra Technology Horizon, Itahari, Nepal.',
};

export default function TermsOfService() {
 return (
 <div className="min-h-screen flex flex-col bg-brand-surface">
 <Navbar />
 <main className="flex-grow pt-32 pb-24">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="bg-white rounded-lg shadow-sm border border-brand-border p-8 md:p-12">
 <h1 className="text-4xl font-bold text-brand-primary mb-8">Terms of Service</h1>
 <div className="prose prose-slate max-w-none space-y-6 text-brand-text-secondary">
 <p className="text-lg">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
 
 <h2 className="text-2xl font-semibold mt-8 mb-4">1. Agreement to Terms</h2>
 <p>
 By accessing or using the website of Astra Technology Horizon, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access our website or use our services.
 </p>

 <h2 className="text-2xl font-semibold mt-8 mb-4">2. Intellectual Property</h2>
 <p>
 The website and its original content, features, and functionality are owned by Astra Technology Horizon and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
 </p>

 <h2 className="text-2xl font-semibold mt-8 mb-4">3. Services</h2>
 <p>
 Astra Technology Horizon provides IT consulting, software development, and related technical services. The specific terms, deliverables, and conditions of these services are generally outlined in separate project agreements or contracts with our clients.
 </p>

 <h2 className="text-2xl font-semibold mt-8 mb-4">4. Limitation of Liability</h2>
 <p>
 In no event shall Astra Technology Horizon, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the website or our services.
 </p>

 <h2 className="text-2xl font-semibold mt-8 mb-4">5. Governing Law</h2>
 <p>
 These Terms shall be governed and construed in accordance with the laws of Nepal, without regard to its conflict of law provisions.
 </p>

 <h2 className="text-2xl font-semibold mt-8 mb-4">6. Changes</h2>
 <p>
 We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our website after those revisions become effective, you agree to be bound by the revised terms.
 </p>

 <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
 <p>
 If you have any questions about these Terms, please contact us at:
 <br />
 <strong>Email:</strong> contact@astratechnologyhorizon.com
 <br />
 <strong>Phone:</strong> +977 9852048719
 <br />
 <strong>Address:</strong> Itahari-4, Sunsari, Nepal
 </p>
 </div>
 </div>
 </div>
 </main>
 <Footer />
 </div>
 );
}
