"use client";

import { motion, useAnimation, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

export function MotionSection({
  children,
  targetId,
  delay = 0,
}: {
  children: React.ReactNode;
  targetId: string;
  delay?: number;
}) {
  const controls = useAnimation();
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleReplay = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail?.targetId === targetId) {
        controls.set("hidden");
        // Tiny delay to ensure React reflow applies the reset state before animating again
        setTimeout(() => {
          controls.start("visible");
        }, 50);
      }
    };

    window.addEventListener("reputation-unit:section-arrive", handleReplay);
    return () => window.removeEventListener("reputation-unit:section-arrive", handleReplay);
  }, [targetId, controls]);

  if (!mounted || prefersReducedMotion) {
    return <div className="motion-section-wrapper">{children}</div>;
  }

  return (
    <motion.div
      className="motion-section-wrapper"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40, rotateX: 5, scale: 0.985 },
        visible: {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          transition: {
            duration: 0.7,
            ease: [0.2, 0.8, 0.2, 1],
            delay,
          },
        },
      }}
      style={{
        transformOrigin: "top center",
        perspective: "1200px"
      }}
    >
      {children}
    </motion.div>
  );
}
