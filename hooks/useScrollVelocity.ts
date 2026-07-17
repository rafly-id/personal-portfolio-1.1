"use client";

import { RefObject, useLayoutEffect, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

function wrap(min: number, max: number, v: number) {
  return ((((v - min) % (max - min)) + (max - min)) % (max - min)) + min;
}

function useElementWidth(ref: RefObject<HTMLElement | null>) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const update = () => {
      if (ref.current) setWidth(ref.current.offsetWidth);
    };

    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, [ref]);

  return width;
}

interface UseScrollVelocityOptions {
  scrollerRef: RefObject<HTMLElement | null>;
  firstItemRef: RefObject<HTMLElement | null>;
  baseVelocity: number;
}

export function useScrollVelocity({
  scrollerRef,
  firstItemRef,
  baseVelocity,
}: UseScrollVelocityOptions) {
  const width = useElementWidth(firstItemRef);

  useGSAP(
    () => {
      if (!scrollerRef.current || width === 0) return;

      let x = 0;
      let scrollVelocity = 0;
      let lastY = window.scrollY;
      let active = false;

      const update = (_: number, delta: number) => {
        const dt = delta / 1000;
        const dir = scrollVelocity < 0 ? -1 : scrollVelocity > 0 ? 1 : 1;

        x += dir * baseVelocity * dt + dir * baseVelocity * dt * scrollVelocity;

        if (scrollerRef.current) {
          gsap.set(scrollerRef.current, {
            x: wrap(-width, 0, x),
          });
        }
      };

      const trigger = ScrollTrigger.create({
        trigger: scrollerRef.current,
        start: "top bottom",
        end: "bottom top",
        onToggle: (self) => {
          if (self.isActive) {
            if (!active) {
              gsap.ticker.add(update);
              active = true;
            }
          } else {
            if (active) {
              gsap.ticker.remove(update);
              active = false;
            }
          }
        },
        onUpdate: () => {
          const y = window.scrollY;
          scrollVelocity = ((y - lastY) / 1000) * 5;
          lastY = y;
        },
      });

      // If initially in view, start the ticker
      if (trigger.isActive) {
        gsap.ticker.add(update);
        active = true;
      }

      return () => {
        if (active) {
          gsap.ticker.remove(update);
        }
        trigger.kill();
      };
    },
    { scope: scrollerRef, dependencies: [width, baseVelocity] }
  );
}
