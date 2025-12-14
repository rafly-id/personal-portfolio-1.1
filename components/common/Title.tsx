"use client";

import { useRef } from "react";
import { useTextReveal } from "@/hooks/useTextReveal";

interface TitleProps {
  text?: string;
}

const Title = ({ text }: TitleProps) => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useTextReveal({
    ref: titleRef,
    y: 150,
    duration: 0.5,
    delay: 0.5,
  });

  return (
    <div className="flex justify-start items-center text-center">
      <div className="text-8xl md:text-9xl font-bold uppercase font-oswald overflow-hidden">
        <h1 ref={titleRef}>{text}</h1>
      </div>
    </div>
  );
};

export default Title;
