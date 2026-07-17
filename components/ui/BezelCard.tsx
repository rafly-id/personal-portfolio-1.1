import { cn } from "@/lib/utils";
import React from "react";

interface BezelCardProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}

/**
 * Double-bezel card enclosure: a subtle outer border container with an inner
 * rounded-corner inset panel. Adapts correctly to light/dark theme changes.
 *
 * Replaces the copy-pasted two-div structure in ExperienceSection and
 * TechStackSection.
 */
export default function BezelCard({
  children,
  className,
  innerClassName,
}: BezelCardProps) {
  return (
    <div
      className={cn(
        "bg-foreground/2 border border-foreground/10 rounded-4xl p-1.5 transition-all duration-500 hover:border-foreground/20",
        className
      )}
    >
      <div
        className={cn(
          "bg-foreground/1 rounded-[calc(2rem-0.375rem)] p-5 md:p-8 h-full",
          innerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
