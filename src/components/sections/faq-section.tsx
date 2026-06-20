import { faqContent } from "@/data/site-content";

export function FAQSection() {
  return (
    <section
      id="faq"
      className="section-shell"
      aria-labelledby="faq-heading"
    >
      <div className="container-page">
        {/* Section header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="eyebrow mb-4">{faqContent.sectionEyebrow}</span>
          <h2
            id="faq-heading"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              color: "var(--color-text-primary)",
              lineHeight: 1.15,
              maxWidth: "480px",
            }}
          >
            {faqContent.sectionHeadline}
          </h2>
        </div>

        {/* FAQ list — native <details>/<summary> for zero-JS accordion */}
        <div
          style={{ maxWidth: "720px", marginInline: "auto" }}
        >
          {faqContent.items.map((item, i) => (
            <details
              key={i}
              style={{
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              <summary
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                  padding: "1.25rem 0",
                  cursor: "pointer",
                  listStyle: "none",
                  color: "var(--color-text-primary)",
                  fontSize: "1rem",
                  fontWeight: 500,
                  lineHeight: 1.5,
                }}
              >
                {item.question}
                {/* Chevron indicator */}
                <span
                  aria-hidden="true"
                  style={{
                    flexShrink: 0,
                    color: "var(--color-accent)",
                    fontSize: "1.25rem",
                    lineHeight: 1,
                    userSelect: "none",
                  }}
                >
                  +
                </span>
              </summary>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  paddingBottom: "1.25rem",
                  margin: 0,
                }}
              >
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
