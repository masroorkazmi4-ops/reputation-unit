/**
 * Site Content Data for Reputation Unit
 *
 * Structured content for all homepage sections.
 * This file exports typed content objects consumed by React components in Phase 4+.
 *
 * Content rules:
 * - No fake testimonials, fake awards, fake metrics, or fake client logos.
 * - No invented URLs for private projects.
 * - No fixed pricing — quote-based positioning only.
 * - Contact email is a placeholder until final email is confirmed.
 */

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

export const heroContent = {
  eyebrow: "Partner-led Web Development Studio",
  headline: "We build websites and digital systems that businesses rely on.",
  subheadline:
    "Modern websites, web apps, AI tools, dashboards, and business systems — built for clarity, speed, and conversion.",
  primaryCTA: {
    label: "Start a Project",
    href: "#contact",
  },
  secondaryCTA: {
    label: "View Our Work",
    href: "#work",
  },
  proofPoints: [
    "3 Client Projects Delivered",
    "Public & Private Builds",
    "Next.js · TypeScript · Tailwind",
  ],
} as const;

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------

export interface ServiceItem {
  title: string;
  description: string;
  icon?: string; // Icon key — resolved to an actual icon in the component layer
}

export const servicesContent = {
  sectionEyebrow: "What We Build",
  sectionHeadline: "Websites, apps, and systems built for real businesses.",
  sectionDescription:
    "From professional business websites to AI-powered tools and custom ordering systems — every project is scoped to what your business actually needs.",
  items: [
    {
      title: "Business Websites",
      description:
        "Professional, mobile-responsive websites that establish credibility and convert visitors into clients. SEO-ready, fast, and designed to represent your brand.",
    },
    {
      title: "Web Apps & Dashboards",
      description:
        "Custom web applications and dashboards that replace spreadsheets and manual processes. Built for the specific workflows your business runs on.",
    },
    {
      title: "AI-Powered Tools",
      description:
        "Smart tools powered by AI — from intelligent forms and content assistants to automated workflows that save time and reduce manual effort.",
    },
    {
      title: "Forms & Lead Systems",
      description:
        "Contact forms, inquiry systems, and lead capture tools designed to turn website visitors into real business opportunities.",
    },
    {
      title: "Ordering Systems",
      description:
        "Food ordering, service booking, and product ordering systems built to handle real customer transactions and business operations.",
    },
    {
      title: "Business Automation",
      description:
        "Automation-ready systems that connect your tools, reduce repetitive tasks, and let your business run more efficiently.",
    },
    {
      title: "Maintenance & Improvements",
      description:
        "Ongoing support, performance tuning, content updates, and feature improvements after your site or system goes live.",
    },
  ] satisfies ServiceItem[],
} as const;

// ---------------------------------------------------------------------------
// Portfolio / Selected Work
// ---------------------------------------------------------------------------

export interface PortfolioProjectContent {
  id: string;
  title: string;
  type: string;
  industry: string;
  status: "live" | "private-preview" | "launch-ready";
  description: string;
  highlights: string[];
  tech: string[];
  url: string | null;
  privacyNote: string | null;
}

export const portfolioContent = {
  sectionEyebrow: "Selected Work",
  sectionHeadline: "Real projects. Real businesses.",
  sectionDescription:
    "Public and private client projects built with modern tools, clean code, and a focus on what each business actually needs.",
  projects: [
    {
      id: "mk-digitizing",
      title: "MK Digitizing",
      type: "Business Website",
      industry: "Embroidery Digitizing & Apparel Production",
      status: "live",
      description:
        "A professional business website and service landing page for an embroidery digitizing and apparel production support company. Designed to establish credibility and capture service inquiries.",
      highlights: [
        "Service-focused landing page with clear CTAs",
        "Mobile-responsive design",
        "SEO-optimized structure",
        "Fast load performance",
      ],
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      url: "https://mkdigitizing.com",
      privacyNote: null,
    },
    {
      id: "food-service-app",
      title: "Food Service App",
      type: "Business System",
      industry: "Food & Hospitality",
      status: "private-preview",
      description:
        "A private food ordering and service management system built for a business client. Handles real operations including menu management, order processing, and service workflows.",
      highlights: [
        "Food ordering and management system",
        "Business operations workflow",
        "Custom-built for client requirements",
        "Private deployment",
      ],
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      url: null,
      privacyNote: "Private business system — preview available on request.",
    },
    {
      id: "law-firm-website",
      title: "Law Firm Website",
      type: "Professional Services Website",
      industry: "Legal Services",
      status: "launch-ready",
      description:
        "A professional law firm website designed to establish trust, present legal services clearly, and generate client inquiries. Launch-ready and awaiting final domain connection.",
      highlights: [
        "Professional legal services presentation",
        "Trust-focused design and copy",
        "Client inquiry system",
        "Launch-ready build",
      ],
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      url: null,
      privacyNote:
        "Launch-ready build — private preview available until final domain is connected.",
    },
  ] satisfies PortfolioProjectContent[],
} as const;

// ---------------------------------------------------------------------------
// Process
// ---------------------------------------------------------------------------

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processContent = {
  sectionEyebrow: "How We Work",
  sectionHeadline: "A clear process from first conversation to launch.",
  sectionDescription:
    "Every project follows a structured process designed for clarity, accountability, and results. No surprises. No scope creep without discussion.",
  steps: [
    {
      number: "01",
      title: "Discover",
      description:
        "We start with a conversation about your business, your goals, and what you actually need — not what sounds impressive. This shapes the entire project scope.",
    },
    {
      number: "02",
      title: "Structure",
      description:
        "We define the sitemap, page flow, content architecture, and technical requirements. You'll know exactly what's being built before design begins.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "Visual design and UI layout tailored to your brand and industry. Mobile-first, performance-conscious, and built for conversion.",
    },
    {
      number: "04",
      title: "Build",
      description:
        "Clean code, modern frameworks, and real development — not drag-and-drop templates. Every feature is built to work reliably and scale with your business.",
    },
    {
      number: "05",
      title: "Review",
      description:
        "You review the build, request changes, and test everything before launch. We iterate until you're confident in the result.",
    },
    {
      number: "06",
      title: "Launch",
      description:
        "Deployment to production with domain setup, SEO configuration, performance optimization, and a final QA check.",
    },
    {
      number: "07",
      title: "Improve",
      description:
        "Post-launch support, performance monitoring, content updates, and feature additions. Your site grows with your business.",
    },
  ] satisfies ProcessStep[],
} as const;

// ---------------------------------------------------------------------------
// Capabilities / Tech Stack
// ---------------------------------------------------------------------------

export interface Capability {
  name: string;
  category: "framework" | "language" | "styling" | "platform" | "tool" | "workflow";
}

export const capabilitiesContent = {
  sectionEyebrow: "Capabilities",
  sectionHeadline: "Modern tools. Production-grade standards.",
  sectionDescription:
    "We use a focused, modern tech stack — not twenty buzzwords. Every tool is chosen for performance, reliability, and developer experience.",
  items: [
    { name: "Next.js", category: "framework" },
    { name: "React", category: "framework" },
    { name: "TypeScript", category: "language" },
    { name: "Tailwind CSS", category: "styling" },
    { name: "Responsive UI", category: "styling" },
    { name: "SEO & Metadata", category: "tool" },
    { name: "Forms & Lead Capture", category: "tool" },
    { name: "Dashboards", category: "tool" },
    { name: "Appwrite", category: "platform" },
    { name: "Vercel", category: "platform" },
    { name: "GitHub", category: "workflow" },
    { name: "AI-Assisted Development", category: "workflow" },
  ] satisfies Capability[],
} as const;

// ---------------------------------------------------------------------------
// Why Reputation Unit
// ---------------------------------------------------------------------------

export interface Differentiator {
  title: string;
  description: string;
}

export const whyUsContent = {
  sectionEyebrow: "Why Reputation Unit",
  sectionHeadline: "Not an agency. Not a freelancer. A studio you can rely on.",
  sectionDescription:
    "Reputation Unit is a partner-led studio. Every project has direct partner involvement — no hand-offs to junior teams, no account managers in between.",
  differentiators: [
    {
      title: "Partner-Led Accountability",
      description:
        "Two partners. Direct involvement on every project. You work with the people who build your site — not a sales team.",
    },
    {
      title: "Business-First Thinking",
      description:
        "We build what your business needs to grow, not what looks impressive in a portfolio. Every feature is tied to a business goal.",
    },
    {
      title: "Modern Stack, Real Code",
      description:
        "Next.js, TypeScript, Tailwind CSS — production-grade tools used by top engineering teams. No drag-and-drop page builders.",
    },
    {
      title: "Beyond Just Websites",
      description:
        "Web apps, dashboards, AI tools, ordering systems, and automation. If your business needs a digital system, we can build it.",
    },
  ] satisfies Differentiator[],
} as const;

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqContent = {
  sectionEyebrow: "Common Questions",
  sectionHeadline: "Straightforward answers.",
  items: [
    {
      question: "How long does a typical project take?",
      answer:
        "Most business websites take 2–4 weeks from kickoff to launch. Web apps, dashboards, and AI-powered tools can take 4–8 weeks depending on complexity. We'll give you a realistic timeline during the discovery phase.",
    },
    {
      question: "How much does a project cost?",
      answer:
        "Every project is quoted based on scope, features, timeline, and the specific business system required. We don't offer one-size-fits-all pricing because every business is different. Reach out with your project details and we'll provide a clear, honest quote.",
    },
    {
      question: "Do you handle domains and hosting?",
      answer:
        "We can guide you through domain registration and hosting setup. Most of our projects deploy to Vercel, which offers fast, reliable hosting with a generous free tier. We'll help you choose the best option for your situation.",
    },
    {
      question: "What do I need to provide to get started?",
      answer:
        "At minimum: an understanding of what your business does, who your customers are, and what you want the website or system to accomplish. We'll help structure everything else — content, sitemap, design direction — during the discovery phase.",
    },
    {
      question: "How many revisions do I get?",
      answer:
        "Every project includes revision rounds built into the process. We review together at the design and build stages so changes are caught early, not at the end. If something isn't right, we fix it.",
    },
    {
      question: "Do you offer maintenance after launch?",
      answer:
        "Yes. We offer ongoing maintenance and improvement packages for clients who want continued support, updates, content changes, or new features after launch.",
    },
    {
      question: "Can I see previews of your private projects?",
      answer:
        "Some of our client projects are private business systems or pre-launch builds. We can share private previews on request during a project conversation. Our public work is linked directly from the portfolio section.",
    },
    {
      question: "Can you build AI tools or business apps, not just websites?",
      answer:
        "Yes. We build web apps, dashboards, AI-powered tools, ordering systems, contact/lead systems, and custom business tools — not just marketing websites. If your business needs a digital system, we can scope and build it.",
    },
    {
      question: "What if I don't know exactly what I need?",
      answer:
        "That's normal. Start a conversation with us and we'll help you figure out the right scope. Our discovery process is designed to turn vague ideas into clear project plans.",
    },
  ] satisfies FAQItem[],
} as const;

// ---------------------------------------------------------------------------
// Contact / Project Inquiry
// ---------------------------------------------------------------------------

export const contactContent = {
  sectionEyebrow: "Start a Project",
  sectionHeadline: "Let's build something your business can rely on.",
  sectionDescription:
    "Tell us about your project. We'll review your inquiry and get back to you with honest next steps — no automated sales sequences, no pressure.",
  formFields: [
    {
      name: "name",
      label: "Your Name",
      type: "text" as const,
      required: true,
      placeholder: "Jane Smith",
    },
    {
      name: "businessName",
      label: "Business Name",
      type: "text" as const,
      required: false,
      placeholder: "Acme Corp",
    },
    {
      name: "email",
      label: "Email Address",
      type: "email" as const,
      required: true,
      placeholder: "jane@example.com",
    },
    {
      name: "projectType",
      label: "Project Type",
      type: "select" as const,
      required: true,
      placeholder: "Select a project type",
      options: [
        "Business Website",
        "Web App / Dashboard",
        "AI-Powered Tool",
        "Ordering System",
        "Contact / Lead Form System",
        "Business Automation",
        "Maintenance / Improvements",
        "Other / Not Sure Yet",
      ],
    },
    {
      name: "budgetRange",
      label: "Budget Range (Optional)",
      type: "select" as const,
      required: false,
      placeholder: "Select if you'd like",
      options: [
        "Under $1,000",
        "$1,000 – $3,000",
        "$3,000 – $5,000",
        "$5,000 – $10,000",
        "$10,000+",
        "Not sure yet",
      ],
    },
    {
      name: "timeline",
      label: "Timeline (Optional)",
      type: "select" as const,
      required: false,
      placeholder: "Select if you'd like",
      options: [
        "ASAP",
        "Within 2 weeks",
        "Within 1 month",
        "Within 2-3 months",
        "No rush / flexible",
      ],
    },
    {
      name: "message",
      label: "Tell Us About Your Project",
      type: "textarea" as const,
      required: true,
      placeholder:
        "Describe your business, what you need, and any important details. The more context you share, the better we can help.",
    },
  ],
  submitLabel: "Send Inquiry",
  privacyNote:
    "We read every inquiry personally. No automated sales sequences. We'll respond within 1–2 business days.",
} as const;

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

export const footerContent = {
  brand: "Reputation Unit",
  tagline: "Partner-led web development studio.",
  copyright: `© ${new Date().getFullYear()} Reputation Unit. All rights reserved.`,
  links: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
