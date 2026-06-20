import { whyUsContent } from "@/data/site-content";

const differentiatorIcons = [
  /* Partner-Led */
  <svg key="1" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="14" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M2 18c0-3 2.5-5 6-5M20 18c0-3-2.5-5-6-5M11 13c3.5 0 6 2 6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
  /* Business-First */
  <svg key="2" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <rect x="3" y="7" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M7 7V5a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M11 12v3M9.5 13.5h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
  /* Modern Stack */
  <svg key="3" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <path d="M3 7l8-4 8 4v8l-8 4-8-4V7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M11 3v16M3 7l8 4 8-4" stroke="currentColor" strokeWidth="1.5"/>
  </svg>,
  /* Beyond Websites */
  <svg key="4" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="12" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="3" y="12" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M15.5 12v7M12 15.5h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
];

export function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="section-shell-alt"
      aria-labelledby="why-us-heading"
    >
      <div className="container-page">
        {/* Section header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="eyebrow mb-4">{whyUsContent.sectionEyebrow}</span>
          <h2
            id="why-us-heading"
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
            {whyUsContent.sectionHeadline}
          </h2>
          <p
            style={{
              color: "var(--color-text-secondary)",
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              maxWidth: "520px",
            }}
          >
            {whyUsContent.sectionDescription}
          </p>
        </div>

        {/* Differentiator cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1rem",
          }}
        >
          {whyUsContent.differentiators.map((item, i) => (
            <article
              key={item.title}
              className="surface-card"
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "var(--radius-md)",
                  background: "var(--color-accent-subtle)",
                  border: "1px solid rgba(99,102,241,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-accent)",
                  flexShrink: 0,
                }}
              >
                {differentiatorIcons[i]}
              </div>

              <div>
                <h3
                  style={{
                    fontSize: "1.0625rem",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                    color: "var(--color-text-secondary)",
                    margin: 0,
                  }}
                >
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
