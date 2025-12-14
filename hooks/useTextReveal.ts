"use client";

import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { RefObject } from "react";

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
  duration = 1,
  delay = 0,
  stagger = 0.1,
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

      const init = async () => {
        await document.fonts.ready;

        if (enableSplit) {
          split = new SplitText(ref.current!, { type });
          targets = split[type];
        } else {
          targets = ref.current!.children;
        }

        gsap.set(ref.current, { autoAlpha: 1 });

        gsap.from(targets, {
          y,
          duration,
          delay,
          stagger,
          filter: "blur(20px)",
          ease: "power3.out",
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
      };

      init();

      return () => {
        split?.revert();
      };
    },
    { scope: ref }
  );
}
