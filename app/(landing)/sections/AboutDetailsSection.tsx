"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { aboutDetails } from "@/lib/data";
import { ANIM_DURATIONS } from "@/lib/animation";
import BezelCard from "@/components/ui/BezelCard";
import Title from "@/components/ui/Title";

const AboutDetailsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || !triggerRef.current) return;

      const paragraphs = gsap.utils.toArray(".about-paragraph");
      let mm = gsap.matchMedia();

      // Desktop layout with side-shifting
      mm.add("(min-width: 768px)", () => {
        // Setup desktop initial states
        gsap.set(paragraphs, {
          transformPerspective: 1000,
          z: -1200,
          opacity: 0,
          scale: 0.1,
          pointerEvents: "none",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "+=280%", // Scroll depth for pinning
            pin: true,
            scrub: 0.2,
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
          duration: ANIM_DURATIONS.slow,
        })
        .to(paragraphs[0] as Element, {
          z: 600,
          scale: 1.6,
          opacity: 0,
          xPercent: -35,
          pointerEvents: "none",
          ease: "power2.in",
          duration: ANIM_DURATIONS.slow,
        }, "+=0.4");

        // Paragraph 2 (Float Right)
        tl.to(paragraphs[1] as Element, {
          z: 0,
          scale: 1,
          opacity: 1,
          xPercent: 20,
          pointerEvents: "auto",
          ease: "power2.out",
          duration: ANIM_DURATIONS.slow,
        })
        .to(paragraphs[1] as Element, {
          z: 600,
          scale: 1.6,
          opacity: 0,
          xPercent: 35,
          pointerEvents: "none",
          ease: "power2.in",
          duration: ANIM_DURATIONS.slow,
        }, "+=0.4");

        // Paragraph 3 (Float Left)
        tl.to(paragraphs[2] as Element, {
          z: 0,
          scale: 1,
          opacity: 1,
          xPercent: -20,
          pointerEvents: "auto",
          ease: "power2.out",
          duration: ANIM_DURATIONS.slow,
        })
        .to(paragraphs[2] as Element, {
          z: 600,
          scale: 1.6,
          opacity: 0,
          xPercent: -35,
          pointerEvents: "none",
          ease: "power2.in",
          duration: ANIM_DURATIONS.slow,
        }, "+=0.4");
      });

      // Mobile layout (No pinning, simple scroll reveals)
      mm.add("(max-width: 767px)", () => {
        // Setup mobile initial states
        gsap.set(paragraphs, {
          transformPerspective: 0,
          z: 0,
          scale: 1,
          opacity: 0,
          y: 40,
          pointerEvents: "auto",
        });

        paragraphs.forEach((p) => {
          gsap.to(p as Element, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: p as Element,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        });
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
      className="w-full h-auto py-16 md:py-0 md:h-dvh md:min-h-dvh flex flex-col justify-center md:overflow-hidden md:relative"
    >
      {/* Viewport container */}
      <div
        ref={containerRef}
        className="w-full flex flex-col items-center px-4 md:relative md:flex-row md:h-full md:flex-1 md:items-center md:justify-center md:perspective-distant md:overflow-hidden md:px-10 md:gap-0"
      >
        {/* Mobile Title */}
        <div className="w-full md:hidden mb-6">
          <Title text="About" index="01" className="mb-0" />
        </div>

        <div className="w-full flex flex-col gap-12 sm:gap-16 md:contents">
          {aboutDetails.map((detail, index) => (
            <div
              key={index}
              className={`about-paragraph relative md:absolute max-w-2xl flex flex-col gap-4 md:gap-6 backface-hidden text-left items-start ${
                index % 2 === 0
                  ? "md:text-left md:items-start"
                  : "md:text-right md:items-end"
              }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <BezelCard
                className="border-transparent bg-transparent p-0 max-md:bg-foreground/2 max-md:border-foreground/10 max-md:p-1.5 transition-all duration-500 max-md:hover:border-foreground/20 w-full"
                innerClassName={`bg-transparent p-0 max-md:bg-foreground/1 max-md:p-5 flex flex-col gap-4 md:gap-6 text-left items-start ${
                  index % 2 === 0
                    ? "md:text-left md:items-start"
                    : "md:text-right md:items-end"
                }`}
              >
                {/* mixed serif title: italicized, capitalized */}
                <h3 className="font-instrument_serif text-3xl sm:text-4xl md:text-7xl font-light italic text-foreground tracking-tight leading-none capitalize">
                  {detail.title}
                </h3>
                {/* clean sans text: sentence case normal text */}
                <p className="font-sans text-base md:text-xl font-light leading-relaxed text-foreground/75 max-w-xl md:px-4 normal-case tracking-wide">
                  {detail.text}
                </p>
              </BezelCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutDetailsSection;
