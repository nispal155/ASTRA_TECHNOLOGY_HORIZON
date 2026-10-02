"use client";

import { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";

/** Last-resort error boundary (replaces the root layout, so it must render <html> and <body>). */
export default function GlobalError({ error, unstable_retry }: { error: Error & { digest?: string }; unstable_retry: () => void }) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", margin: 0, background: "#F5F8FC", color: "#0F172A" }}>
        <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
          <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 12, padding: 32, maxWidth: 480, textAlign: "center" }}>
            <h1 style={{ fontSize: 24, margin: "0 0 12px", color: "#0B1F3A" }}>Something went wrong</h1>
            <p style={{ color: "#475569", margin: "0 0 24px" }}>Please try again. If the problem continues, email contact@astratech.com.np.</p>
            <button
              type="button"
              onClick={() => unstable_retry()}
              style={{ background: "#1D4ED8", color: "#fff", border: 0, borderRadius: 8, padding: "12px 24px", fontWeight: 600, cursor: "pointer" }}
            >
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
