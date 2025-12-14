"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useTextReveal } from "@/hooks/useTextReveal";

interface OnboardingProps {
  onFinish: () => void;
}

const Onboarding = ({ onFinish }: OnboardingProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useTextReveal({
    ref: textRef,
    y: 150,
    duration: 1,
    stagger: 0.5,
    type: "words",
    trigger: containerRef,
    start: "top bottom",
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      delay: 1.5,
      onComplete: () => {
        onFinish();
        document.body.style.overflow = "auto";
      },
    });

    tl.to(containerRef.current, {
      y: "-100%",
      duration: 1.5,
      ease: "expo.inOut",
    });

    return () => {
      tl.kill();
    };
  }, [onFinish]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-foreground text-background"
    >
      <div className="relative overflow-hidden p-4 text-center">
        <h1
          ref={textRef}
          className="text-5xl md:text-8xl font-bold font-kranky tracking-tighter uppercase opacity-0 invisible"
        >
          RAFLY ADRIANSYAH
        </h1>
      </div>
    </div>
  );
};

export default Onboarding;
