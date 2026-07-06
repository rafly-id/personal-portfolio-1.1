"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutDetails } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const AboutDetailsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || !triggerRef.current) return;

      const paragraphs = gsap.utils.toArray(".about-paragraph");

      // Setup initial states
      gsap.set(paragraphs, {
        transformPerspective: 1000,
        z: -1200,
        opacity: 0,
        scale: 0.1,
        pointerEvents: "none",
      });

      let mm = gsap.matchMedia();

      // Desktop layout with side-shifting
      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "+=350%", // Scroll depth for pinning
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        // Paragraph 1 (Float Left)
        tl.to(paragraphs[0] as Element, {
          z: 0,
          scale: 1,
          opacity: 1,
          xPercent: -20,
          pointerEvents: "auto",
          ease: "power2.out",
          duration: 1,
        })
        .to(paragraphs[0] as Element, {
          z: 600,
          scale: 1.6,
          opacity: 0,
          xPercent: -35,
          pointerEvents: "none",
          ease: "power2.in",
          duration: 1,
        }, "+=0.4");

        // Paragraph 2 (Float Right)
        tl.to(paragraphs[1] as Element, {
          z: 0,
          scale: 1,
          opacity: 1,
          xPercent: 20,
          pointerEvents: "auto",
          ease: "power2.out",
          duration: 1,
        })
        .to(paragraphs[1] as Element, {
          z: 600,
          scale: 1.6,
          opacity: 0,
          xPercent: 35,
          pointerEvents: "none",
          ease: "power2.in",
          duration: 1,
        }, "+=0.4");

        // Paragraph 3 (Float Left)
        tl.to(paragraphs[2] as Element, {
          z: 0,
          scale: 1,
          opacity: 1,
          xPercent: -20,
          pointerEvents: "auto",
          ease: "power2.out",
          duration: 1,
        })
        .to(paragraphs[2] as Element, {
          z: 600,
          scale: 1.6,
          opacity: 0,
          xPercent: -35,
          pointerEvents: "none",
          ease: "power2.in",
          duration: 1,
        }, "+=0.4");
      });

      // Mobile layout (No side-shifting, centered content only)
      mm.add("(max-width: 767px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "+=350%",
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        // Paragraph 1 (Centered)
        tl.to(paragraphs[0] as Element, {
          z: 0,
          scale: 1,
          opacity: 1,
          xPercent: 0,
          pointerEvents: "auto",
          ease: "power2.out",
          duration: 1,
        })
        .to(paragraphs[0] as Element, {
          z: 600,
          scale: 1.4,
          opacity: 0,
          xPercent: 0,
          pointerEvents: "none",
          ease: "power2.in",
          duration: 1,
        }, "+=0.4");

        // Paragraph 2 (Centered)
        tl.to(paragraphs[1] as Element, {
          z: 0,
          scale: 1,
          opacity: 1,
          xPercent: 0,
          pointerEvents: "auto",
          ease: "power2.out",
          duration: 1,
        })
        .to(paragraphs[1] as Element, {
          z: 600,
          scale: 1.4,
          opacity: 0,
          xPercent: 0,
          pointerEvents: "none",
          ease: "power2.in",
          duration: 1,
        }, "+=0.4");

        // Paragraph 3 (Centered)
        tl.to(paragraphs[2] as Element, {
          z: 0,
          scale: 1,
          opacity: 1,
          xPercent: 0,
          pointerEvents: "auto",
          ease: "power2.out",
          duration: 1,
        })
        .to(paragraphs[2] as Element, {
          z: 600,
          scale: 1.4,
          opacity: 0,
          xPercent: 0,
          pointerEvents: "none",
          ease: "power2.in",
          duration: 1,
        }, "+=0.4");
      });

      return () => {
        mm.revert();
      };
    },
    { scope: triggerRef }
  );

  return (
    <section
      ref={triggerRef}
      id="about"
      className="relative w-full h-[100dvh] min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-background"
    >
      {/* 3D Viewport container (Full screen height) */}
      <div
        ref={containerRef}
        className="w-full h-full flex-1 flex items-center justify-center relative [perspective:1200px] overflow-hidden px-4 md:px-10"
      >
        {aboutDetails.map((detail, index) => (
          <div
            key={index}
            className={`about-paragraph absolute max-w-2xl flex flex-col gap-4 md:gap-6 backface-hidden text-center items-center ${
              index % 2 === 0
                ? "md:text-left md:items-start"
                : "md:text-right md:items-end"
            }`}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* mixed serif title: italicized, capitalized */}
            <h3 className="font-instrument_serif text-4xl md:text-7xl font-light italic text-foreground tracking-tight leading-none capitalize">
              {detail.title}
            </h3>
            {/* clean sans text: sentence case normal text */}
            <p className="font-sans text-base md:text-xl font-light leading-relaxed text-foreground/75 max-w-xl mx-auto px-4 normal-case tracking-wide">
              {detail.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutDetailsSection;
