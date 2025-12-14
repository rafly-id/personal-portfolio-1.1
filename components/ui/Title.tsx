"use client";

import { useRef } from "react";
import { useTextReveal } from "@/hooks/useTextReveal";

interface TitleProps {
  text?: string;
  className?: string;
}

const Title = ({ text, className }: TitleProps) => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useTextReveal({
    ref: titleRef,
    y: 150,
    duration: 1,
    delay: 0,
  });

  return (
    <div className="flex justify-start items-center text-center">
      <div className="text-5xl font-bold uppercase font-kranky">
        <h1 ref={titleRef} className={className}>{text}</h1>
      </div>
    </div>
  );
};

export default Title;
