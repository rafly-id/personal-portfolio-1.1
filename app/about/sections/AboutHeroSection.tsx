"use client";

import { useRef } from "react";
import Image from "next/image";

import { useTextReveal } from "@/hooks/useTextReveal";
import { useScrollVelocity } from "@/hooks/useScrollVelocity";
import { useParallaxImage } from "@/hooks/useParallaxImage";

const AboutHeroSection = () => {
  const marqueeRevealRef = useRef<HTMLDivElement>(null);

  const marqueeScrollerRef1 = useRef<HTMLDivElement>(null);
  const marqueeFirstItemRef1 = useRef<HTMLSpanElement>(null);

  const marqueeScrollerRef2 = useRef<HTMLDivElement>(null);
  const marqueeFirstItemRef2 = useRef<HTMLSpanElement>(null);

  useTextReveal({
    ref: marqueeRevealRef,
    y: 200,
    duration: 1,
    delay: 0,
    enableSplit: true,
  });

  useScrollVelocity({
    scrollerRef: marqueeScrollerRef1,
    firstItemRef: marqueeFirstItemRef1,
    baseVelocity: 50,
  });

  useScrollVelocity({
    scrollerRef: marqueeScrollerRef2,
    firstItemRef: marqueeFirstItemRef2,
    baseVelocity: -50,
  });

  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useTextReveal({
    ref: titleRef,
    y: 150,
    duration: 1,
    delay: 0,
  });

  useTextReveal({
    ref: descRef,
    y: 150,
    duration: 1,
    delay: 0.2,
    type: "lines",
  });

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useParallaxImage({
    containerRef: imageContainerRef,
    imageRef,
    y: -30,
    enableReveal: true,
  });

  return (
    <>
      <div className="uppercase overflow-hidden">
        <div ref={marqueeRevealRef}>
          <div
            ref={marqueeScrollerRef1}
            className="flex whitespace-nowrap tracking-tight font-oswald text-4xl font-bold md:text-[5rem]"
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                ref={i === 0 ? marqueeFirstItemRef1 : undefined}
                className="shrink-0"
              >
                About Me/&nbsp;
              </span>
            ))}
          </div>

          <div
            ref={marqueeScrollerRef2}
            className="flex whitespace-nowrap tracking-tight font-oswald text-4xl font-bold md:text-[5rem]"
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                ref={i === 0 ? marqueeFirstItemRef2 : undefined}
                className="shrink-0"
              >
                Rafly Adriansyah/&nbsp;
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10 md:mt-20">
        <div>
          <div className="uppercase font-oswald font-bold text-6xl md:text-7xl mb-5 md:mb-10 overflow-hidden">
            <h1 ref={titleRef}>Hi, I’m Rafly.</h1>
          </div>

          <div className="text-xl md:text-3xl font-light uppercase tracking-tight overflow-hidden">
            <p ref={descRef}>
              Nice to meet you — I’m a Frontend Developer who enjoys building
              clean and modern web interfaces.
            </p>
          </div>
        </div>

        <div className="w-full h-full">
          <div
            ref={imageContainerRef}
            className="relative w-full h-[500px] md:h-[700px] overflow-hidden"
          >
            <Image
              ref={imageRef}
              src="/images/profile.png"
              alt="Profile"
              fill
              loading="eager"
              className="object-cover grayscale"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHeroSection;
