import { capabilitiesContent } from "@/data/site-content";
import { Badge } from "@/components/ui/badge";

const categoryOrder = [
  "framework",
  "language",
  "styling",
  "tool",
  "platform",
  "workflow",
] as const;

const categoryLabels: Record<string, string> = {
  framework: "Frameworks",
  language: "Language",
  styling: "Styling",
  tool: "Tools",
  platform: "Platform",
  workflow: "Workflow",
};

export function CapabilitiesSection() {
  // Group items by category in defined order
  const grouped = categoryOrder.map((cat) => ({
    category: cat,
    label: categoryLabels[cat],
    items: capabilitiesContent.items.filter((item) => item.category === cat),
  })).filter((g) => g.items.length > 0);

  return (
    <section
      id="capabilities"
      className="section-shell"
      aria-labelledby="capabilities-heading"
    >
      <div className="container-page">
        {/* Section header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="eyebrow mb-4">{capabilitiesContent.sectionEyebrow}</span>
          <h2
            id="capabilities-heading"
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
            {capabilitiesContent.sectionHeadline}
          </h2>
          <p
            style={{
              color: "var(--color-text-secondary)",
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              maxWidth: "520px",
            }}
          >
            {capabilitiesContent.sectionDescription}
          </p>
        </div>

        {/* Capabilities grid by category */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "1rem",
          }}
        >
          {grouped.map(({ category, label, items }) => (
            <div
              key={category}
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                padding: "1.25rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6875rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-text-muted)",
                  marginBottom: "10px",
                }}
              >
                {label}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <Badge key={item.name} variant="accent">
                    {item.name}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p
          className="mt-10 text-center"
          style={{
            color: "var(--color-text-muted)",
            fontSize: "0.8125rem",
            lineHeight: 1.6,
          }}
        >
          Every tool is chosen for performance, reliability, and long-term maintainability — not trends.
        </p>
      </div>
    </section>
  );
}
