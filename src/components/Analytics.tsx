"use client";

import { useEffect, useSyncExternalStore } from "react";
import Script from "next/script";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { integrations } from "@/lib/site";
import { track } from "@/lib/analytics";

const CONSENT_KEY = "cookie-consent"; // "granted" | "denied"
type Consent = "granted" | "denied" | null;

const listeners = new Set<() => void>();
const readConsent = (): Consent => {
  try {
    return localStorage.getItem(CONSENT_KEY) as Consent;
  } catch {
    return null;
  }
};
const setConsent = (value: "granted" | "denied") => {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {}
  window.gtag?.("consent", "update", { analytics_storage: value });
  listeners.forEach((l) => l());
};
const subscribe = (cb: () => void) => {
  listeners.add(cb);
  return () => listeners.delete(cb);
};

/**
 * Loads analytics only when configured:
 * - Plausible (cookieless) loads immediately when NEXT_PUBLIC_PLAUSIBLE_DOMAIN is set.
 * - GA4 loads with Consent Mode (storage denied) and a cookie banner when NEXT_PUBLIC_GA_ID is set.
 * Also records phone, email and WhatsApp clicks as conversion events.
 */
export default function Analytics() {
  const { gaId, plausibleDomain } = integrations;
  const consent = useSyncExternalStore(subscribe, readConsent, () => "denied" as Consent);
  const pathname = usePathname();

  // Conversion events for contact links anywhere on the page
  useEffect(() => {
    if (!gaId && !plausibleDomain) return;
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest?.("a");
      const href = link?.getAttribute("href") || "";
      if (href.startsWith("tel:")) track("phone_click", { page: location.pathname });
      else if (href.startsWith("mailto:")) track("email_click", { page: location.pathname });
      else if (href.includes("wa.me/")) track("whatsapp_click", { page: location.pathname });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [gaId, plausibleDomain]);

  // GA4 page views on client-side navigation
  useEffect(() => {
    if (gaId) window.gtag?.("event", "page_view", { page_path: pathname });
  }, [gaId, pathname]);

  return (
    <>
      {plausibleDomain && (
        <Script src="https://plausible.io/js/script.tagged-events.js" data-domain={plausibleDomain} strategy="afterInteractive" />
      )}

      {gaId && (
        <>
          <Script id="ga-consent" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:(function(){try{return localStorage.getItem('${CONSENT_KEY}')==='granted'?'granted':'denied'}catch(e){return 'denied'}})()});
gtag('js',new Date());gtag('config',${JSON.stringify(gaId)},{send_page_view:false});`}
          </Script>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />

          {consent === null && (
            <div
              role="dialog"
              aria-live="polite"
              aria-label="Cookie consent"
              className="fixed inset-x-4 bottom-24 sm:bottom-6 sm:left-auto sm:right-24 sm:max-w-md z-[60] card p-5 shadow-[var(--shadow-card-hover)]"
            >
              <p className="text-sm text-brand-text-secondary mb-4">
                We use analytics cookies to understand how visitors use our site and improve it. No advertising cookies.{" "}
                <Link href="/privacy" className="text-brand-accent font-medium hover:underline">Privacy policy</Link>
              </p>
              <div className="flex gap-3">
                <button type="button" onClick={() => setConsent("granted")} className="btn-primary px-4 py-2 text-sm">Accept</button>
                <button type="button" onClick={() => setConsent("denied")} className="btn-secondary px-4 py-2 text-sm">Decline</button>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
