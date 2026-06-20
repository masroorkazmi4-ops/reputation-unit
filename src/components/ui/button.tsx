import * as React from "react";

/**
 * Button — Reputation Unit UI Primitive
 *
 * Variants:
 *   primary   — filled indigo, used for the main CTA
 *   secondary — transparent with border, used for secondary actions
 *   ghost     — no border, minimal, used for nav/subtle actions
 *
 * Sizes:
 *   md (default), sm, lg
 */

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] border border-transparent",
  secondary:
    "bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border-strong)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]",
  ghost:
    "bg-transparent text-[var(--color-text-secondary)] border border-transparent hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-5 text-xs",
  md: "h-11 px-7 text-sm",
  lg: "h-13 px-9 text-base",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "md", className = "", children, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={[
          // Base
          "inline-flex items-center justify-center gap-2 font-semibold",
          "rounded-full cursor-pointer select-none",
          "transition-[background-color,border-color,color,transform,box-shadow]",
          "duration-[var(--duration-base)] ease-[var(--ease-base)]",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]",
          "active:scale-[0.97]",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          // Variant
          variantClasses[variant],
          // Size
          sizeClasses[size],
          // Custom
          className,
        ].join(" ")}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

/**
 * LinkButton — Anchor element styled as a Button
 * Use when the action navigates rather than triggers.
 */
interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    { variant = "primary", size = "md", className = "", children, ...props },
    ref
  ) => {
    return (
      <a
        ref={ref}
        className={[
          "inline-flex items-center justify-center gap-2 font-semibold",
          "rounded-full cursor-pointer select-none no-underline",
          "transition-[background-color,border-color,color,transform,box-shadow]",
          "duration-[var(--duration-base)] ease-[var(--ease-base)]",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]",
          "active:scale-[0.97]",
          variantClasses[variant],
          sizeClasses[size],
          className,
        ].join(" ")}
        {...props}
      >
        {children}
      </a>
    );
  }
);

LinkButton.displayName = "LinkButton";
