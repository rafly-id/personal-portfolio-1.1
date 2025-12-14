"use client";

import { useRef } from "react";
import { useTextReveal } from "@/hooks/useTextReveal";
import { useScrollVelocity } from "@/hooks/useScrollVelocity";

export default function MarqueeSection() {
  const revealRef = useRef<HTMLDivElement>(null);

  const scrollerRef1 = useRef<HTMLDivElement>(null);
  const firstItemRef1 = useRef<HTMLSpanElement>(null);

  const scrollerRef2 = useRef<HTMLDivElement>(null);
  const firstItemRef2 = useRef<HTMLSpanElement>(null);

  useTextReveal({
    ref: revealRef,
    y: 200,
    delay: 0.3,
    type: "lines",
    enableSplit: true,
  });

  useScrollVelocity({
    scrollerRef: scrollerRef1,
    firstItemRef: firstItemRef1,
    baseVelocity: 50,
  });

  useScrollVelocity({
    scrollerRef: scrollerRef2,
    firstItemRef: firstItemRef2,
    baseVelocity: -50,
  });

  return (
    <section className="uppercase overflow-hidden space-y-2">
      <div ref={revealRef}>
        <div
          ref={scrollerRef1}
          className="flex whitespace-nowrap tracking-tight font-oswald text-4xl font-bold md:text-[5rem]"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              ref={i === 0 ? firstItemRef1 : undefined}
              className="shrink-0"
            >
              Rafly Adriansyah/&nbsp;
            </span>
          ))}
        </div>

        <div
          ref={scrollerRef2}
          className="flex whitespace-nowrap tracking-tight font-kranky text-4xl font-bold md:text-[5rem]"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              ref={i === 0 ? firstItemRef2 : undefined}
              className="shrink-0"
            >
              Frontend Developer/&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
