"use client";

import Title from "@/components/ui/Title";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { socialLinks } from "@/lib/data";
import { useTextReveal } from "@/hooks/useTextReveal";

function SocialLinkItem({
  name,
  href,
  index,
}: {
  name: string;
  href: string;
  index: number;
}) {
  const textRef = useRef<HTMLDivElement>(null);

  useTextReveal({
    ref: textRef,
    y: 50,
    duration: 0.8,
    delay: 0.2 + index * 0.1,
  });

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between border-b py-4 md:py-6"
    >
      <div
        ref={textRef}
        className="text-2xl md:text-4xl font-oswald uppercase overflow-hidden hover:font-kranky"
      >
        {name}
      </div>

      <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 opacity-50" />
    </a>
  );
}

const ContactSection = () => {
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useTextReveal({
    ref: subtitleRef,
    y: 100,
    duration: 1,
    delay: 0,
    type: "lines",
  });

  return (
    <section className="flex flex-col md:flex-row overflow-hidden mx-5 mt-20 md:mt-0">
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <Title text="Let's Talk" className="text-6xl md:text-8xl" />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center mt-10">
        <div className="flex flex-col gap-6 max-w-2xl">
          <div className="mb-4 md:mb-8 overflow-hidden">
            <p
              ref={subtitleRef}
              className="text-lg md:text-xl font-light text-center md:text-left"
            >
              Have a project in mind or just want to say hi?
            </p>
          </div>

          <div className="flex flex-col">
            {socialLinks.map((link, index) => (
              <SocialLinkItem
                key={index}
                name={link.name}
                href={link.href}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
