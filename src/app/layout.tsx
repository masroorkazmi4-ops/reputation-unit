import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description = "Reputation Unit is a partner-led web development studio building modern websites, web apps, AI tools, dashboards, and business systems for small businesses and startups.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.siteName,
    template: `%s | ${siteConfig.siteName}`,
  },
  description,
  keywords: ["web development studio", "Next.js websites", "AI tools for business", "custom dashboards", "business automation", "Tailwind CSS developer"],
  authors: [{ name: "Reputation Unit" }],
  creator: "Reputation Unit",
  publisher: "Reputation Unit",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.siteName,
    title: siteConfig.siteName,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.siteName,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-neutral-950 text-white">
        <a 
          href="#main-content" 
          className="absolute top-0 left-0 -translate-y-full px-4 py-3 bg-[var(--color-accent)] text-white font-bold z-[100] focus:translate-y-0 transition-transform duration-200"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
