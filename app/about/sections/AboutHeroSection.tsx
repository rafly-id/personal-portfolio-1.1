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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
        <div>
          <div className="uppercase font-kranky font-bold text-5xl md:text-7xl mb-5 md:mb-10 overflow-hidden">
            <h1 ref={titleRef}>Hi, I’m Rafly.</h1>
          </div>

          <div className="text-sm md:text-2xl font-light uppercase tracking-tighter overflow-hidden max-w-2xl">
            <p ref={descRef}>
              Nice to meet you — I’m a{" "}
              <span className="font-kranky">Frontend Developer</span> who enjoys
              building clean, modern web interfaces with a focus on good design,
              usability, smooth interactions, responsive layouts, and attention
              to detail.
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

      <div className="uppercase overflow-hidden">
        <div ref={marqueeRevealRef}>
          <div
            ref={marqueeScrollerRef1}
            className="flex whitespace-nowrap tracking-tight font-kranky text-5xl font-bold md:text-[5rem]"
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
            className="flex whitespace-nowrap tracking-tight font-oswald text-5xl font-bold md:text-[5rem]"
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
    </>
  );
};

export default AboutHeroSection;
