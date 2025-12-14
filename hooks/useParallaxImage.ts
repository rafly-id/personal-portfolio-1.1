"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

interface UseParallaxImageOptions {
  containerRef: RefObject<HTMLElement | null>;
  imageRef: RefObject<HTMLElement | null>;
  y?: number;
  enableReveal?: boolean;
}

export function useParallaxImage({
  containerRef,
  imageRef,
  y = 30,
  enableReveal = false,
}: UseParallaxImageOptions) {
  useGSAP(
    () => {
      if (!containerRef.current || !imageRef.current) return;

      const parallaxTween = gsap.to(imageRef.current, {
        yPercent: y,
        scale: 1.2,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      let revealTween: gsap.core.Tween | null = null;

      if (enableReveal) {
        revealTween = gsap.fromTo(
          imageRef.current,
          {
            autoAlpha: 0,
            clipPath: "inset(100% 0% 0% 0%)",
          },
          {
            autoAlpha: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "power3.out",
            duration: 2,
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      return () => {
        parallaxTween.scrollTrigger?.kill();
        revealTween?.scrollTrigger?.kill();
        parallaxTween.kill();
        revealTween?.kill();
      };
    },
    {
      scope: containerRef,
      dependencies: [y, enableReveal],
    }
  );
}
