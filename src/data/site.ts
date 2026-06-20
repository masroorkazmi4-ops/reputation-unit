/**
 * Site constants for Reputation Unit
 * Domain: reputationunit.com
 *
 * TODO: Replace contactEmail placeholder with final verified email before launch.
 * TODO: Configure the contact form backend (options: Web3Forms, Formspree, Resend, Server Action, or mailto fallback).
 * TODO: Update private project preview URLs once client deployments are finalized.
 */

export const siteConfig = {
  siteName: "Reputation Unit",
  shortName: "RU",
  domain: "reputationunit.com",
  url: "https://reputationunit.com",

  // TODO: Replace with verified final email before launch
  contactEmail: "hello@reputationunit.com",

  description:
    "Partner-led web development studio building modern websites, web apps, AI tools, and business systems.",

  tagline: "Built for clarity, speed, and conversion.",

  nav: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],

  portfolioProjects: [
    {
      id: "mk-digitizing",
      title: "MK Digitizing",
      industry: "Embroidery Digitizing / Apparel Production",
      type: "Business website / service landing page",
      description:
        "A professional business website for an embroidery digitizing and apparel production support company.",
      builtWith: ["Next.js"],
      status: "live" as const,
      // Public live website — safe to display as a case study
      url: "https://mkdigitizing.com",
      previewAvailable: true,
    },
    {
      id: "food-service-app",
      title: "Food Service App",
      industry: "Food & Hospitality",
      type: "Private business system / food ordering and service management app",
      description:
        "A private food ordering and service management system built for a business client. Preview available on request.",
      builtWith: ["Next.js"],
      status: "private-preview" as const,
      // TODO: Add preview URL once client approves sharing a staging link
      url: null,
      previewAvailable: true,
    },
    {
      id: "law-firm-website",
      title: "Law Firm Website",
      industry: "Legal Services",
      type: "Law firm website — launch-ready, awaiting final domain connection",
      description:
        "A professional law firm website built and launch-ready. Private preview available on request until the final domain is connected.",
      builtWith: ["Next.js"],
      status: "launch-ready" as const,
      // TODO: Update with final public domain once the client connects it
      url: null,
      previewAvailable: true,
    },
  ],

  services: [
    "Modern Business Websites",
    "Web Apps & Dashboards",
    "AI-Powered Tools",
    "Contact Forms & Ordering Systems",
    "Business Automation Systems",
    "Custom Digital Systems for Small Businesses",
  ],

  social: {
    // TODO: Add social profiles once confirmed
    github: null,
    linkedin: null,
    twitter: null,
  },
} as const;

export type PortfolioProject = (typeof siteConfig.portfolioProjects)[number];
export type ProjectStatus = PortfolioProject["status"];
