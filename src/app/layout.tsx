import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wizbit | Automation Beyond Imagination",
  description: "Wizbit creates cinematic AI-powered digital experiences, automation systems, and next-generation web products.",
};

import BottomNav from "@/components/BottomNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased h-full`}>
      <body className="min-h-full flex flex-col bg-brand-dark text-brand-light selection:bg-brand-purple selection:text-white pb-24 md:pb-32">
        <div className="noise-overlay" />
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
