import { cn } from "@/lib/utils";
import React from "react";

interface SectionLabelProps {
  text: string;
  className?: string;
  variant?: "pill" | "text";
}

/**
 * Unified Section Label primitive.
 * Handles the bracket-style labels like `[ My Experience ]` or `[ Follow me ]`
 * consistently across the app.
 */
export default function SectionLabel({
  text,
  className,
  variant = "pill",
}: SectionLabelProps) {
  return (
    <span
      className={cn(
        "uppercase select-none leading-none",
        variant === "pill" &&
          "inline-block px-3.5 py-1 text-[10px] tracking-[0.2em] font-medium border border-foreground/10 rounded-full text-foreground/50 bg-foreground/2 w-fit",
        variant === "text" &&
          "font-mono text-xs text-foreground/45 tracking-widest block",
        className
      )}
    >
      {text}
    </span>
  );
}
