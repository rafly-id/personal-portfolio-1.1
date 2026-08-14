"use client";

import { useRef } from "react";
import Image, { ImageProps } from "next/image";
import { useParallaxImage } from "@/hooks/useParallaxImage";
import { cn } from "@/lib/utils";
import { ScrollTrigger } from "@/lib/gsap";

interface ParallaxImageProps extends Omit<ImageProps, "ref"> {
  containerClassName?: string;
  y?: number;
  enableReveal?: boolean;
  scrub?: boolean | number;
}

export default function ParallaxImage({
  containerClassName,
  y = 30,
  enableReveal = true,
  scrub = 1.5,
  className,
  alt,
  onLoad,
  ...props
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useParallaxImage({
    containerRef,
    imageRef,
    y,
    enableReveal,
    scrub,
  });

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden w-full h-full", containerClassName)}
    >
      <div className="relative w-full h-full">
        <Image
          ref={imageRef}
          alt={alt}
          onLoad={(e) => {
            ScrollTrigger.refresh();
            if (onLoad) onLoad(e);
          }}
          className={cn("object-cover", className)}
          style={{
            opacity: enableReveal ? 0 : undefined,
            clipPath: enableReveal ? "inset(100% 0% 0% 0%)" : undefined,
            ...props.style,
          }}
          {...props}
        />
      </div>
    </div>
  );
}
