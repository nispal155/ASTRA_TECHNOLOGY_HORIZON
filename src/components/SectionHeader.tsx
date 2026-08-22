import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center mx-auto" : ""} max-w-3xl`}>
      {subtitle && (
        <div className="text-brand-accent font-medium text-sm sm:text-base tracking-wide uppercase mb-4">
          {subtitle}
        </div>
      )}

      <h2 className="text-3xl md:text-4xl font-bold text-brand-primary tracking-tight mb-6">
        {title}
      </h2>

      {description && (
        <p className="text-lg text-brand-text-secondary leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
