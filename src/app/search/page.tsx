import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SiteSearch, { type SearchItem } from "@/components/SiteSearch";
import { servicesData } from "@/data/services";
import { getAllPosts } from "@/lib/blog";
import { allJobs, allProjects, visibleLocations } from "@/lib/content";
import { faqs } from "@/data/faqs";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Search",
  description: "Search Astra Technology Horizon services, articles, projects and job openings.",
  path: "/search",
  noindex: true,
});

function buildIndex(): SearchItem[] {
  return [
    ...servicesData.map((s) => ({
      title: s.title,
      description: s.description,
      url: `/services/${s.id}`,
      type: "Service",
      keywords: [...s.keyFeatures, ...s.technologies, s.details].join(" "),
    })),
    ...getAllPosts().map((p) => ({ title: p.title, description: p.description, url: `/blog/${p.slug}`, type: "Article", keywords: p.category })),
    ...allProjects.map((p) => ({ title: p.title, description: p.summary, url: `/projects/${p.id}`, type: "Project", keywords: `${p.category} ${p.tech.join(" ")}` })),
    ...allJobs.map((j) => ({ title: j.title, description: j.description, url: `/careers/${j.slug}`, type: "Job", keywords: `${j.department} ${j.location} ${j.type} career job` })),
    ...visibleLocations.map((l) => ({ title: l.headline, description: l.intro, url: `/locations/${l.slug}`, type: "Location", keywords: `${l.city} ${l.district}` })),
    ...faqs.map((f) => ({ title: f.question, description: f.answer, url: "/#faq", type: "FAQ" })),
    { title: "Get a Free Quote", description: "Request a proposal for your project.", url: "/quote", type: "Page", keywords: "price cost estimate proposal" },
    { title: "Contact Us", description: "Phone, email, office address, map and directions.", url: "/contact", type: "Page", keywords: "phone email address map directions office hours" },
    { title: "About Us", description: "Our team, process and clients.", url: "/about", type: "Page", keywords: "team leadership company" },
  ];
}

export default function SearchPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-surface">
      <Navbar />
      <main id="main" className="flex-grow pt-16 sm:pt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 lg:py-14">
          <Breadcrumbs items={[{ name: "Search", path: "/search" }]} className="mb-8" />
          <h1 className="text-4xl font-bold text-brand-primary tracking-tight mb-8">Search</h1>
          <SiteSearch items={buildIndex()} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
