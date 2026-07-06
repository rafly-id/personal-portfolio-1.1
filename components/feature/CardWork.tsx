"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import ButtonCTA from "@/components/ui/ButtonCTA";
import { Project } from "@/types";

import { useTextReveal } from "@/hooks/useTextReveal";
import { useParallaxImage } from "@/hooks/useParallaxImage";

type CardWorkProps = Pick<
  Project,
  "slug" | "imageSrc" | "imageAlt" | "title" | "tech" | "link"
> & {
  github?: string;
};

const CardWork = ({
  slug,
  imageSrc,
  imageAlt,
  title,
  tech,
  link,
  github,
}: CardWorkProps) => {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const techRef = useRef<HTMLParagraphElement>(null);

  useParallaxImage({
    containerRef: imageContainerRef,
    imageRef,
    y: 30,
    enableReveal: true,
  });

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
    <Card className="rounded-none border-0 p-0 gap-2 shadow-none">
      <Link href={`/work/${slug}`} className="block">
        <div
          ref={imageContainerRef}
          className="relative w-full h-[500px] md:h-[800px] overflow-hidden"
        >
          <Image
            ref={imageRef}
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover grayscale hover:grayscale-0 transition-[filter] duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>
      </Link>

      <CardHeader className="text-center font-bold text-3xl md:text-4xl uppercase font-instrument_serif">
        <CardTitle ref={titleRef} className="overflow-hidden">
          <Link
            href={`/work/${slug}`}
            className="hover:font-instrument_serif transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] inline-block"
          >
            {title}
          </Link>
        </CardTitle>
      </CardHeader>

      <CardContent className="text-center uppercase">
        <CardDescription className="font-bold">
          <p ref={techRef} className="overflow-hidden">
            {tech.join(", ")}
          </p>

          {github && (
            <ButtonCTA
              link={`/work/${slug}`}
              text="View Project"
              className="text-xl p-2 md:p-5 my-2 md:my-5"
            />
          )}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default CardWork;
