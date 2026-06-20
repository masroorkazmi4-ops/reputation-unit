"use client";

import { useEffect, useState, useRef } from "react";

type TransitionPhase = "idle" | "entering" | "traveling" | "exiting";

const sectionTitles: Record<string, string> = {
  services: "What We Build",
  work: "Selected Work",
  process: "How We Work",
  capabilities: "Modern Stack",
  faq: "Common Questions",
  contact: "Start a Project",
  "why-us": "Why Us",
};

export function SectionTransition() {
  const [phase, setPhase] = useState<TransitionPhase>("idle");
  const [targetName, setTargetName] = useState("");
  const isTransitioning = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const handleClick = (e: MouseEvent) => {
      // Ignore modifier keys for standard OS behaviors
      if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
      if (prefersReducedMotion) return;

      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#") || href.length <= 1) return;

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (!targetElement) return;

      e.preventDefault();

      // Lock to prevent stacking clicks
      if (isTransitioning.current) return;

      // Small pulse if we're already on this section
      if (window.location.hash === href) {
        targetElement.scrollIntoView();
        targetElement.classList.remove("section-gateway-arrive");
        void targetElement.offsetWidth; // Force reflow
        targetElement.classList.add("section-gateway-arrive");
        setTimeout(() => targetElement.classList.remove("section-gateway-arrive"), 700);
        return;
      }

      isTransitioning.current = true;

      const title = sectionTitles[targetId] || targetId.toUpperCase();
      setTargetName(title);

      document.body.classList.add("section-transition-lock");
      document.body.classList.add("viewport-depth-shift");
      
      setPhase("entering");

      setTimeout(() => {
        setPhase("traveling");
        
        // Scroll target into view instantly behind the overlay
        targetElement.scrollIntoView();
        window.history.pushState(null, "", href);
        
        targetElement.classList.add("section-gateway-arrive");

        setTimeout(() => {
          setPhase("exiting");
          document.body.classList.remove("viewport-depth-shift");

          setTimeout(() => {
            setPhase("idle");
            document.body.classList.remove("section-transition-lock");
            isTransitioning.current = false;
            
            setTimeout(() => {
              targetElement.classList.remove("section-gateway-arrive");
              targetElement.setAttribute("tabindex", "-1");
              targetElement.focus({ preventScroll: true });
              targetElement.style.outline = "none";
            }, 700); 
          }, 450); 
        }, 200); 
      }, 350); 
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  if (phase === "idle") return null;

  return (
    <div 
      className="section-gateway-overlay"
      data-phase={phase}
      aria-hidden="true"
    >
      <div className="gateway-panel panel-1" />
      <div className="gateway-panel panel-2" />
      <div className="gateway-panel panel-3" />
      
      <div className="gateway-content-wrapper">
        <div className="gateway-kicker">Navigating to</div>
        <div className="gateway-title">{targetName}</div>
        <div className="gateway-ru-mark">RU</div>
      </div>
    </div>
  );
}
