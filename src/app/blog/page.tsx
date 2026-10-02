import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeader from "@/components/SectionHeader";
import { getAllPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: "Software Engineering Blog & Insights",
    description:
      "Technical deep-dives, case studies and insights on web development, cloud and UI/UX design from the engineering team at Astra Technology Horizon, Nepal.",
    path: "/blog",
  }),
  alternates: { canonical: "/blog", types: { "application/rss+xml": "/rss.xml" } },
};

const formatDate = (d: string) => new Date(d).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });

export default function BlogList() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col min-h-screen bg-brand-surface">
      <Navbar />
      <main id="main" className="flex-grow pt-16 sm:pt-20">
        <section className="pt-10 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-brand-accent-soft to-brand-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ name: "Blog", path: "/blog" }]} className="mb-10" />
            <SectionHeader
              as="h1"
              subtitle="Insights"
              title="Insights & Engineering Blog"
              description="Practical articles on web development, cloud architecture, UI/UX design and growing a digital business."
            />

            {posts.length === 0 ? (
              <p className="text-center text-lg text-brand-text-secondary">
                Our first articles are being finalized. Check back soon, or{" "}
                <Link href="/contact" className="text-brand-accent font-semibold hover:underline">contact our team</Link>.
              </p>
            ) : (
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <article className="group card relative flex flex-col h-full overflow-hidden hover:border-brand-accent hover:shadow-[var(--shadow-card-hover)] transition-all">
                      <div className="relative aspect-[16/10] w-full overflow-hidden">
                        <Image src={post.image} alt={post.imageAlt} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        <span className="absolute top-4 left-4 bg-brand-card/95 px-3 py-1 rounded-full text-xs font-bold text-brand-accent uppercase tracking-wider">{post.category}</span>
                        {post.draft && <span className="absolute top-4 right-4 bg-amber-100 text-amber-900 px-2 py-1 rounded text-xs font-bold">Draft</span>}
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-3 text-xs text-brand-text-secondary mb-3 font-medium">
                          <time dateTime={post.date}>{formatDate(post.date)}</time>
                          <span aria-hidden="true">·</span>
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" aria-hidden="true" />{post.readingMinutes} min read</span>
                        </div>
                        <h2 className="text-xl font-bold text-brand-primary mb-3 leading-snug group-hover:text-brand-accent transition-colors">
                          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 after:content-['']">{post.title}</Link>
                        </h2>
                        <p className="text-brand-text-secondary text-sm leading-relaxed mb-4">{post.description}</p>
                        <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-brand-accent">
                          Read article <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                        </span>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
