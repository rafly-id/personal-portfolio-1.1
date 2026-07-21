"use client";

import { useRef } from "react";
import { useTextReveal } from "@/hooks/useTextReveal";
import { cn } from "@/lib/utils";
import SectionLabel from "./SectionLabel";
import Title from "./Title";

interface SectionHeaderProps {
  title: string;
  tag?: string;
  align?: "center" | "left" | "right";
  className?: string;
  index?: string | number;
}

export default function SectionHeader({
  title,
  tag,
  align = "center",
  className,
  index,
}: SectionHeaderProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const tagRef = useRef<HTMLSpanElement>(null);

  // Always call hooks unconditionally (Rules of Hooks compliance).
  // The hook itself guards with the active flag when tag is absent.
  useTextReveal({
    ref: titleRef,
    y: 80,
    duration: 0.8,
    type: "lines",
  });

  useTextReveal({
    ref: tagRef,
    y: 30,
    duration: 0.6,
    type: "words",
    delay: 0.1,
    // When there is no tag, the ref will be null so the hook does nothing.
  });

  return (
    <div className={cn("w-full mb-8 md:mb-16 px-4 md:px-0", className)}>
      {/* Mobile Title View */}
      <div className="md:hidden w-full px-1">
        <Title text={title} index={index} />
      </div>

      {/* Desktop Section Header View */}
      <div
        className={cn(
          "hidden md:flex md:flex-col overflow-hidden",
          align === "center" && "items-center text-center",
          align === "left" && "items-start text-left",
          align === "right" && "items-end text-right"
        )}
      >
        {tag && (
          <span
            ref={tagRef}
            className="mb-4 block overflow-hidden"
          >
            <SectionLabel text={tag} variant="text" className="text-[10px] font-bold text-foreground/50 tracking-[0.2em] font-sans" />
          </span>
        )}
        <div className="text-5xl font-bold uppercase font-instrument_serif overflow-hidden">
          <h2
            ref={titleRef}
            className="will-change-transform"
          >
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
}
