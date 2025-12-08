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
  type?: string;
  enableSplit?: boolean;
}

const TextReveal = ({
  text,
  y,
  duration = 1,
  delay = 0.5,
  trigger,
  type = "lines",
  enableSplit = true,
}: TextRevealProps) => {
  const componentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let target: any = componentRef.current;

      if (enableSplit) {
        const split: any = new SplitText(componentRef.current, { type: type });
        target = split[type];
      } else {
        target = componentRef.current?.children;
      }

      gsap.from(target, {
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
  }, [text, duration, delay, trigger, y, enableSplit]);

  return (
    <div ref={componentRef} className="overflow-hidden pb-1">
      {text}
    </div>
  );
};

export default TextReveal;
