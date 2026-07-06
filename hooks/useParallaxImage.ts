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
  scrub?: boolean | number;
}

export function useParallaxImage({
  containerRef,
  imageRef,
  y = 30,
  enableReveal = false,
  scrub = 1.5,
}: UseParallaxImageOptions) {
  useGSAP(
    () => {
      if (!containerRef.current || !imageRef.current) return;

      // Calculate layout shift percentages
      const absoluteY = Math.abs(y);
      const heightPercent = 100 + absoluteY;
      const topOffsetPercent = -(absoluteY / 2);
      const yPercentShift = ((absoluteY / 2) / heightPercent) * 100;

      // Determine animation direction based on the sign of y
      const startYPercent = y >= 0 ? -yPercentShift : yPercentShift;
      const endYPercent = y >= 0 ? yPercentShift : -yPercentShift;

      // Apply initial styling to make the image taller and offset it
      gsap.set(imageRef.current, {
        height: `${heightPercent}%`,
        top: `${topOffsetPercent}%`,
      });

      const parallaxTween = gsap.fromTo(
        imageRef.current,
        {
          yPercent: startYPercent,
        },
        {
          yPercent: endYPercent,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: scrub,
          },
        }
      );

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
              trigger: containerRef.current,
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
      dependencies: [y, enableReveal, scrub],
    }
  );
}
