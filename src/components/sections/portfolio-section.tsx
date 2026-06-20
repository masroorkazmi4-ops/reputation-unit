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
 * Specific pseudo-browser wireframes tailored to the project type 
 */
function ProjectVisual({ title }: { title: string }) {
  // Determine wireframe layout based on title
  const isMK = title.includes("MK Digitizing");
  const isFood = title.includes("Food");
  const isLaw = title.includes("Law");

  return (
    <div
      className="browser-frame relative w-full"
      style={{
        height: "150px", // Reduced height for better card balance
        border: "none",
        borderRadius: "0",
        borderBottom: "1px solid var(--color-border)",
      }}
      aria-hidden="true"
    >
      <div className="browser-header">
        <div className="browser-dot" />
        <div className="browser-dot" />
        <div className="browser-dot" />
        <div className="ml-auto w-1/3 max-w-[120px] h-2 rounded bg-[var(--color-border)] opacity-50" />
      </div>
      
      <div className="grid-bg relative flex-1 flex items-start justify-center p-4 overflow-hidden bg-[var(--color-bg)]">
        {/* Universal Accent glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 80% 80% at 50% 20%, var(--color-accent-glow), transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {isMK && (
          <div className="relative z-10 w-full max-w-[240px] flex flex-col gap-2.5 opacity-90">
            {/* Hero bar */}
            <div className="w-full h-10 rounded border border-[var(--color-border-strong)] bg-[var(--color-surface)] flex items-center justify-between px-3">
              <div className="w-8 h-8 rounded-full border border-[var(--color-accent)] opacity-40" />
              <div className="w-16 h-3 rounded-full bg-[var(--color-accent)] opacity-80" />
            </div>
            {/* Service cards */}
            <div className="grid grid-cols-3 gap-2">
               <div className="h-12 rounded border border-[var(--color-border)] bg-[var(--color-surface-elevated)]" />
               <div className="h-12 rounded border border-[var(--color-border)] bg-[var(--color-surface-elevated)]" />
               <div className="h-12 rounded border border-[var(--color-border)] bg-[var(--color-surface-elevated)]" />
            </div>
          </div>
        )}

        {isFood && (
          <div className="relative z-10 w-full max-w-[240px] flex gap-3 opacity-90 h-full">
            {/* Sidebar menu */}
            <div className="w-12 h-full rounded border border-[var(--color-border-strong)] bg-[var(--color-surface)] flex flex-col gap-2 p-2">
              <div className="w-full h-2 rounded bg-[var(--color-border-strong)]" />
              <div className="w-full h-2 rounded bg-[var(--color-border)]" />
              <div className="w-full h-2 rounded bg-[var(--color-border)]" />
            </div>
            {/* Main Dashboard */}
            <div className="flex-1 flex flex-col gap-2 h-full">
              {/* Stats row */}
              <div className="flex gap-2">
                <div className="flex-1 h-6 rounded bg-[var(--color-surface-elevated)] border border-[var(--color-accent)] opacity-40" />
                <div className="flex-1 h-6 rounded bg-[var(--color-surface-elevated)] border border-[var(--color-border)]" />
              </div>
              {/* Order rows */}
              <div className="w-full flex-1 rounded border border-[var(--color-border-strong)] bg-[var(--color-surface)] flex flex-col gap-1 p-2">
                 <div className="w-full h-2 rounded bg-[var(--color-border)]" />
                 <div className="w-3/4 h-2 rounded bg-[var(--color-border)]" />
              </div>
            </div>
          </div>
        )}

        {isLaw && (
          <div className="relative z-10 w-full max-w-[240px] flex flex-col gap-3 opacity-90 items-center">
            {/* Hero title block centered */}
            <div className="w-3/4 flex flex-col items-center gap-1.5 mt-2">
              <div className="w-full h-3 rounded-full bg-[var(--color-text-primary)] opacity-70" />
              <div className="w-2/3 h-2 rounded-full bg-[var(--color-text-muted)]" />
            </div>
            {/* Practice areas (list format) */}
            <div className="w-full flex flex-col gap-1.5 mt-2">
              <div className="w-full h-6 rounded border border-[var(--color-border-strong)] bg-[var(--color-surface)] flex items-center px-2">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
              </div>
              <div className="w-full h-6 rounded border border-[var(--color-border-strong)] bg-[var(--color-surface)] flex items-center px-2">
                <div className="w-2 h-2 rounded-full bg-[var(--color-border-strong)]" />
              </div>
            </div>
          </div>
        )}
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
              <ProjectVisual title={project.title} />

              {/* Card body */}
              <div
                style={{
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.875rem",
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
                    fontSize: "1.1875rem",
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
                      style={{ fontSize: "0.8125rem", color: "var(--color-text-secondary)" }}
                    >
                      <span aria-hidden="true" style={{ color: "var(--color-accent)", marginTop: "2px", flexShrink: 0 }}>✓</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="accent">{t}</Badge>
                  ))}
                </div>

                {/* Privacy note */}
                {project.privacyNote && (
                  <div style={{ padding: "0.625rem", marginTop: "0.25rem", borderRadius: "var(--radius-sm)", background: "rgba(255,255,255,0.03)", border: "1px solid var(--color-border)" }}>
                    <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", fontStyle: "italic", margin: 0 }}>
                      {project.privacyNote}
                    </p>
                  </div>
                )}

                {/* CTA */}
                <div style={{ marginTop: "auto", paddingTop: "1.25rem", borderTop: "1px solid var(--color-border)" }}>
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
