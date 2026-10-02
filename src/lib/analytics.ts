"use client";

type Props = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    plausible?: (event: string, options?: { props?: Props }) => void;
  }
}

/** Sends a conversion event to whichever analytics provider is loaded (no-op otherwise). */
export function track(event: string, props: Props = {}) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", event, props);
  window.plausible?.(event, { props });
}
