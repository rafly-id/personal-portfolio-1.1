"use client";

import { RefObject, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

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

      const trigger = ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        onUpdate: () => {
          const y = window.scrollY;
          scrollVelocity = ((y - lastY) / 1000) * 5;
          lastY = y;
        },
      });

      const update = (_: number, delta: number) => {
        const dt = delta / 1000;
        const dir = scrollVelocity < 0 ? -1 : scrollVelocity > 0 ? 1 : 1;

        x += dir * baseVelocity * dt + dir * baseVelocity * dt * scrollVelocity;

        gsap.set(scrollerRef.current!, {
          x: wrap(-width, 0, x),
        });
      };

      gsap.ticker.add(update);

      return () => {
        gsap.ticker.remove(update);
        trigger.kill();
      };
    },
    { scope: scrollerRef, dependencies: [width, baseVelocity] }
  );
}
