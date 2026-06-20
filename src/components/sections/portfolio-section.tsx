import { portfolioContent } from "@/data/site-content";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/button";

function statusBadgeVariant(status: string) {
  if (status === "live") return "live" as const;
  if (status === "launch-ready") return "launch" as const;
  return "preview" as const;
}

function statusLabel(status: string) {
  if (status === "live") return "Live";
  if (status === "launch-ready") return "Launch Ready";
  return "Private Preview";
}

/** Abstract visual panel — text-based, no fake screenshots */
function ProjectVisual({ title, industry }: { title: string; industry: string }) {
  return (
    <div
      className="grid-bg relative overflow-hidden"
      style={{
        height: "180px",
        borderRadius: "var(--radius-lg) var(--radius-lg) 0 0",
        background: "var(--color-bg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderBottom: "1px solid var(--color-border)",
      }}
      aria-hidden="true"
    >
      {/* Accent glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 60% at 50% 60%, var(--color-accent-glow), transparent 80%)",
          pointerEvents: "none",
        }}
      />
      {/* Label */}
      <div style={{ position: "relative", textAlign: "center", padding: "0 1.5rem" }}>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.6875rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--color-text-muted)",
            marginBottom: "6px",
          }}
        >
          {industry}
        </p>
        <p
          style={{
            fontSize: "1.125rem",
            fontWeight: 700,
            color: "var(--color-text-primary)",
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </p>
      </div>
    </div>
  );
}

export function PortfolioSection() {
  return (
    <section id="work" className="section-shell" aria-labelledby="portfolio-heading">
      <div className="container-page">
        {/* Section header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="eyebrow mb-4">{portfolioContent.sectionEyebrow}</span>
          <h2
            id="portfolio-heading"
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
            {portfolioContent.sectionHeadline}
          </h2>
          <p
            style={{
              color: "var(--color-text-secondary)",
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              maxWidth: "520px",
            }}
          >
            {portfolioContent.sectionDescription}
          </p>
        </div>

        {/* Project cards — CSS hover via .portfolio-card class */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {portfolioContent.projects.map((project) => (
            <article key={project.id} className="portfolio-card">
              <ProjectVisual title={project.title} industry={project.industry} />

              {/* Card body */}
              <div
                style={{
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.875rem",
                  flex: 1,
                }}
              >
                {/* Status + type row */}
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant={statusBadgeVariant(project.status)}>
                    {statusLabel(project.status)}
                  </Badge>
                  <Badge variant="outline">{project.type}</Badge>
                </div>

                <h3
                  style={{
                    fontSize: "1.0625rem",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                    margin: 0,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                    color: "var(--color-text-secondary)",
                    margin: 0,
                  }}
                >
                  {project.description}
                </p>

                {/* Highlights */}
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "4px" }}>
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2"
                      style={{ fontSize: "0.8125rem", color: "var(--color-text-secondary)" }}
                    >
                      <span aria-hidden="true" style={{ color: "var(--color-accent)", marginTop: "2px", flexShrink: 0 }}>✓</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="accent">{t}</Badge>
                  ))}
                </div>

                {/* Privacy note */}
                {project.privacyNote && (
                  <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", fontStyle: "italic", margin: 0 }}>
                    {project.privacyNote}
                  </p>
                )}

                {/* CTA */}
                <div style={{ marginTop: "auto", paddingTop: "0.5rem" }}>
                  {project.url ? (
                    <LinkButton href={project.url} target="_blank" rel="noreferrer" variant="secondary" size="sm">
                      View Live Site ↗
                    </LinkButton>
                  ) : (
                    <LinkButton href="#contact" variant="secondary" size="sm">
                      Request Preview
                    </LinkButton>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
