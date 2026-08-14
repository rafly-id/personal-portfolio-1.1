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
    <section className="flex flex-col md:flex-row justify-between gap-8 md:gap-5 mt-20 md:mt-20 px-4 md:px-0">
      <h1 className="font-bold font-instrument_serif text-[clamp(2.25rem,10vw,4.5rem)] md:text-8xl mt-3 md:mt-10 leading-none">
        <span ref={raflyRef} className="block overflow-hidden pb-1">
          RAFLY
        </span>
        <span ref={adrianRef} className="block overflow-hidden pb-1">
          ADRIANSYAH
        </span>
        <span ref={frontendRef} className="block overflow-hidden pb-1 font-instrument_serif">
          FRONTEND
        </span>
        <span ref={developerRef} className="block overflow-hidden pb-1">
          DEVELOPER
        </span>
      </h1>

      <div className="flex flex-col justify-end uppercase font-light text-sm sm:text-base md:text-lg tracking-tight md:tracking-tighter max-w-xl">
        <p ref={descRef} className="overflow-hidden">
          Crafting Engaging Web Experiences with Precision and Creativity
          Specializing in{" "}
          <span className="font-instrument_serif">React, Next.js, GSAP,</span> and Modern
          Frontend Technologies,
          <span className="font-instrument_serif"> Let's Build Something Amazing Together!</span>
        </p>
      </div>
    </section>
  );
}
