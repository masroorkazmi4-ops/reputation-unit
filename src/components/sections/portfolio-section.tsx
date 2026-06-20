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

/** 
 * Pseudo-browser visual panel — abstract wireframe approach, no fake screenshots 
 */
function ProjectVisual() {
  return (
    <div
      className="browser-frame relative w-full"
      style={{
        height: "200px",
        border: "none", /* handled by card border */
        borderRadius: "0",
        borderBottom: "1px solid var(--color-border)",
      }}
      aria-hidden="true"
    >
      <div className="browser-header">
        <div className="browser-dot" />
        <div className="browser-dot" />
        <div className="browser-dot" />
        <div className="ml-auto w-1/3 max-w-[120px] h-2.5 rounded bg-[var(--color-border)] opacity-50" />
      </div>
      
      <div className="grid-bg relative flex-1 flex flex-col items-center justify-center p-6 text-center">
        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, var(--color-accent-glow), transparent 70%)",
            pointerEvents: "none",
          }}
        />
        
        {/* Wireframe Mockup Content */}
        <div className="relative z-10 w-full max-w-[200px] flex flex-col items-center gap-3 opacity-80">
          <div className="w-12 h-12 rounded-lg border border-[var(--color-accent)] bg-[var(--color-bg)] flex items-center justify-center shadow-[0_0_15px_var(--color-accent-glow)]">
            <div className="w-5 h-5 border-2 border-dashed border-[var(--color-accent)] rounded-sm opacity-50" />
          </div>
          
          <div className="w-full flex flex-col items-center gap-1.5">
            <div className="h-2 w-1/2 bg-[var(--color-text-muted)] rounded-full" />
            <div className="h-3 w-3/4 bg-[var(--color-text-primary)] rounded-full opacity-60" />
          </div>

          <div className="w-full grid grid-cols-2 gap-2 mt-2">
            <div className="h-10 border border-[var(--color-border)] rounded bg-[var(--color-surface)]" />
            <div className="h-10 border border-[var(--color-border)] rounded bg-[var(--color-surface)]" />
          </div>
        </div>
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

        {/* Project cards — CSS hover depth via .perspective-stage & .depth-card class */}
        <div
          className="perspective-stage"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {portfolioContent.projects.map((project) => (
            <article 
              key={project.id} 
              className="portfolio-card depth-card"
              style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}
            >
              <ProjectVisual />

              {/* Card body */}
              <div
                style={{
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  flex: 1,
                  background: "var(--color-surface)",
                }}
              >
                {/* Status + type row */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <Badge variant={statusBadgeVariant(project.status)}>
                    {statusLabel(project.status)}
                  </Badge>
                  <span style={{ fontSize: "0.6875rem", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    {project.industry}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "var(--color-text-primary)",
                    margin: 0,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.6,
                    color: "var(--color-text-secondary)",
                    margin: 0,
                  }}
                >
                  {project.description}
                </p>

                {/* Highlights */}
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2"
                      style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)" }}
                    >
                      <span aria-hidden="true" style={{ color: "var(--color-accent)", marginTop: "2px", flexShrink: 0 }}>✓</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="accent">{t}</Badge>
                  ))}
                </div>

                {/* Privacy note */}
                {project.privacyNote && (
                  <div style={{ padding: "0.75rem", marginTop: "0.5rem", borderRadius: "var(--radius-sm)", background: "rgba(255,255,255,0.03)", border: "1px solid var(--color-border)" }}>
                    <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", fontStyle: "italic", margin: 0 }}>
                      {project.privacyNote}
                    </p>
                  </div>
                )}

                {/* CTA */}
                <div style={{ marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid var(--color-border)" }}>
                  {project.url ? (
                    <LinkButton href={project.url} target="_blank" rel="noreferrer" variant="secondary" size="sm" className="w-full justify-center">
                      View Live Site ↗
                    </LinkButton>
                  ) : (
                    <LinkButton href="#contact" variant="secondary" size="sm" className="w-full justify-center">
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
