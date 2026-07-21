"use client";

import { gsap, SplitText, ScrollTrigger } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { RefObject } from "react";
import { ANIM_DURATIONS, ANIM_EASES, ANIM_STAGGERS } from "@/lib/animation";

export type SplitType = "lines" | "words" | "chars";

interface UseTextRevealOptions {
  ref: RefObject<HTMLElement | null>;
  y: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  trigger?: RefObject<Element | null> | Element | string;
  type?: SplitType;
  enableSplit?: boolean;
  start?: string;
  end?: string;
}

export function useTextReveal({
  ref,
  y,
  duration = ANIM_DURATIONS.standard,
  delay = 0,
  stagger = ANIM_STAGGERS.standard,
  trigger,
  type = "lines",
  enableSplit = true,
  start = "top bottom",
  end = "center center",
}: UseTextRevealOptions) {
  useGSAP(
    () => {
      if (!ref.current) return;

      gsap.set(ref.current, { autoAlpha: 0 });

      let splitChild: SplitText | null = null;
      let splitParent: SplitText | null = null;
      let targets: gsap.TweenTarget;
      let mm: gsap.MatchMedia | null = null;
      let isActive = true;

      const init = async () => {
        await document.fonts.ready;
        if (!isActive || !ref.current) return;

        if (enableSplit) {
          splitChild = new SplitText(ref.current!, {
            type,
            linesClass: "reveal-child",
            wordsClass: "reveal-child",
            charsClass: "reveal-child",
          });
          splitParent = new SplitText(ref.current!, {
            type,
            linesClass: "reveal-parent",
            wordsClass: "reveal-parent",
            charsClass: "reveal-parent",
          });
          targets = splitChild[type];
          gsap.set(splitParent[type], { overflow: "hidden" });
        } else {
          targets = ref.current!.children;
        }

        gsap.set(ref.current, { autoAlpha: 1 });

        mm = gsap.matchMedia();
        mm.add(
          {
            isDesktop: "(min-width: 768px)",
            isMobile: "(max-width: 767px)",
          },
          (context) => {
            const { isDesktop } = context.conditions as { isDesktop: boolean };

            gsap.from(targets, {
              y: isDesktop ? y : Math.min(y, 60),
              autoAlpha: 0,
              duration,
              delay: delay + 0.3, // Add a tiny delay to offset curtain wipe
              stagger,
              filter: isDesktop ? "blur(20px)" : "none",
              ease: ANIM_EASES.entry,
              scrollTrigger: {
                trigger:
                  typeof trigger === "object" && "current" in trigger
                    ? trigger.current
                    : trigger || ref.current,
                start,
                end,
                toggleActions: "play none none none",
              },
            });
          }
        );
      };

      init();

      return () => {
        isActive = false;
        splitChild?.revert();
        splitParent?.revert();
        mm?.revert();
      };
    },
    { scope: ref }
  );
}
