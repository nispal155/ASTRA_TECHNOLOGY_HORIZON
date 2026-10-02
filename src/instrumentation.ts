import * as Sentry from "@sentry/nextjs";

// Server/edge error monitoring — disabled until NEXT_PUBLIC_SENTRY_DSN (or SENTRY_DSN) is set.
export function register() {
  const dsn = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;
  if (!dsn) return;
  Sentry.init({
    dsn,
    environment: process.env.VERCEL_ENV || process.env.NODE_ENV,
    tracesSampleRate: 0.1,
  });
}

export const onRequestError = Sentry.captureRequestError;
