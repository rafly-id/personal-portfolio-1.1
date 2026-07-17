"use client";

import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { RefObject } from "react";
import { ANIM_DURATIONS, ANIM_EASES, ANIM_STAGGERS } from "@/lib/animation";

gsap.registerPlugin(SplitText, ScrollTrigger);

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

      let split: SplitText | null = null;
      let targets: gsap.TweenTarget;
      let mm: gsap.MatchMedia | null = null;

      const init = async () => {
        await document.fonts.ready;

        if (enableSplit) {
          split = new SplitText(ref.current!, { type });
          targets = split[type];
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
        split?.revert();
        mm?.revert();
      };
    },
    { scope: ref }
  );
}
