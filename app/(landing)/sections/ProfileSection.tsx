"use client";

import { useRef } from "react";
import Image from "next/image";
import { useParallaxImage } from "@/hooks/useParallaxImage";

export default function ProfileSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useParallaxImage({
    containerRef,
    imageRef,
    y: 30,
    enableReveal: true,
  });

  return (
    <section className="w-full h-auto">
      <div
        ref={containerRef}
        className="relative w-full h-[500px] md:h-[750px] overflow-hidden"
      >
        <Image
          ref={imageRef}
          src="/images/profile-5.png"
          alt="Profile"
          fill
          className="object-cover grayscale"
          loading="eager"
          sizes="(max-width: 768px) 100vw, 80vw"
        />
      </div>
    </section>
  );
}
