"use client";

import { useSyncExternalStore } from "react";

const subscribe = (onChange: () => void) => {
  window.addEventListener("popstate", onChange);
  return () => window.removeEventListener("popstate", onChange);
};

/**
 * Reads a URL query parameter on the client without opting the page out of
 * static rendering (returns null during prerender/hydration).
 */
export function useQueryParam(name: string): string | null {
  const search = useSyncExternalStore(subscribe, () => window.location.search, () => "");
  return new URLSearchParams(search).get(name);
}
