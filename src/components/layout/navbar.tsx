"use client";

import { useState } from "react";
import { LinkButton } from "@/components/ui/button";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        height: "var(--header-height)",
        backgroundColor: "rgba(8,8,15,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div
        className="container-page flex h-full items-center justify-between"
        style={{ height: "var(--header-height)" }}
      >
        {/* Wordmark */}
        <a
          href="#"
          className="flex items-center gap-2 no-underline"
          style={{ color: "var(--color-text-primary)" }}
          aria-label="Reputation Unit — home"
        >
          {/* RU mark */}
          <span
            className="flex items-center justify-center rounded font-bold"
            style={{
              width: "28px",
              height: "28px",
              fontSize: "11px",
              letterSpacing: "0.05em",
              background: "var(--color-accent)",
              color: "#fff",
            }}
          >
            RU
          </span>
          <span
            className="font-semibold"
            style={{ fontSize: "0.9375rem", letterSpacing: "-0.01em" }}
          >
            Reputation Unit
          </span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:flex">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link rounded px-3 py-2 text-sm font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <LinkButton href="#contact" variant="primary" size="sm">
            Start a Project
          </LinkButton>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="flex md:hidden items-center justify-center rounded p-2"
          style={{
            color: "var(--color-text-secondary)",
            border: "1px solid var(--color-border)",
            background: "transparent",
            cursor: "pointer",
            minWidth: "44px",
            minHeight: "44px",
          }}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            /* X icon */
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M2 2L16 16M16 2L2 16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
            </svg>
          ) : (
            /* Hamburger icon */
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          style={{
            background: "var(--color-bg)",
            borderTop: "1px solid var(--color-border)",
            borderBottom: "1px solid var(--color-border)",
          }}
        >
          <nav aria-label="Mobile navigation">
            <ul className="container-page flex flex-col py-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="nav-link flex items-center rounded px-3 py-3 text-sm font-medium"
                    style={{ minHeight: "44px" }}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <LinkButton
                  href="#contact"
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Start a Project
                </LinkButton>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

// Spacer to prevent content from sitting under the fixed header
export function NavbarSpacer() {
  return <div style={{ height: "var(--header-height)" }} aria-hidden="true" />;
}

