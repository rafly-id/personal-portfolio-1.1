"use client";

import { useRef } from "react";
import { useTextReveal } from "@/hooks/useTextReveal";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  tag?: string; // e.g. "[ Selected Work ]"
  align?: "center" | "left" | "right";
  className?: string;
}

export default function SectionHeader({
  title,
  tag,
  align = "center",
  className,
}: SectionHeaderProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const tagRef = useRef<HTMLSpanElement>(null);

  useTextReveal({
    ref: titleRef,
    y: 80,
    duration: 0.8,
    type: "lines",
  });

  if (tag) {
    useTextReveal({
      ref: tagRef,
      y: 30,
      duration: 0.6,
      type: "words",
      delay: 0.1,
    });
  }

  return (
    <div
      className={cn(
        "flex flex-col mb-16 overflow-hidden",
        align === "center" && "items-center text-center",
        align === "left" && "items-start text-left",
        align === "right" && "items-end text-right",
        className
      )}
    >
      {tag && (
        <span
          ref={tagRef}
          className="text-[10px] uppercase tracking-[0.2em] text-foreground/50 font-bold mb-4 block overflow-hidden"
        >
          {tag}
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
  );
}
