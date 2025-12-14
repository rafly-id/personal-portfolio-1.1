"use client";

import { useRef } from "react";
import { useTextReveal } from "@/hooks/useTextReveal";

export default function HeroSection() {
  const raflyRef = useRef<HTMLDivElement>(null);
  const adrianRef = useRef<HTMLDivElement>(null);
  const frontendRef = useRef<HTMLDivElement>(null);
  const developerRef = useRef<HTMLDivElement>(null);

  const desc1Ref = useRef<HTMLParagraphElement>(null);
  const desc2Ref = useRef<HTMLParagraphElement>(null);
  const desc3Ref = useRef<HTMLParagraphElement>(null);

  useTextReveal({ ref: raflyRef, y: 150, delay: 0 });
  useTextReveal({ ref: adrianRef, y: 150, delay: 0.1 });
  useTextReveal({ ref: frontendRef, y: 150, delay: 0.2 });
  useTextReveal({ ref: developerRef, y: 150, delay: 0.3 });

  useTextReveal({ ref: desc1Ref, y: 100, delay: 0.1, type: "lines" });
  useTextReveal({ ref: desc2Ref, y: 100, delay: 0.2, type: "lines" });
  useTextReveal({ ref: desc3Ref, y: 100, delay: 0.3, type: "lines" });

  return (
    <section className="flex flex-col md:flex-row justify-between gap-5">
      <div className="font-bold font-oswald text-6xl md:text-8xl mt-5 md:mt-10">
        <div ref={raflyRef} className="overflow-hidden pb-1">
          RAFLY
        </div>
        <div ref={adrianRef} className="overflow-hidden pb-1">
          ADRIANSYAH
        </div>
        <div ref={frontendRef} className="overflow-hidden pb-1">
          FRONTEND
        </div>
        <div ref={developerRef} className="overflow-hidden pb-1">
          DEVELOPER
        </div>
      </div>

      <div className="flex flex-col justify-end uppercase font-oswald font-light text-sm md:text-lg md:leading-relaxed gap-1 md:gap-0">
        <p ref={desc1Ref} className="overflow-hidden">
          Crafting Engaging Web Experiences with Precision and Creativity
        </p>
        <p ref={desc2Ref} className="overflow-hidden">
          Specializing in React, Next.js, GSAP, and Modern Frontend Technologies
        </p>
        <p ref={desc3Ref} className="overflow-hidden">
          Let&apos;s Build Something Amazing Together!
        </p>
      </div>
    </section>
  );
}
