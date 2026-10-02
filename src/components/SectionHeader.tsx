import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  /** Use "h1" when the header is the page's main heading. */
  as?: "h1" | "h2";
  id?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
  as: Heading = "h2",
  id,
}: SectionHeaderProps) {
  return (
    <div className={`mb-10 md:mb-12 ${centered ? "text-center mx-auto" : ""} max-w-3xl`}>
      {subtitle && (
        <p className="inline-flex items-center gap-2 text-brand-accent font-semibold text-sm tracking-wider uppercase mb-4">
          <span className="w-6 h-0.5 bg-brand-accent rounded-full" aria-hidden="true" />
          {subtitle}
        </p>
      )}

      <Heading
        id={id}
        className={`${Heading === "h1" ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"} font-bold text-brand-primary tracking-tight mb-5 text-balance`}
      >
        {title}
      </Heading>

      {description && (
        <p className="text-lg text-brand-text-secondary leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
