"use client";

/**
 * ContactSection — Client Component
 *
 * Submits project inquiries via /api/contact to Web3Forms.
 */

import { useState } from "react";
import { contactContent } from "@/data/site-content";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  }

  return (
    <section
      id="contact"
      className="section-shell-alt relative soft-glow"
      aria-labelledby="contact-heading"
    >
      <div className="container-page">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="lg-two-col"
        >
          {/* Left — text block */}
          <div style={{ maxWidth: "480px" }}>
            <span className="eyebrow mb-4 block">{contactContent.sectionEyebrow}</span>
            <h2
              id="contact-heading"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                color: "var(--color-text-primary)",
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              {contactContent.sectionHeadline}
            </h2>
            <p
              style={{
                color: "var(--color-text-secondary)",
                fontSize: "1.0625rem",
                lineHeight: 1.7,
                marginBottom: "2rem",
              }}
            >
              {contactContent.sectionDescription}
            </p>

            {/* Email fallback */}
            <div
              style={{
                padding: "1rem 1.25rem",
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6875rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-text-muted)",
                  marginBottom: "4px",
                }}
              >
                Or email us directly
              </p>
              {/* TODO: Replace with verified email before launch */}
              <a href={`mailto:${siteConfig.contactEmail}`} className="accent-link" style={{ fontSize: "0.9375rem", fontWeight: 500 }}>
                {siteConfig.contactEmail}
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-xl)",
              padding: "clamp(1.5rem, 4vw, 2.5rem)",
            }}
          >
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "2rem 1rem" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "var(--color-success)",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem",
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "0.5rem" }}>
                  Inquiry Received
                </h3>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9375rem", lineHeight: 1.6, marginBottom: "2rem" }}>
                  Thank you for reaching out. We will review your project details and get back to you within 1-2 business days.
                </p>
                <Button variant="secondary" onClick={() => setStatus("idle")}>
                  Send another inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.25rem" }}>
                  
                  {/* Honeypot field - hidden from users but visible to screen readers (and some bots) */}
                  <div style={{ position: "absolute", opacity: 0, top: 0, left: 0, height: 0, width: 0, zIndex: -1, overflow: "hidden" }} aria-hidden="true">
                    <label htmlFor="website">Website (Leave this blank)</label>
                    <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
                  </div>

                  {contactContent.formFields.map((field) => (
                    <div key={field.name} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <label
                        htmlFor={`contact-${field.name}`}
                        style={{ fontSize: "0.8125rem", fontWeight: 500, color: "var(--color-text-secondary)" }}
                      >
                        {field.label}
                        {field.required && (
                          <span aria-hidden="true" style={{ color: "var(--color-accent)", marginLeft: "3px" }}>*</span>
                        )}
                      </label>

                      {field.type === "textarea" ? (
                        <textarea
                          id={`contact-${field.name}`}
                          name={field.name}
                          required={field.required}
                          placeholder={field.placeholder}
                          rows={5}
                          className="form-input"
                        />
                      ) : field.type === "select" ? (
                        <select
                          id={`contact-${field.name}`}
                          name={field.name}
                          required={field.required}
                          defaultValue=""
                          className="form-input"
                        >
                          <option value="" disabled>
                            {"placeholder" in field ? field.placeholder : "Select…"}
                          </option>
                          {"options" in field &&
                            (field.options as readonly string[]).map((opt) => (
                              <option key={opt} value={opt}>{opt}</option>
                            ))}
                        </select>
                      ) : (
                        <input
                          id={`contact-${field.name}`}
                          name={field.name}
                          type={field.type}
                          required={field.required}
                          placeholder={field.placeholder}
                          className="form-input"
                        />
                      )}
                    </div>
                  ))}

                  {/* Error state */}
                  {errorMessage && (
                    <div style={{
                      padding: "0.75rem 1rem",
                      background: "rgba(239, 68, 68, 0.1)",
                      border: "1px solid var(--color-error)",
                      borderRadius: "var(--radius-md)",
                      color: "var(--color-error)",
                      fontSize: "0.875rem",
                    }}>
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit */}
                  <div style={{ paddingTop: "0.5rem" }}>
                    <Button 
                      type="submit" 
                      variant="primary" 
                      size="lg" 
                      style={{ width: "100%" }}
                      disabled={status === "submitting"}
                    >
                      {status === "submitting" ? "Sending..." : contactContent.submitLabel}
                    </Button>
                    <p
                      style={{
                        marginTop: "0.875rem",
                        fontSize: "0.8125rem",
                        color: "var(--color-text-muted)",
                        textAlign: "center",
                        lineHeight: 1.5,
                      }}
                    >
                      {contactContent.privacyNote}
                    </p>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
