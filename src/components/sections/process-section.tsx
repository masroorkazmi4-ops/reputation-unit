import { processContent } from "@/data/site-content";

export function ProcessSection() {
  return (
    <section
      id="process"
      className="section-shell-alt"
      aria-labelledby="process-heading"
    >
      <div className="container-page">
        {/* Section header */}
        <div className="mb-14 flex flex-col items-center text-center">
          <span className="eyebrow mb-4">{processContent.sectionEyebrow}</span>
          <h2
            id="process-heading"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              color: "var(--color-text-primary)",
              lineHeight: 1.15,
              maxWidth: "560px",
              marginBottom: "1rem",
            }}
          >
            {processContent.sectionHeadline}
          </h2>
          <p
            style={{
              color: "var(--color-text-secondary)",
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              maxWidth: "520px",
            }}
          >
            {processContent.sectionDescription}
          </p>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1px",
            background: "var(--color-border)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
          }}
        >
          {processContent.steps.map((step) => (
            <div
              key={step.number}
              style={{
                background: "var(--color-surface)",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {/* Step number */}
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "2.5rem",
                  fontWeight: 700,
                  lineHeight: 1,
                  color: "var(--color-accent)",
                  opacity: 0.25,
                  display: "block",
                }}
                aria-hidden="true"
              >
                {step.number}
              </span>

              {/* Title + badge */}
              <div className="flex items-center gap-2">
                <h3
                  style={{
                    fontSize: "1.0625rem",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                    margin: 0,
                  }}
                >
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.65,
                  color: "var(--color-text-secondary)",
                  margin: 0,
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
