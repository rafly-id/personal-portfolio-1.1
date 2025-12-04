"use client";

import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxImageProps {
  src: string;
  alt: string;
}

const ParallaxImage = ({ src, alt }: ParallaxImageProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useLayoutEffect(() => {
    if (!containerRef.current || !imageRef.current) return;

    const tl = gsap.to(imageRef.current, {
      yPercent: 25,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-auto h-[500px] md:h-[650px] overflow-hidden"
    >
      <Image
        ref={imageRef}
        src={src}
        alt={alt}
        fill
        className="object-cover grayscale"
      />
    </div>
  );
};

export default ParallaxImage;
