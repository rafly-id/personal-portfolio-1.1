"use client";

import { useRef } from "react";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import ButtonCTA from "./ButtonCTA";
import { Project } from "@/types";

import { useTextReveal } from "@/hooks/useTextReveal";
import { useParallaxImage } from "@/hooks/useParallaxImage";

type CardWorkProps = Pick<
  Project,
  "imageSrc" | "imageAlt" | "title" | "tech" | "link"
> & {
  github?: string;
};

const CardWork = ({
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
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div
          ref={imageContainerRef}
          className="relative w-full h-[500px] md:h-[800px] overflow-hidden"
        >
          <Image
            ref={imageRef}
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover grayscale"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>
      </a>

      <CardHeader className="text-center font-bold text-3xl md:text-4xl uppercase font-oswald">
        <CardTitle ref={titleRef} className="overflow-hidden">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="text-center uppercase">
        <CardDescription className="font-bold">
          <p ref={techRef} className="overflow-hidden">
            {tech.join(", ")}
          </p>

          {github && (
            <ButtonCTA
              link={github}
              text="See on GitHub"
              className="text-xl p-2 md:p-5 my-2 md:my-5"
            />
          )}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default CardWork;
