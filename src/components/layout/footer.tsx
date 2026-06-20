import { footerContent } from "@/data/site-content";
import { siteConfig } from "@/data/site";

const footerNavLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-border)",
        backgroundColor: "var(--color-bg-secondary)",
      }}
      aria-label="Site footer"
    >
      <div className="container-page py-12 md:py-16">
        {/* Top row */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand block */}
          <div style={{ maxWidth: "300px" }}>
            <div className="flex items-center gap-2 mb-3">
              <span
                className="flex items-center justify-center rounded font-bold"
                style={{
                  width: "26px",
                  height: "26px",
                  fontSize: "10px",
                  letterSpacing: "0.05em",
                  background: "var(--color-accent)",
                  color: "#fff",
                  flexShrink: 0,
                }}
              >
                RU
              </span>
              <span
                className="font-semibold"
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--color-text-primary)",
                  letterSpacing: "-0.01em",
                }}
              >
                {footerContent.brand}
              </span>
            </div>

            <p style={{ color: "var(--color-text-secondary)", fontSize: "0.875rem", lineHeight: "1.6", margin: 0 }}>
              {footerContent.tagline}
            </p>

            {/* Contact email — CSS hover via .accent-link class */}
            <div className="mt-4">
              <p
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "4px",
                }}
              >
                Get in touch
              </p>
              {/* TODO: Replace placeholder email with confirmed address before launch */}
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="accent-link"
                style={{ fontSize: "0.875rem" }}
              >
                {siteConfig.contactEmail}
              </a>
            </div>
          </div>

          {/* Nav links — CSS hover via .footer-link class */}
          <nav aria-label="Footer navigation">
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "12px",
              }}
            >
              Navigation
            </p>
            <ul className="flex flex-col gap-2">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer-link" style={{ fontSize: "0.875rem" }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Note block */}
          <div style={{ maxWidth: "240px" }}>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "8px",
              }}
            >
              Portfolio
            </p>
            <p style={{ color: "var(--color-text-secondary)", fontSize: "0.8125rem", lineHeight: "1.6" }}>
              Some client projects are private business systems or pre-launch builds.
              Private previews are available on request.
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="mt-10 pt-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <p style={{ color: "var(--color-text-muted)", fontSize: "0.8125rem", margin: 0 }}>
            {footerContent.copyright}
          </p>
          <p style={{ color: "var(--color-text-muted)", fontSize: "0.8125rem", margin: 0 }}>
            Built with Next.js · Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
