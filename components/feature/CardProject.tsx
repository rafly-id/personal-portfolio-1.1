"use client";

import { memo, useRef } from "react";
import Link from "@/components/global/TransitionLink";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Project } from "@/types";
import { useTextReveal } from "@/hooks/useTextReveal";
import ParallaxImage from "@/components/ui/ParallaxImage";
import { cn } from "@/lib/utils";

type CardProjectProps = Pick<
  Project,
  "slug" | "imageSrc" | "imageAlt" | "title" | "tech"
> & {
  className?: string;
  priority?: boolean;
};

const CardProject = memo(function CardProject({
  slug,
  imageSrc,
  imageAlt,
  title,
  tech,
  className,
  priority = false,
}: CardProjectProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const techRef = useRef<HTMLParagraphElement>(null);

  useTextReveal({
    ref: titleRef,
    y: 150,
    duration: 0.5,
    delay: 0,
  });

  useTextReveal({
    ref: techRef,
    y: 150,
    duration: 0.5,
    delay: 0,
    type: "lines",
  });

  return (
    <Card
      className={cn("rounded-none border-0 p-0 shadow-none bg-transparent", className)}
      data-cursor="view"
      data-cursor-text="view project"
    >
      <Link href={`/projects/${slug}`} className="block group/card">
        <ParallaxImage
          src={imageSrc}
          alt={imageAlt}
          fill
          containerClassName="w-full aspect-[16/10] md:aspect-auto md:h-[600px] lg:h-[700px] rounded-3xl md:rounded-[2rem] shadow-[inset_0_1px_2.5px_rgba(0,0,0,0.08)]"
          className="grayscale group-hover/card:grayscale-0 group-active/card:grayscale-0 active:grayscale-0 transition-[filter] duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={priority}
        />
      </Link>

      {/* Render text details statically below the image */}
      <div className="mt-4 text-center">
        <CardHeader className="text-center font-bold text-2xl md:text-3xl uppercase font-instrument_serif p-0 pt-2 pb-1">
          <CardTitle ref={titleRef} className="overflow-hidden">
            <Link
              href={`/projects/${slug}`}
              className="hover:font-instrument_serif transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] inline-block"
            >
              {title}
            </Link>
          </CardTitle>
        </CardHeader>

        <CardContent className="text-center uppercase p-0 pb-2">
          <CardDescription className="font-bold text-xs tracking-widest text-foreground/50">
            <p ref={techRef} className="overflow-hidden">
              {tech.join(" • ")}
            </p>
          </CardDescription>
        </CardContent>
      </div>
    </Card>
  );
});

export default CardProject;
