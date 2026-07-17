"use client";

import ParallaxImage from "@/components/ui/ParallaxImage";

export default function ProfileSection() {
  return (
    <section className="w-full h-auto">
      <ParallaxImage
        src="/images/profile-5.png"
        alt="Profile"
        fill
        containerClassName="w-full h-[400px] md:h-[750px] rounded-[calc(2.5rem-0.5rem)]"
        className="object-cover grayscale"
        loading="eager"
        sizes="(max-width: 768px) 100vw, 80vw"
        y={30}
        enableReveal
      />
    </section>
  );
}

