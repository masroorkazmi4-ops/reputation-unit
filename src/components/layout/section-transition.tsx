"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

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
  const [isActive, setIsActive] = useState(false);
  const [targetName, setTargetName] = useState("");
  const isTransitioning = useRef(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
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

      const dispatchReplay = () => {
        window.dispatchEvent(
          new CustomEvent("reputation-unit:section-arrive", {
            detail: { targetId },
          })
        );
      };

      // Small pulse if we're already on this section
      if (window.location.hash === href) {
        targetElement.scrollIntoView();
        dispatchReplay();
        return;
      }

      isTransitioning.current = true;
      const title = sectionTitles[targetId] || targetId.toUpperCase();
      setTargetName(title);

      document.body.classList.add("section-transition-lock");
      document.body.classList.add("viewport-depth-shift");
      
      setIsActive(true);

      // Travel phase
      setTimeout(() => {
        // Scroll target into view instantly behind the overlay
        targetElement.scrollIntoView();
        window.history.pushState(null, "", href);
        
        // Trigger MotionSection entrance replay
        dispatchReplay();

        // Exit phase
        setTimeout(() => {
          setIsActive(false);
          document.body.classList.remove("viewport-depth-shift");

          // Cleanup
          setTimeout(() => {
            document.body.classList.remove("section-transition-lock");
            isTransitioning.current = false;
            
            targetElement.setAttribute("tabindex", "-1");
            targetElement.focus({ preventScroll: true });
            targetElement.style.outline = "none";
          }, 450); 
        }, 150); 
      }, 350); 
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [prefersReducedMotion]);

  // If SSR or idle, just render nothing
  return (
    <AnimatePresence>
      {isActive && !prefersReducedMotion && (
        <motion.div 
          className="section-gateway-overlay"
          aria-hidden="true"
        >
          {/* Glass Panels */}
          <motion.div 
            className="gateway-panel panel-1" 
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.8, 0, 0.2, 1] }}
          />
          <motion.div 
            className="gateway-panel panel-2" 
            initial={{ x: "-100%", skewX: -8, z: 50 }}
            animate={{ x: 0, skewX: -8, z: 50 }}
            exit={{ x: "100%", skewX: -8, z: 50 }}
            transition={{ duration: 0.4, ease: [0.8, 0, 0.2, 1] }}
          />
          <motion.div 
            className="gateway-panel panel-3" 
            initial={{ x: "-100%", skewX: -12, z: 100 }}
            animate={{ x: 0, skewX: -12, z: 100 }}
            exit={{ x: "100%", skewX: -12, z: 100 }}
            transition={{ duration: 0.45, ease: [0.8, 0, 0.2, 1] }}
          />
          
          {/* Gateway Content Wrapper */}
          <motion.div 
            className="gateway-content-wrapper"
            initial={{ opacity: 0, z: 150, x: "-50%", y: "-50%" }}
            animate={{ opacity: 1, z: 150, scale: 1, x: "-50%", y: "-50%" }}
            exit={{ opacity: 0, z: 150, scale: 1.05, x: "-50%", y: "-50%" }}
            transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1], delay: 0.15 }}
          >
            <div className="gateway-kicker">Navigating to</div>
            <div className="gateway-title">{targetName}</div>
            <div className="gateway-ru-mark">RU</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
