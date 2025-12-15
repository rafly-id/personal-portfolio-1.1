"use client";

import { useRef } from "react";
import { useTextReveal } from "@/hooks/useTextReveal";

export default function HeroSection() {
  const raflyRef = useRef<HTMLDivElement>(null);
  const adrianRef = useRef<HTMLDivElement>(null);
  const frontendRef = useRef<HTMLDivElement>(null);
  const developerRef = useRef<HTMLDivElement>(null);

  const descRef = useRef<HTMLParagraphElement>(null);

  useTextReveal({ ref: raflyRef, y: 150, delay: 0 });
  useTextReveal({ ref: adrianRef, y: 150, delay: 0.1 });
  useTextReveal({ ref: frontendRef, y: 150, delay: 0.2 });
  useTextReveal({ ref: developerRef, y: 150, delay: 0.3 });

  useTextReveal({ ref: descRef, y: 100, delay: 0.1, type: "lines" });

  return (
    <section className="flex flex-col md:flex-row justify-between gap-5">
      <div className="font-bold font-oswald text-6xl md:text-8xl mt-5 md:mt-10">
        <div ref={raflyRef} className="overflow-hidden pb-1">
          RAFLY
        </div>
        <div ref={adrianRef} className="overflow-hidden pb-1">
          ADRIANSYAH
        </div>
        <div ref={frontendRef} className="overflow-hidden pb-1 font-kranky">
          FRONTEND
        </div>
        <div ref={developerRef} className="overflow-hidden pb-1">
          DEVELOPER
        </div>
      </div>

      <div className="flex flex-col justify-end uppercase font-light text-sm md:text-lg tracking-tighter max-w-xl">
        <p ref={descRef} className="overflow-hidden">
          Crafting Engaging Web Experiences with Precision and Creativity
          Specializing in{" "}
          <span className="font-kranky">React, Next.js, GSAP,</span> and Modern
          Frontend Technologies,
          <span className="font-kranky"> Let's Build Something Amazing Together!</span>
        </p>
      </div>
    </section>
  );
}
