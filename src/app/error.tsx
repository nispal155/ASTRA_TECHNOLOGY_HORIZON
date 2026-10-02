"use client";

import { useEffect } from "react";
import Link from "next/link";
import * as Sentry from "@sentry/nextjs";
import { RotateCcw } from "lucide-react";
import { site } from "@/lib/site";

export default function Error({ error, unstable_retry }: { error: Error & { digest?: string }; unstable_retry: () => void }) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <main id="main" className="min-h-[70vh] flex items-center justify-center px-4 py-24 bg-brand-surface">
      <div className="card max-w-lg w-full p-8 text-center">
        <h1 className="text-2xl font-bold text-brand-primary mb-3">Something went wrong</h1>
        <p className="text-brand-text-secondary mb-6">
          Sorry — this page hit an unexpected error. Please try again, or contact us at{" "}
          <a href={`mailto:${site.email}`} className="text-brand-accent font-medium hover:underline">{site.email}</a>.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button type="button" onClick={() => unstable_retry()} className="btn-primary px-6 py-3">
            <RotateCcw className="w-4 h-4" aria-hidden="true" /> Try again
          </button>
          <Link href="/" className="btn-secondary px-6 py-3">Go to Home</Link>
        </div>
        {error.digest && <p className="mt-6 text-xs text-brand-text-muted">Reference: {error.digest}</p>}
      </div>
    </main>
  );
}
