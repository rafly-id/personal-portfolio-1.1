"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ReactNode } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface TextRevealProps {
  text: ReactNode;
  y: number;
  duration?: number;
  delay?: number;
  trigger?: string;
}

const TextReveal = ({
  text,
  y,
  duration = 1,
  delay = 0.5,
  trigger,
}: TextRevealProps) => {
  const componentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const split = new SplitText(componentRef.current, { type: "lines" });

      gsap.from(split.lines, {
        y: y,
        duration: duration,
        delay: delay,
        stagger: 0.1,
        scrollTrigger: {
          trigger: trigger || componentRef.current,
          start: "top bottom",
          end: "center center",
          toggleActions: "play none none none",
        },
      });
    }, componentRef);

    return () => ctx.revert();
  }, [text, duration, delay, trigger , y]);

  return (
    <div ref={componentRef} className="overflow-hidden">
      {text}
    </div>
  );
};

export default TextReveal;
