import { heroContent } from "@/data/site-content";
import { LinkButton } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section
      className="relative grid-bg soft-glow"
      style={{ paddingBlock: "clamp(6rem, 14vw, 10rem)" }}
      aria-label="Hero"
    >
      <div className="container-page flex flex-col items-center text-center">
        {/* Eyebrow */}
        <div className="mb-6">
          <Badge variant="accent">{heroContent.eyebrow}</Badge>
        </div>

        {/* Headline */}
        <h1
          className="mb-6"
          style={{
            fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-0.035em",
            color: "var(--color-text-primary)",
            maxWidth: "860px",
          }}
        >
          {heroContent.headline}
        </h1>

        {/* Subheadline */}
        <p
          className="mb-10"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            lineHeight: 1.75,
            color: "var(--color-text-secondary)",
            maxWidth: "640px",
          }}
        >
          {heroContent.subheadline}
        </p>

        {/* CTAs */}
        <div className="mb-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <LinkButton href={heroContent.primaryCTA.href} variant="primary" size="lg">
            {heroContent.primaryCTA.label}
          </LinkButton>
          <LinkButton href={heroContent.secondaryCTA.href} variant="secondary" size="lg">
            {heroContent.secondaryCTA.label}
          </LinkButton>
        </div>

        {/* Proof row */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {heroContent.proofPoints.map((point, i) => (
            <span
              key={i}
              className="flex items-center gap-2"
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.8125rem",
                fontFamily: "var(--font-mono)",
              }}
            >
              {i > 0 && (
                <span
                  aria-hidden="true"
                  style={{
                    display: "inline-block",
                    width: "3px",
                    height: "3px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-border-strong)",
                  }}
                />
              )}
              {point}
            </span>
          ))}
        </div>

        {/* Scroll indicator */}
        <div
          className="mt-16 flex flex-col items-center gap-2"
          style={{ color: "var(--color-text-muted)", fontSize: "0.75rem" }}
          aria-hidden="true"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            style={{ opacity: 0.4 }}
          >
            <path
              d="M10 4v12M6 12l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
