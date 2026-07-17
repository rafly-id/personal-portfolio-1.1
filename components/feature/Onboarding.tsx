"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { ANIM_DURATIONS, ANIM_EASES, ANIM_STAGGERS } from "@/lib/animation";

interface OnboardingProps {
  onExitStart: () => void;
  onFinish: () => void;
}

const Onboarding = ({ onExitStart, onFinish }: OnboardingProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textWrapperRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useGSAP(
    () => {
      const letters =
        containerRef.current?.querySelectorAll(".name-letter-inner");

      // 1. Initial State Setup: Prepare letters for staggered mask entry
      if (letters && letters.length > 0) {
        gsap.set(letters, {
          yPercent: 180,
        });
      }

      // Prevent body scroll during onboarding
      document.body.style.overflow = "hidden";

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 768px)",
          isMobile: "(max-width: 767px)",
        },
        (context) => {
          const { isDesktop } = context.conditions as { isDesktop: boolean };

          const tl = gsap.timeline({
            onComplete: () => {
              document.body.style.overflow = "";
              onFinish();
            },
          });

          // 2. Reveal wrapper and slide up letters from the overflow masks
          tl.set(textWrapperRef.current, { autoAlpha: 1 });

          if (letters && letters.length > 0) {
            tl.to(letters, {
              yPercent: 0,
              duration: ANIM_DURATIONS.slow,
              stagger: ANIM_STAGGERS.fast,
              ease: ANIM_EASES.entry,
            });
          }

          // 3. Hold Name (shorter on mobile)
          tl.to({}, { duration: isDesktop ? 1.3 : 0.8 })

            // 4. Exit Transition Start
            .add(() => {
              onExitStart();
            });

          // 5. Kinetic Wipe Lift-up + SVG wave morph in parallel
          tl.to(
            textWrapperRef.current,
            {
              y: -140,
              opacity: 0,
              filter: isDesktop ? "blur(20px)" : "none",
              duration: ANIM_DURATIONS.standard,
              ease: ANIM_EASES.exit,
            },
            "exit",
          );

          if (pathRef.current) {
            tl.to(
              pathRef.current,
              {
                attr: { d: "M 0 0 L 100 0 L 100 50 Q 50 -20 0 50 Z" },
                duration: ANIM_DURATIONS.standard,
                ease: "power2.in",
              },
              "exit",
            ).to(pathRef.current, {
              attr: { d: "M 0 0 L 100 0 L 100 0 Q 50 0 0 0 Z" },
              duration: ANIM_DURATIONS.standard,
              ease: "power2.out",
            });
          }
        }
      );

      return () => {
        document.body.style.overflow = "";
        mm.revert();
      };
    },
    { scope: containerRef },
  );

  const nameWords = "Rafly Adriansyah".split(" ");

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden bg-transparent select-none pointer-events-auto"
    >
      {/* Fullscreen SVG path background overlay */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          className="fill-foreground"
          d="M 0 0 L 100 0 L 100 100 Q 50 100 0 100 Z"
        />
      </svg>

      {/* Centered text container - Hidden on load via opacity-0 invisible */}
      <div
        ref={textWrapperRef}
        className="relative z-10 w-screen select-none overflow-hidden py-6 md:py-8 opacity-0 invisible flex items-center justify-center"
      >
        <h1
          ref={nameRef}
          className="font-instrument_serif text-[clamp(2.75rem,14vw,20rem)] italic font-normal tracking-tighter text-background text-center leading-none w-full will-change-transform whitespace-nowrap py-4"
        >
          {nameWords.map((word, wordIdx) => (
            <span
              key={wordIdx}
              className="inline-block mx-[0.05em] whitespace-nowrap"
            >
              {word.split("").map((letter, letterIdx) => (
                <span
                  key={letterIdx}
                  className="inline-block overflow-hidden px-[0.25em] -mx-[0.25em] py-12 -my-12"
                >
                  <span className="inline-block name-letter-inner">
                    {letter}
                  </span>
                </span>
              ))}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
};

export default Onboarding;
