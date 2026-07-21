"use client";

import { useRef } from "react";
import { useTextReveal } from "@/hooks/useTextReveal";
import { cn } from "@/lib/utils";

interface TitleProps {
  text?: string;
  index?: string | number;
  className?: string;
  showLine?: boolean;
}

const Title = ({ text, index, className, showLine = true }: TitleProps) => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useTextReveal({
    ref: titleRef,
    y: 150,
    duration: 1,
    delay: 0,
  });

  const formattedIndex = index
    ? typeof index === "number"
      ? String(index).padStart(2, "0")
      : index.padStart(2, "0")
    : null;

  return (
    <div className="flex flex-col justify-start items-start text-left w-full">
      {formattedIndex && (
        <span className="font-mono text-xs tracking-[0.2em] text-foreground/40 mb-3 select-none">
          [ {formattedIndex} ]
        </span>
      )}
      <div className="font-bold uppercase font-instrument_serif w-full">
        <h1
          ref={titleRef}
          className={cn(
            "text-[clamp(2.5rem,10vw,4.5rem)] md:text-[clamp(6rem,14vw,10rem)] leading-none tracking-tight",
            className
          )}
        >
          {text}
        </h1>
      </div>
      {showLine && (
        <div className="w-full h-[1px] bg-foreground/10 mt-4 mb-4 md:mt-6 md:mb-8 animate-in fade-in duration-700" />
      )}
    </div>
  );
};

export default Title;
