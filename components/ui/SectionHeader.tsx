"use client";

import { useRef } from "react";
import { useTextReveal } from "@/hooks/useTextReveal";
import { cn } from "@/lib/utils";
import SectionLabel from "./SectionLabel";

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
  );
}
