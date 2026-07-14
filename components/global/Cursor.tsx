"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Detect touch device (disable custom cursor on mobile/touch screens)
    const isTouchDevice =
      typeof window !== "undefined" &&
      ("ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        (window.matchMedia && window.matchMedia("(max-width: 768px)").matches));

    if (isTouchDevice) return;

    const ctx = gsap.context(() => {
      const cursor = cursorRef.current;
      const ball = ballRef.current;
      const span = textRef.current;
      if (!cursor || !ball || !span) return;

      // Center the cursor container on the mouse pointer
      gsap.set(cursor, { xPercent: -50, yPercent: -50 });

      // High-performance quickTo positioning
      const xTo = gsap.quickTo(cursor, "x", { duration: 0.3, ease: "power3.out" });
      const yTo = gsap.quickTo(cursor, "y", { duration: 0.3, ease: "power3.out" });

      const moveCursor = (e: MouseEvent) => {
        xTo(e.clientX);
        yTo(e.clientY);
      };

      let currentMode = "idle";
      let currentText = "";

      const setCursorState = (newMode: string, text: string = "") => {
        if (currentMode === newMode && currentText === text) return;

        currentMode = newMode;
        currentText = text;

        // Kill active tweens on the elements to prevent visual jitter
        gsap.killTweensOf([ball, span]);

        if (newMode === "view") {
          span.textContent = text;

          // Morph visual ball into a capsule/pill
          gsap.to(ball, {
            width: 130,
            height: 46,
            borderRadius: "24px",
            backgroundColor: "var(--foreground)",
            opacity: 1,
            mixBlendMode: "normal",
            duration: 0.4,
            ease: "power3.out",
          });

          // Reveal text
          gsap.to(span, {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "power3.out",
          });
        } else if (newMode === "interactive") {
          // Large semi-transparent foreground circle for links/buttons
          gsap.to(ball, {
            width: 60,
            height: 60,
            borderRadius: "50%",
            backgroundColor: "var(--foreground)",
            opacity: 0.3,
            mixBlendMode: "normal",
            duration: 0.3,
            ease: "power3.out",
          });

          // Hide text
          gsap.to(span, {
            opacity: 0,
            scale: 0.5,
            duration: 0.2,
            ease: "power3.out",
            onComplete: () => {
              if (currentMode !== "view") span.textContent = "";
            },
          });
        } else {
          // Idle state (minimalist small dot)
          gsap.to(ball, {
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "var(--foreground)",
            opacity: 1,
            mixBlendMode: "normal",
            duration: 0.3,
            ease: "power3.out",
          });

          // Hide text
          gsap.to(span, {
            opacity: 0,
            scale: 0.5,
            duration: 0.2,
            ease: "power3.out",
            onComplete: () => {
              if (currentMode !== "view") span.textContent = "";
            },
          });
        }
      };

      const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (!target) return;

        // 1. Check if hovering a custom cursor trigger (e.g. project cards)
        const customTrigger = target.closest("[data-cursor]") as HTMLElement | null;
        if (customTrigger) {
          const mode = customTrigger.getAttribute("data-cursor");
          const text = customTrigger.getAttribute("data-cursor-text") || "";

          if (mode === "view") {
            setCursorState("view", text);
            return;
          }
        }

        // 2. Check if hovering standard interactive elements
        const isInteractive =
          target.closest("a") ||
          target.closest("button") ||
          target.closest("input") ||
          target.closest("textarea") ||
          window.getComputedStyle(target).cursor === "pointer";

        if (isInteractive) {
          setCursorState("interactive");
        } else {
          setCursorState("idle");
        }
      };

      // Listeners
      window.addEventListener("mousemove", moveCursor);
      window.addEventListener("mouseover", handleMouseOver);

      return () => {
        window.removeEventListener("mousemove", moveCursor);
        window.removeEventListener("mouseover", handleMouseOver);
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-9999 hidden md:flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
      style={{
        width: "150px", // Large enough boundary wrapper to avoid clipping the pill
        height: "150px",
      }}
    >
      <div
        ref={ballRef}
        className="flex items-center justify-center bg-foreground rounded-full w-[10px] h-[10px]"
        style={{
          willChange: "width, height, transform, background-color, border-radius",
        }}
      >
        <span
          ref={textRef}
          className="font-sans text-[10px] uppercase tracking-[0.15em] font-bold text-background opacity-0 scale-50 whitespace-nowrap select-none pointer-events-none leading-none"
        >
          view project
        </span>
      </div>
    </div>
  );
};

export default Cursor;

