"use client";

import TextReveal from "@/components/animations/TextReveal";
import { ArrowUpRight } from "lucide-react";
import { socialLinks } from "@/lib/data";

const ContactSection = () => {
  return (
    <div className="flex flex-col md:flex-row overflow-hidden mx-5">
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="font-bold text-6xl md:text-8xl font-oswald uppercase">
          <TextReveal text="Let's Talk" y={150} delay={0} duration={1} />
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center mt-20 md:mt-10">
        <div className="flex flex-col gap-6 max-w-2xl">
          <div className="mb-4 md:mb-8">
            <div className="text-lg md:text-xl font-light overflow-hidden">
              <TextReveal
                text="Have a project in mind or just want to say hi?"
                y={100}
                delay={0}
                duration={1}
              />
            </div>
          </div>

          <div className="flex flex-col">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border-b py-4 md:py-6"
              >
                <div className="text-2xl md:text-4xl font-oswald uppercase overflow-hidden">
                  <TextReveal
                    text={link.name}
                    y={50}
                    delay={0.2 + index * 0.1}
                    duration={0.8}
                  />
                </div>
                <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 opacity-50" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
