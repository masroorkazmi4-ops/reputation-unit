import { servicesContent } from "@/data/site-content";

/* Minimal inline SVG icons keyed to service title */
const serviceIcons: Record<string, React.ReactNode> = {
  "Business Websites": (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="3" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7 17h6M10 15v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  "Web Apps & Dashboards": (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="11" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="2" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="11" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  "AI-Powered Tools": (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  "Forms & Lead Systems": (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7 7h6M7 10h4M7 13h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  "Ordering Systems": (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 3h2l1 9h8l1-7H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="8" cy="16" r="1.25" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="13" cy="16" r="1.25" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  "Business Automation": (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10a6 6 0 1 1 12 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 4V2M10 18v-2M16 10h2M2 10h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="10" cy="10" r="2" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  "Maintenance & Improvements": (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M14.5 3.5a3 3 0 0 0-4.24 4.24L3.5 14.5A1.5 1.5 0 0 0 5.5 16.5l6.76-6.76a3 3 0 0 0 2.24-6.24z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="5" cy="15" r="1" fill="currentColor"/>
    </svg>
  ),
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="section-shell-alt"
      aria-labelledby="services-heading"
    >
      <div className="container-page">
        {/* Section header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="eyebrow mb-4">{servicesContent.sectionEyebrow}</span>
          <h2
            id="services-heading"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              color: "var(--color-text-primary)",
              lineHeight: 1.15,
              maxWidth: "600px",
              marginBottom: "1rem",
            }}
          >
            {servicesContent.sectionHeadline}
          </h2>
          <p
            style={{
              color: "var(--color-text-secondary)",
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              maxWidth: "560px",
            }}
          >
            {servicesContent.sectionDescription}
          </p>
        </div>

        {/* Services grid */}
        <div
          className="perspective-stage"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {servicesContent.items.map((service) => (
            <article
              key={service.title}
              className="surface-card depth-card"
              style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center rounded-lg"
                style={{
                  width: "40px",
                  height: "40px",
                  background: "var(--color-accent-subtle)",
                  color: "var(--color-accent)",
                  flexShrink: 0,
                  borderRadius: "var(--radius-md)",
                }}
              >
                {serviceIcons[service.title] ?? (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                )}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--color-text-primary)",
                  margin: 0,
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.65,
                  color: "var(--color-text-secondary)",
                  margin: 0,
                }}
              >
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
