"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface ButtonCTAProps {
  link: string;
  text: string;
  className?: string;
  target?: string;
}

const ButtonCTA = ({ link, text, className, target }: ButtonCTAProps) => {
  const linkref = useRef<HTMLAnchorElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const linkElement = linkref.current;
    const bgElement = bgRef.current;

    if (!linkElement || !bgElement) return;

    const tl = gsap.timeline({ paused: true });

    tl.to(linkElement, {
      color: "var(--background)",
      scale: 1.1,
      duration: 0.5,
      ease: "none",
    }).to(
      bgElement,
      {
        clipPath: "circle(150% at 50% 50%)",
        duration: 0.5,
        ease: "none",
      },
      0
    );

    const onHover = () => tl.play();
    const onUnhover = () => tl.reverse();

    linkElement.addEventListener("mouseenter", onHover);
    linkElement.addEventListener("mouseleave", onUnhover);

    return () => {
      linkElement.removeEventListener("mouseenter", onHover);
      linkElement.removeEventListener("mouseleave", onUnhover);
    };
  }, []);

  return (
    <div className="flex justify-center items-center text-center">
      <Button
        asChild
        className={cn(
          "font-bold uppercase text-3xl font-kranky p-10 border-2 rounded-full w-auto my-5 md:my-10 relative overflow-hidden",
          className
        )}
      >
        <Link href={link} ref={linkref} target={target}>
          <div
            ref={bgRef}
            className="absolute inset-0 bg-foreground"
            style={{ clipPath: "circle(0% at 50% 50%)" }}
          />
          <span className="relative z-10">{text}</span>
        </Link>
      </Button>
    </div>
  );
};

export default ButtonCTA;
