"use client";

import { useRef } from "react";
import Image, { ImageProps } from "next/image";
import { useParallaxImage } from "@/hooks/useParallaxImage";
import { cn } from "@/lib/utils";

interface ParallaxImageProps extends Omit<ImageProps, "ref"> {
  containerClassName?: string;
  y?: number;
  enableReveal?: boolean;
  scrub?: boolean | number;
  hoverScale?: boolean;
}

export default function ParallaxImage({
  containerClassName,
  y = 30,
  enableReveal = true,
  scrub = 1.5,
  hoverScale = false,
  className,
  alt,
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
      <div
        className={cn(
          "w-full h-full",
          hoverScale &&
            "transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/card:scale-[1.03] group-hover:scale-[1.03]"
        )}
      >
        <Image
          ref={imageRef}
          alt={alt}
          className={cn("object-cover", className)}
          {...props}
        />
      </div>
    </div>
  );
}
