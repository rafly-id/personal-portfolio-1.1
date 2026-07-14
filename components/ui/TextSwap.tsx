"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

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
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (!active) return;
      const trigger = triggerRef?.current || containerRef.current;
      const t1 = text1Ref.current;
      const t2 = text2Ref.current;
      if (!trigger || !t1 || !t2) return;

      const tl = gsap.timeline({ paused: true });
      tl.to(t1, {
        yPercent: -100,
        duration: 0.35,
        ease: "power2.inOut",
      }, 0).to(t2, {
        yPercent: -100,
        duration: 0.35,
        ease: "power2.inOut",
      }, 0);

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
        "relative inline-block overflow-hidden h-[1.1em] leading-[1.1em] align-middle",
        className
      )}
    >
      <span ref={text1Ref} className="block select-none">
        {text}
      </span>
      <span ref={text2Ref} className="absolute block select-none top-full left-0 w-full">
        {text}
      </span>
    </span>
  );
}
