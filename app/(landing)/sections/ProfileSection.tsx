"use client";

import ParallaxImage from "@/components/ui/ParallaxImage";

export default function ProfileSection() {
  return (
    <section className="w-full h-auto">
      {/* Mobile Profile Image */}
      <div className="block md:hidden">
        <ParallaxImage
          src="/images/raflyForMobile.webp"
          alt="Muhammad Rafly Adriansyah - Web Developer & Software Engineer Profile"
          fill
          containerClassName="w-full h-[450px] rounded-[calc(2.5rem-0.5rem)]"
          className="object-cover grayscale"
          loading="eager"
          sizes="100vw"
          y={30}
          enableReveal
        />
      </div>

      {/* Desktop Profile Image */}
      <div className="hidden md:block">
        <ParallaxImage
          src="/images/rafly.webp"
          alt="Muhammad Rafly Adriansyah - Web Developer & Software Engineer Profile"
          fill
          containerClassName="w-full h-[750px] rounded-[calc(2.5rem-0.5rem)]"
          className="object-cover grayscale"
          loading="eager"
          sizes="80vw"
          y={30}
          enableReveal
        />
      </div>
    </section>
  );
}

