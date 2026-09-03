"use client";

import ParallaxImage from "@/components/ui/ParallaxImage";

export default function ProfileSection() {
  return (
    <section className="w-full h-auto">
      <ParallaxImage
        src="/images/rafly.webp"
        alt="Muhammad Rafly Adriansyah - Web Developer & Software Engineer Profile"
        fill
        containerClassName="w-full h-[450px] md:h-[750px] rounded-[calc(2.5rem-0.5rem)]"
        className="object-cover grayscale"
        loading="eager"
        sizes="(max-width: 768px) 100vw, 80vw"
        y={30}
        enableReveal
      />
    </section>
  );
}

