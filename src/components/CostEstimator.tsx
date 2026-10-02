"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight } from "lucide-react";
import { track } from "@/lib/analytics";

interface EstimatorConfig {
  projectTypes: { id: string; label: string; base: number }[];
  pageOrScreenPrice: number;
  designLevels: { id: string; label: string; multiplier: number }[];
  addons: { id: string; label: string; price: number }[];
  rangeSpread: number;
}

const npr = (n: number) => `NPR ${(Math.round(n / 1000) * 1000).toLocaleString("en-IN")}`;

/** Interactive ballpark estimate driven by content/pricing.json. */
export default function CostEstimator({ config }: { config: EstimatorConfig }) {
  const [type, setType] = useState(config.projectTypes[0].id);
  const [pages, setPages] = useState(5);
  const [design, setDesign] = useState(config.designLevels[0].id);
  const [addons, setAddons] = useState<string[]>([]);

  const { low, high, summary } = useMemo(() => {
    const t = config.projectTypes.find((p) => p.id === type)!;
    const d = config.designLevels.find((l) => l.id === design)!;
    const extras = config.addons.filter((a) => addons.includes(a.id));
    const total = (t.base + pages * config.pageOrScreenPrice) * d.multiplier + extras.reduce((s, a) => s + a.price, 0);
    const low = total * (1 - config.rangeSpread);
    const high = total * (1 + config.rangeSpread);
    const summary = `${t.label}, ${pages} pages/screens, ${d.label}${extras.length ? `, + ${extras.map((e) => e.label).join(", ")}` : ""} ≈ ${npr(low)} – ${npr(high)}`;
    return { low, high, summary };
  }, [type, pages, design, addons, config]);

  const toggleAddon = (id: string) => setAddons((prev) => (prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]));

  return (
    <section aria-labelledby="estimator-heading" className="card p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <span className="w-11 h-11 rounded-[var(--radius-control)] bg-brand-accent-soft text-brand-accent flex items-center justify-center">
          <Calculator className="w-5 h-5" aria-hidden="true" />
        </span>
        <h2 id="estimator-heading" className="text-2xl font-bold text-brand-primary">Project Cost Estimator</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <fieldset>
            <legend className="text-sm font-semibold text-brand-primary mb-3">1. What do you need?</legend>
            <div className="grid sm:grid-cols-2 gap-2">
              {config.projectTypes.map((p) => (
                <label key={p.id} className={`flex items-center gap-2 rounded-[var(--radius-control)] border px-3 py-2.5 cursor-pointer transition-colors ${type === p.id ? "border-brand-accent bg-brand-accent-soft" : "border-brand-border hover:border-brand-accent-muted"}`}>
                  <input type="radio" name="type" value={p.id} checked={type === p.id} onChange={() => setType(p.id)} className="accent-[var(--color-brand-accent)]" />
                  <span className="text-sm text-brand-text">{p.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor="pages" className="text-sm font-semibold text-brand-primary">
              2. Number of pages or app screens: <output htmlFor="pages" className="text-brand-accent">{pages}</output>
            </label>
            <input id="pages" type="range" min={1} max={40} value={pages} onChange={(e) => setPages(Number(e.target.value))} className="w-full mt-3 accent-[var(--color-brand-accent)]" />
          </div>

          <fieldset>
            <legend className="text-sm font-semibold text-brand-primary mb-3">3. Design level</legend>
            <div className="flex flex-wrap gap-2">
              {config.designLevels.map((l) => (
                <label key={l.id} className={`flex items-center gap-2 rounded-full border px-4 py-2 cursor-pointer text-sm transition-colors ${design === l.id ? "border-brand-accent bg-brand-accent-soft text-brand-accent" : "border-brand-border text-brand-text-secondary hover:border-brand-accent-muted"}`}>
                  <input type="radio" name="design" value={l.id} checked={design === l.id} onChange={() => setDesign(l.id)} className="sr-only" />
                  {l.label}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-sm font-semibold text-brand-primary mb-3">4. Add-ons</legend>
            <div className="grid sm:grid-cols-2 gap-2">
              {config.addons.map((a) => (
                <label key={a.id} className="flex items-center gap-2 text-sm text-brand-text cursor-pointer">
                  <input type="checkbox" checked={addons.includes(a.id)} onChange={() => toggleAddon(a.id)} className="w-4 h-4 accent-[var(--color-brand-accent)]" />
                  {a.label}
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="rounded-[var(--radius-card)] bg-brand-accent-soft border border-brand-accent-muted p-6 flex flex-col justify-center text-center">
          <p className="text-sm font-semibold text-brand-text-secondary uppercase tracking-wider mb-2">Estimated investment</p>
          <p className="text-3xl sm:text-4xl font-bold text-brand-primary mb-2" aria-live="polite">
            {npr(low)} – {npr(high)}
          </p>
          <p className="text-sm text-brand-text-secondary mb-6">A ballpark range only. Your final quote depends on detailed requirements.</p>
          <Link
            href={`/quote?estimate=${encodeURIComponent(summary)}`}
            onClick={() => track("estimate_quote_click", { type })}
            className="btn-primary px-6 py-3"
          >
            Get an exact quote <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
