"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

export function CursorOrb() {
  const orbRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const checkVisibility = () => {
      // Only render the orb on devices with a fine pointer (mouse)
      setIsVisible(window.innerWidth >= 1024 && window.matchMedia("(pointer: fine)").matches);
    };
    
    checkVisibility();
    window.addEventListener("resize", checkVisibility);

    let rafId: number;
    // Start centered off-screen or neutral until first move
    let mouseX = -200;
    let mouseY = -200;
    let orbX = -200;
    let orbY = -200;

    const handlePointerMove = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const updateOrb = () => {
      if (orbRef.current) {
        orbX += (mouseX - orbX) * 0.15;
        orbY += (mouseY - orbY) * 0.15;
        orbRef.current.style.transform = `translate3d(${orbX}px, ${orbY}px, 0)`;
      }
      rafId = requestAnimationFrame(updateOrb);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    rafId = requestAnimationFrame(updateOrb);

    return () => {
      window.removeEventListener("resize", checkVisibility);
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(rafId);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion || !isVisible) return null;

  return (
    <div
      ref={orbRef}
      className="fixed top-0 left-0 w-48 h-48 -ml-24 -mt-24 rounded-full pointer-events-none z-[9999] mix-blend-screen opacity-50"
      style={{
        background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, rgba(99,102,241,0) 70%)",
        willChange: "transform",
      }}
      aria-hidden="true"
    />
  );
}
