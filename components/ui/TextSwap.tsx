"use client";

import React, { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
import { ANIM_DURATIONS, ANIM_EASES } from "@/lib/animation";

interface TextSwapProps {
  text: string;
  className?: string;
  triggerRef?: React.RefObject<HTMLElement | null>; // Optional custom hover trigger
  active?: boolean;
}

export default function TextSwap({
  text,
  className,
  triggerRef,
  active = true,
}: TextSwapProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const wrapperRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (!active) return;
      const trigger = triggerRef?.current || containerRef.current;
      const wrapper = wrapperRef.current;
      if (!trigger || !wrapper) return;

      const tl = gsap.timeline({ paused: true });
      tl.to(wrapper, {
        yPercent: -50,
        duration: ANIM_DURATIONS.fast,
        ease: ANIM_EASES.hover,
      });

      const onHover = () => tl.play();
      const onUnhover = () => tl.reverse();

      trigger.addEventListener("mouseenter", onHover);
      trigger.addEventListener("mouseleave", onUnhover);

      return () => {
        trigger.removeEventListener("mouseenter", onHover);
        trigger.removeEventListener("mouseleave", onUnhover);
      };
    },
    { scope: containerRef, dependencies: [active, triggerRef] }
  );

  return (
    <span
      ref={containerRef}
      className={cn(
        "relative inline-block overflow-hidden [clip-path:inset(0px)] h-[1.3em] leading-[1.3em] align-middle",
        className
      )}
    >
      <span ref={wrapperRef} className="block">
        <span className="block select-none">
          {text}
        </span>
        <span className="block select-none">
          {text}
        </span>
      </span>
    </span>
  );
}
