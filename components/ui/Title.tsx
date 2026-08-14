"use client";

import { useRef } from "react";
import { useTextReveal } from "@/hooks/useTextReveal";
import { cn } from "@/lib/utils";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

interface TitleProps {
  text?: string;
  index?: string | number;
  className?: string;
  showLine?: boolean;
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "p";
}

const Title = ({
  text,
  index,
  className,
  showLine = true,
  as: Component = "h2",
}: TitleProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useTextReveal({
    ref: titleRef,
    y: 100,
    duration: 1,
    delay: 0,
  });

  useGSAP(
    () => {
      if (showLine && lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom-=10%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    },
    { scope: containerRef, dependencies: [showLine] }
  );

  const formattedIndex = index
    ? typeof index === "number"
      ? String(index).padStart(2, "0")
      : index.padStart(2, "0")
    : null;

  return (
    <div
      ref={containerRef}
      className="flex flex-col justify-start items-start text-left w-full overflow-hidden"
    >
      {formattedIndex && (
        <span className="font-mono text-[10px] tracking-[0.25em] text-foreground/45 mb-2 select-none uppercase">
          / {formattedIndex}
        </span>
      )}
      <div className="font-normal uppercase font-instrument_serif w-full overflow-hidden">
        <Component
          ref={titleRef}
          className={cn(
            "text-[clamp(2.25rem,9vw,4rem)] md:text-[clamp(5.5rem,13vw,9.5rem)] leading-none tracking-tight font-normal will-change-[transform,opacity]",
            className
          )}
        >
          {text}
        </Component>
      </div>
      {showLine && (
        <div
          ref={lineRef}
          className="w-full bg-foreground/10 mt-3 md:mt-5 mb-5 md:mb-8 origin-left"
        />
      )}
    </div>
  );
};

export default Title;
