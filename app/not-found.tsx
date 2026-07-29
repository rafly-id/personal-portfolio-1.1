"use client";

import React, { useRef } from "react";
import Link from "@/components/global/TransitionLink";
import TextSwap from "@/components/ui/TextSwap";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const linksContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        labelRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 0.5, duration: 0.8 }
      )
        .fromTo(
          headingRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.0 },
          "-=0.6"
        )
        .fromTo(
          descRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 0.7, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          linksContainerRef.current ? Array.from(linksContainerRef.current.children) : [],
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
          "-=0.5"
        );
    },
    { scope: containerRef }
  );

  const links = [
    { label: "home", href: "/" },
    { label: "projects", href: "/projects" },
    { label: "contact", href: "/#contact" },
  ];

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen flex flex-col justify-center items-center py-20 text-center relative select-none"
    >
      <span
        ref={labelRef}
        className="font-mono text-xs uppercase tracking-[0.2em] mb-4 text-foreground/50 opacity-0"
      >
        [ lost in space ]
      </span>

      <h1
        ref={headingRef}
        className="font-instrument_serif text-7xl md:text-9xl font-light italic leading-none tracking-tight mb-6 opacity-0"
      >
        not found
      </h1>

      <p
        ref={descRef}
        className="font-sans text-base md:text-lg font-light text-foreground/70 max-w-md mb-12 leading-relaxed opacity-0"
      >
        You've wandered off the grid. The page you are looking for has been moved, deleted, or never existed.
      </p>

      <div
        ref={linksContainerRef}
        className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 font-sans text-sm tracking-wide lowercase"
      >
        {links.map((link, idx) => {
          const itemRef = useRef<HTMLAnchorElement>(null);
          return (
            <Link
              key={idx}
              ref={itemRef}
              href={link.href}
              className="text-foreground/80 hover:text-foreground transition-colors duration-300 font-medium py-1 px-2 relative group overflow-hidden block"
            >
              <TextSwap text={link.label} triggerRef={itemRef} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
