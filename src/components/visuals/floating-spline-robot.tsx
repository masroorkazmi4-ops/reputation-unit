"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useReducedMotion } from "motion/react";

// Lazy load Spline to prevent blocking the initial page load bundle
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="w-12 h-12 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] opacity-50 animate-pulse flex items-center justify-center">
      <span className="text-[10px] font-mono text-[var(--color-text-muted)]">3D</span>
    </div>
  ),
});

export function FloatingSplineRobot() {
  const prefersReducedMotion = useReducedMotion();
  const [shouldRender, setShouldRender] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Determine if we should render Spline (only desktop, and after a small delay)
    const handleCheck = () => {
      if (window.innerWidth >= 1024) {
        setShouldRender(true);
      }
    };

    const timer = setTimeout(handleCheck, 1500); // Wait 1.5s so critical content loads first
    return () => clearTimeout(timer);
  }, []);

  if (prefersReducedMotion || !shouldRender || !isVisible) {
    return null;
  }

  return (
    <div 
      className="fixed bottom-6 right-6 z-40 pointer-events-none"
      style={{ width: "300px", height: "400px" }}
    >
      {/* 
        The container handles pointer-events-auto so the user can interact 
        with the Spline cursor, but the fixed container itself doesn't block clicks 
      */}
      <div className="relative w-full h-full pointer-events-auto group">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 z-50 p-1.5 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-muted)] opacity-0 group-hover:opacity-100 transition-opacity hover:text-[var(--color-text-primary)]"
          aria-label="Hide 3D Robot"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        <Spline scene="https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode" />
      </div>
    </div>
  );
}
