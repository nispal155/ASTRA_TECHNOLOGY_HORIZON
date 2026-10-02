import Link from "next/link";
import { ChevronRight } from "lucide-react";
import JsonLd from "./JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

interface Crumb {
  name: string;
  path: string;
}

/** Visible breadcrumb trail with matching BreadcrumbList structured data. Home is prepended automatically. */
export default function Breadcrumbs({ items, className = "" }: { items: Crumb[]; className?: string }) {
  const trail = [{ name: "Home", path: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <JsonLd data={breadcrumbSchema(trail)} />
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-brand-text-secondary">
        {trail.map((crumb, i) => {
          const isLast = i === trail.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-1.5">
              {isLast ? (
                <span aria-current="page" className="font-medium text-brand-primary">
                  {crumb.name}
                </span>
              ) : (
                <>
                  <Link href={crumb.path} className="hover:text-brand-accent underline-offset-4 hover:underline transition-colors">
                    {crumb.name}
                  </Link>
                  <ChevronRight className="w-3.5 h-3.5 text-brand-text-muted" aria-hidden="true" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
