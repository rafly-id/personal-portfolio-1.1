"use client";

import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxImageProps {
  src: string;
  alt: string;
  enableReveal?: boolean;
}

const ParallaxImage = ({
  src,
  alt,
  enableReveal = false,
}: ParallaxImageProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useLayoutEffect(() => {
    if (!containerRef.current || !imageRef.current) return;

    const parallax = gsap.to(imageRef.current, {
      yPercent: 25,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    if (!enableReveal) return;

    const reveal = gsap.fromTo(
      imageRef.current,
      {
        autoAlpha: 0,
        clipPath: "inset(100% 0% 0% 0%)",
      },
      {
        autoAlpha: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power3.out",
        duration: 2,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      parallax.kill();
      reveal.kill();
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
