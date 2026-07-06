import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://astratechnologyhorizon.com'),
  title: "Astra Technology Horizon",
  description: "Turning ideas into intelligent technology. Innovation with precision. Itahari's premier technical partner.",
  openGraph: {
    title: "Astra Technology Horizon",
    description: "Turning ideas into intelligent technology. Innovation with precision. Itahari's premier technical partner.",
    url: "https://astratechnologyhorizon.com",
    siteName: "Astra Technology Horizon",
    images: [
      {
        url: "/Company-Logo.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Astra Technology Horizon",
    description: "Turning ideas into intelligent technology.",
    images: ["/Company-Logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Astra Technology Horizon",
    "image": "https://astratechnologyhorizon.com/Company-Logo.jpg",
    "description": "Premier IT consulting and software engineering firm based in Itahari, Nepal.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Itahari-4",
      "addressLocality": "Sunsari",
      "addressRegion": "Koshi Province",
      "addressCountry": "NP"
    },
    "telephone": "+977-9852048719"
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Placeholder for Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
