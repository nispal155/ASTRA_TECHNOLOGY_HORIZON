"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { useQueryParam } from "@/lib/useQueryParam";
import { track } from "@/lib/analytics";

export interface SearchItem {
  title: string;
  description: string;
  url: string;
  type: string;
  keywords?: string;
}

/** Client-side search over a small prebuilt index (services, articles, projects, jobs, pages). */
export default function SiteSearch({ items }: { items: SearchItem[] }) {
  const initial = useQueryParam("q") ?? "";
  const [query, setQuery] = useState<string | null>(null);
  const q = (query ?? initial).trim().toLowerCase();

  const results = useMemo(() => {
    if (!q) return [];
    const terms = q.split(/\s+/);
    return items
      .map((item) => {
        const hay = `${item.title} ${item.description} ${item.keywords ?? ""}`.toLowerCase();
        const score = terms.reduce((s, t) => s + (item.title.toLowerCase().includes(t) ? 3 : 0) + (hay.includes(t) ? 1 : 0), 0);
        return { item, score, all: terms.every((t) => hay.includes(t)) };
      })
      .filter((r) => r.all)
      .sort((a, b) => b.score - a.score)
      .map((r) => r.item);
  }, [q, items]);

  return (
    <div>
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          track("search", { query: q });
          const url = new URL(window.location.href);
          url.searchParams.set("q", query ?? initial);
          window.history.replaceState(null, "", url);
        }}
        className="relative mb-8"
      >
        <label htmlFor="site-search" className="sr-only">Search the website</label>
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text-muted" aria-hidden="true" />
        <input
          id="site-search"
          type="search"
          value={query ?? initial}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search services, articles, projects, jobs…"
          autoFocus
          className="w-full rounded-[var(--radius-card)] border border-brand-border-dark bg-brand-card pl-12 pr-4 py-4 text-lg text-brand-text placeholder:text-brand-text-muted focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent"
        />
      </form>

      {q && (
        <p className="text-sm text-brand-text-secondary mb-4" role="status">
          {results.length} result{results.length === 1 ? "" : "s"} for &ldquo;{q}&rdquo;
        </p>
      )}

      <ul className="space-y-3">
        {results.map((r) => (
          <li key={r.url}>
            <Link href={r.url} className="card block p-5 hover:border-brand-accent transition-colors">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-accent">{r.type}</span>
              <span className="block text-lg font-semibold text-brand-primary mt-1">{r.title}</span>
              <span className="block text-sm text-brand-text-secondary mt-1">{r.description}</span>
            </Link>
          </li>
        ))}
      </ul>

      {q && results.length === 0 && (
        <p className="text-brand-text-secondary">
          No matches. Try another word, browse our <Link href="/#services" className="text-brand-accent font-semibold hover:underline">services</Link>, or{" "}
          <Link href="/contact" className="text-brand-accent font-semibold hover:underline">ask us directly</Link>.
        </p>
      )}
    </div>
  );
}
