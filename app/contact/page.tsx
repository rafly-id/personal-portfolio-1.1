"use client";

import TextReveal from "@/components/animations/TextReveal";
import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  const whatsappLink = `https://wa.me/6285974111131?text=${encodeURIComponent(
    "Halo Rafly "
  )}`;

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/rafly-adriansyah-35587225b/",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/__rafllyy/",
    },
    {
      name: "Github",
      href: "https://github.com/rafly-id",
    },
    {
      name: "Email",
      href: "mailto:muhr0417@gmail.com",
    },
    {
      name: "Whatsapp",
      href: whatsappLink,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row overflow-hidden mx-5">
      <div className="w-full h-[20vh] md:h-[40vh] flex items-center justify-center">
        <div className="font-bold text-6xl md:text-9xl font-oswald uppercase">
          <TextReveal text="Let's Talk" y={150} delay={0.2} duration={1} />
        </div>
      </div>

      <div className="w-full h-auto md:h-screen flex flex-col justify-center py-10">
        <div className="flex flex-col gap-6 max-w-2xl">
          <div className="mb-4 md:mb-8">
            <div className="text-lg md:text-xl font-light overflow-hidden">
              <TextReveal
                text="Have a project in mind or just want to say hi?"
                y={100}
                delay={0.4}
                duration={0.8}
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
                <div className="text-2xl md:text-4xl font-oswald uppercase">
                  <TextReveal
                    y={100}
                    duration={1}
                    delay={0}
                    text={link.name}
                  ></TextReveal>
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

export default Contact;
