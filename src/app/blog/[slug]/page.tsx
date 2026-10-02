import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import DraftBanner from "@/components/DraftBanner";
import { getAllPosts, getPost, getLegacyRedirects } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";
import { articleSchema } from "@/lib/schema";

interface ArticleProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ArticleProps): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return { robots: { index: false } };
  const meta = pageMetadata({ title: post.title, description: post.description, path: `/blog/${post.slug}`, noindex: post.draft });
  return {
    ...meta,
    openGraph: { ...meta.openGraph, type: "article", publishedTime: post.date, authors: [post.author], images: [{ url: post.image, alt: post.imageAlt }] },
  };
}

export default async function Article({ params }: ArticleProps) {
  const { slug } = await params;

  // Old numeric URLs (/blog/1) permanently redirect to the article slug.
  const legacy = getLegacyRedirects().find((r) => r.legacyId === slug);
  if (legacy) permanentRedirect(`/blog/${legacy.slug}`);

  const post = getPost(slug);
  if (!post) notFound();

  const related = getAllPosts().filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg">
      <JsonLd data={articleSchema(post)} />
      <Navbar />
      <main id="main" className="flex-grow pt-16 sm:pt-20">
        {post.draft && <DraftBanner what="article" />}
        <article>
          <header className="bg-gradient-to-b from-brand-accent-soft to-brand-bg pt-10 pb-10">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
              <Breadcrumbs items={[{ name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }]} className="mb-8" />
              <p className="text-brand-accent font-semibold text-sm uppercase tracking-wider mb-3">{post.category}</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-primary tracking-tight mb-6 text-balance">{post.title}</h1>
              <p className="text-lg text-brand-text-secondary mb-6">{post.description}</p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-brand-text-secondary">
                <span className="font-medium text-brand-primary">{post.author}</span>
                <span aria-hidden="true">·</span>
                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" aria-hidden="true" />{post.readingMinutes} min read</span>
              </div>
            </div>
          </header>

          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="relative aspect-[16/9] rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-card)]">
              <Image src={post.image} alt={post.imageAlt} fill priority sizes="(min-width: 896px) 896px, 100vw" className="object-cover" />
            </div>
          </div>

          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 prose-content" dangerouslySetInnerHTML={{ __html: post.html }} />

          <aside className="max-w-3xl mx-auto px-4 sm:px-6 pb-12">
            <div className="card p-6 sm:p-8 text-center">
              <h2 className="text-2xl font-bold text-brand-primary mb-3">Have a project in mind?</h2>
              <p className="text-brand-text-secondary mb-6">Our team in Itahari builds websites, apps and cloud systems for growing businesses.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/quote" className="btn-primary px-6 py-3">Get a Free Quote</Link>
                <Link href="/blog" className="btn-secondary px-6 py-3"><ArrowLeft className="w-4 h-4" aria-hidden="true" /> All articles</Link>
              </div>
            </div>
          </aside>
        </article>

        {related.length > 0 && (
          <section aria-labelledby="related-articles" className="border-t border-brand-border bg-brand-surface py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
              <h2 id="related-articles" className="text-xl font-bold text-brand-primary mb-6">More articles</h2>
              <ul className="grid sm:grid-cols-2 gap-4">
                {related.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`} className="card block p-5 h-full hover:border-brand-accent transition-colors">
                      <span className="block text-xs font-semibold text-brand-accent uppercase mb-2">{p.category}</span>
                      <span className="font-semibold text-brand-primary">{p.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
