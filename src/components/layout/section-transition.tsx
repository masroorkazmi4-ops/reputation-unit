"use client";

import { useEffect, useState } from "react";

type TransitionState = "idle" | "entering" | "exiting";

export function SectionTransition() {
  const [state, setState] = useState<TransitionState>("idle");

  useEffect(() => {
    // Only intercept if motion is allowed
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const handleClick = (e: MouseEvent) => {
      if (prefersReducedMotion) return;

      // Find the closest anchor tag
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      // Only intercept internal hash links
      if (!href || !href.startsWith("#") || href.length <= 1) return;

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      // If target doesn't exist on this page, fall back to normal browser behavior
      if (!targetElement) return;

      // Prevent the default jump
      e.preventDefault();

      // Lock the scroll temporarily to prevent jitter
      document.body.classList.add("section-transition-lock");

      // 1. Enter phase: Overlay covers the screen
      setState("entering");

      // 2. Wait for overlay to fully cover the screen before scrolling
      setTimeout(() => {
        // Jump to the section instantly while hidden
        targetElement.scrollIntoView();
        
        // Update the URL hash
        window.history.pushState(null, "", href);

        // Apply a temporary arrival animation class to the target section
        targetElement.classList.add("section-arrive");

        // 3. Exit phase: Overlay sweeps away to reveal the section
        setState("exiting");

        // 4. Cleanup
        setTimeout(() => {
          setState("idle");
          document.body.classList.remove("section-transition-lock");
          
          // Remove the arrive class after the CSS animation completes
          setTimeout(() => {
            targetElement.classList.remove("section-arrive");
            
            // Set focus for accessibility without causing a jarring scroll jump
            targetElement.setAttribute("tabindex", "-1");
            targetElement.focus({ preventScroll: true });
            
            // Remove outline if it's mouse-focused to keep it pretty
            targetElement.style.outline = "none";
          }, 600); // Wait for the section-arrive animation duration
        }, 450); // Time for the overlay exit animation
      }, 400); // Time for the overlay enter animation
    };

    // Use capture phase to ensure we intercept before any framework routers
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  if (state === "idle") return null;

  return (
    <div 
      className="section-transition-overlay"
      data-state={state}
      aria-hidden="true"
    >
      <div className="transition-glass-panel panel-1" />
      <div className="transition-glass-panel panel-2" />
      <div className="transition-center-mark">
        <div className="transition-ru-chip">RU</div>
      </div>
    </div>
  );
}
