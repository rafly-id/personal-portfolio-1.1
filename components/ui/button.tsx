"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import TextSwap from "@/components/ui/TextSwap";

interface ButtonProps {
  children?: React.ReactNode;
  text?: string; // Text to be swapped on hover
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  variant?: "solid" | "outline" | "ghost";
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  text,
  href,
  onClick,
  className,
  variant = "solid",
  target,
  rel,
}: ButtonProps) {
  const buttonRef = useRef<any>(null);

  const baseClasses = cn(
    "group flex items-center justify-center gap-2 px-6 py-3 rounded-full font-sans text-sm font-semibold select-none cursor-pointer transition-all duration-300 active:scale-95",
    variant === "solid" && "bg-foreground text-background border border-foreground/10 hover:opacity-90 shadow-sm",
    variant === "outline" && "border border-foreground/15 text-foreground/80 hover:text-foreground hover:bg-foreground/5 hover:border-foreground/45 backdrop-blur-sm",
    variant === "ghost" && "text-foreground hover:bg-foreground/5",
    className
  );

  const displayText = text || (typeof children === "string" ? children : "");

  const renderContent = () => {
    return (
      <>
        {/* Text Area with Swap Animation */}
        {displayText ? (
          <TextSwap text={displayText} className="h-4" triggerRef={buttonRef} />
        ) : (
          <span className="leading-none">{children}</span>
        )}
      </>
    );
  };

  if (href) {
    const isInternal = href.startsWith("/") && !href.startsWith("//");
    if (isInternal) {
      return (
        <Link ref={buttonRef} href={href} className={baseClasses} onClick={onClick}>
          {renderContent()}
        </Link>
      );
    } else {
      return (
        <a
          ref={buttonRef}
          href={href}
          className={baseClasses}
          onClick={onClick}
          target={target || "_blank"}
          rel={rel || "noopener noreferrer"}
        >
          {renderContent()}
        </a>
      );
    }
  }

  return (
    <button ref={buttonRef} type="button" className={baseClasses} onClick={onClick}>
      {renderContent()}
    </button>
  );
}
