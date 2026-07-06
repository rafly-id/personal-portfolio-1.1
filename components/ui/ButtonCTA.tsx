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
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const linkElement = linkref.current;
    const text1Element = text1Ref.current;
    const text2Element = text2Ref.current;

    if (!linkElement || !text1Element || !text2Element) return;

    const tl = gsap.timeline({ paused: true });

    tl.to(
      text1Element,
      {
        yPercent: -100,
        duration: 0.4,
        ease: "power2.inOut",
      },
      0
    ).to(
      text2Element,
      {
        yPercent: -100,
        duration: 0.4,
        ease: "power2.inOut",
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
          "font-bold text-3xl font-instrument_serif p-10 border-2 rounded-full w-auto my-5 md:my-10 relative overflow-hidden",
          className
        )}
      >
        <Link href={link} ref={linkref} target={target}>
          <span className="relative z-10 overflow-hidden flex flex-col justify-center items-center">
            <span ref={text1Ref} className="block select-none">
              {text}
            </span>
            <span ref={text2Ref} className="absolute block select-none top-full">
              {text}
            </span>
          </span>
        </Link>
      </Button>
    </div>
  );
};

export default ButtonCTA;

