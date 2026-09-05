"use client";

import React, { useRef } from "react";
import Link from "@/components/global/TransitionLink";
import { cn } from "@/lib/utils";
import TextSwap from "@/components/ui/TextSwap";

interface ButtonBaseProps {
  children?: React.ReactNode;
  text?: string; // Text to be swapped on hover
  className?: string;
  variant?: "solid" | "outline" | "ghost";
}

type ButtonAsButton = ButtonBaseProps & {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps | "type" | "onClick">;

type ButtonAsAnchor = ButtonBaseProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps | "href" | "onClick">;

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export default function Button(props: ButtonProps) {
  const {
    children,
    text,
    className,
    variant = "solid",
    ...rest
  } = props;

  const buttonRef = useRef<HTMLElement | null>(null);

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
          <TextSwap text={displayText} className="h-[1.3em]" triggerRef={buttonRef} />
        ) : (
          <span className="leading-none">{children}</span>
        )}
      </>
    );
  };

  if (props.href) {
    const { href, onClick, target, rel, ...anchorProps } = props as ButtonAsAnchor;
    const isInternal = href.startsWith("/") && !href.startsWith("//");
    if (isInternal) {
      return (
        <Link
          ref={buttonRef as React.RefObject<HTMLAnchorElement>}
          href={href}
          className={baseClasses}
          onClick={onClick}
          {...anchorProps}
        >
          {renderContent()}
        </Link>
      );
    } else {
      return (
        <a
          ref={buttonRef as React.RefObject<HTMLAnchorElement>}
          href={href}
          className={baseClasses}
          onClick={onClick}
          target={target || "_blank"}
          rel={rel || "noopener noreferrer"}
          {...anchorProps}
        >
          {renderContent()}
        </a>
      );
    }
  }

  const { onClick, type = "button", ...buttonProps } = props as ButtonAsButton;

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      type={type}
      className={baseClasses}
      onClick={onClick}
      {...buttonProps}
    >
      {renderContent()}
    </button>
  );
}
