import * as React from "react";

/**
 * Badge — Reputation Unit UI Primitive
 *
 * Variants:
 *   accent   — indigo-tinted background, used for status tags, tech tags
 *   outline  — transparent with border, used for subtle labels
 *   live     — green-tinted, used for "LIVE" project status
 *   preview  — neutral, used for "PREVIEW" project status
 *   launch   — amber-tinted, used for "LAUNCH-READY" status
 */

type BadgeVariant = "accent" | "outline" | "live" | "preview" | "launch";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  accent:
    "bg-[var(--color-accent-subtle)] text-[var(--color-accent)] border border-[var(--color-accent)]/30",
  outline:
    "bg-transparent text-[var(--color-text-secondary)] border border-[var(--color-border-strong)]",
  live: "bg-emerald-950/60 text-emerald-400 border border-emerald-500/30",
  preview:
    "bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)] border border-[var(--color-border)]",
  launch:
    "bg-amber-950/60 text-amber-400 border border-amber-500/30",
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = "accent", className = "", children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={[
          "inline-flex items-center gap-1",
          "rounded-full px-2.5 py-0.5",
          "text-[11px] font-semibold uppercase tracking-wider",
          "leading-none whitespace-nowrap",
          variantClasses[variant],
          className,
        ].join(" ")}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";
