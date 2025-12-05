"use client";

import React, { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useWidth(ref: React.RefObject<HTMLElement | null>) {
  const [w, setW] = useState(0);
  useLayoutEffect(() => {
    const update = () => ref.current && setW(ref.current.offsetWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return w;
}

function wrap(min: number, max: number, v: number) {
  return ((((v - min) % (max - min)) + (max - min)) % (max - min)) + min;
}

export default function ScrollVelocity({
  texts,
  velocity,
  numCopies,
}: {
  texts: string[];
  velocity: number;
  numCopies: number;
}) {
  function Row({ text, baseVelocity }: { text: string; baseVelocity: number }) {
    const scroller = useRef<HTMLDivElement>(null);
    const firstCopy = useRef<HTMLSpanElement>(null);
    const width = useWidth(firstCopy);

    useLayoutEffect(() => {
      if (!scroller.current || width === 0) return;

      let x = 0;
      let scrollVel = 0;
      let lastY = window.scrollY;

      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        onUpdate: () => {
          const y = window.scrollY;
          scrollVel = ((y - lastY) / 1000) * 5;
          lastY = y;
        },
      });

      const update = (_: number, delta: number) => {
        const dt = delta / 1000;
        const dir = scrollVel < 0 ? -1 : scrollVel > 0 ? 1 : 1;

        x += dir * baseVelocity * dt + dir * baseVelocity * dt * scrollVel;

        gsap.set(scroller.current, {
          x: wrap(-width, 0, x),
        });
      };

      gsap.ticker.add(update);
      return () => gsap.ticker.remove(update);
    }, [width]);

    const repeated = Array.from({ length: numCopies }).map((_, i) => (
      <span key={i} ref={i === 0 ? firstCopy : undefined} className="shrink-0">
        {text}&nbsp;
      </span>
    ));

    return (
      <div className="relative overflow-hidden w-full">
        <div
          ref={scroller}
          className="flex whitespace-nowrap tracking-tight font-oswald text-4xl font-bold md:text-[5rem] md:leading-20"
        >
          {repeated}
        </div>
      </div>
    );
  }

  return (
    <section>
      {texts.map((t, i) => (
        <Row key={i} text={t} baseVelocity={i % 2 ? -velocity : velocity} />
      ))}
    </section>
  );
}
