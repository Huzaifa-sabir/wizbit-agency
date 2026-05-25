import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wizbit | Enterprise Automation Agency",
  description: "Wizbit creates cinematic AI-powered digital experiences, custom automation systems, and warehouse robotics integrations for enterprise scale.",
  openGraph: {
    title: "Wizbit | Enterprise Automation Agency",
    description: "Architecting autonomous digital pipelines and high-speed robotic integrations.",
    url: "https://wizbitagency.netlify.app",
    siteName: "Wizbit Agency",
    images: [
      {
        url: "/Assets/logo.png",
        width: 1920,
        height: 1080,
        alt: "Wizbit Agency Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wizbit | Enterprise Automation Agency",
    description: "Architecting autonomous digital pipelines and high-speed robotic integrations.",
    images: ["/Assets/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Wizbit Agency",
  "image": "https://wizbitagency.netlify.app/Assets/logo.png",
  "description": "Wizbit creates cinematic AI-powered digital experiences, custom automation systems, and warehouse robotics integrations.",
  "url": "https://wizbitagency.netlify.app",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Global",
    "addressCountry": "Remote"
  },
  "email": "hello@wizbit.agency",
  "priceRange": "$$$"
};

import BottomNav from "@/components/BottomNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-brand-dark text-brand-light selection:bg-brand-purple selection:text-white pb-24 md:pb-32">
        <div className="noise-overlay" />
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
