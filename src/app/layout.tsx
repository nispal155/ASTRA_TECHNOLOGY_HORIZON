import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
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
  title: "Astra Technology Horizon | Premier IT Solutions",
  description: "Astra Technology Horizon delivers software engineering, IT consulting, and cloud transformation services in Itahari, Nepal.",
  keywords: ["IT Company Nepal", "Software Development", "Web Design", "Astra Technology", "Itahari IT"],
  authors: [{ name: "Astra Technology Horizon" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://astratechnologyhorizon.com",
    siteName: "Astra Technology Horizon",
    title: "Astra Technology Horizon | Premier IT Solutions",
    description: "Software engineering and IT consulting services in Nepal.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Astra Technology Horizon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Astra Technology Horizon",
    description: "Premier IT Solutions and Software Development",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <head>
        <Script id="schema-org" type="application/ld+json" strategy="afterInteractive">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ITCompany",
            "name": "Astra Technology Horizon",
            "url": "https://astratechnologyhorizon.com",
            "logo": "https://astratechnologyhorizon.com/Company-Logo.jpg",
            "description": "Software engineering and IT consulting firm based in Itahari, Nepal.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Itahari",
              "addressLocality": "Sunsari",
              "addressRegion": "Koshi",
              "postalCode": "56705",
              "addressCountry": "NP"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "9852048719",
              "contactType": "customer service",
              "email": "contact@astratechnologyhorizon.com"
            },
            "sameAs": [
              "https://www.linkedin.com/company/astra-technology-horizon",
              "https://www.facebook.com/astratechnologyhorizon"
            ]
          }
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        {children}
        <ScrollToTop />
        <WhatsAppButton />
      </body>
    </html>
  );
}
