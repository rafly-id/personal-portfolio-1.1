"use client";

import { useRef } from "react";
import { useTextReveal } from "@/hooks/useTextReveal";

import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { getWhatsAppLink } from "@/lib/utils";

const Footer = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const whatsappLink = getWhatsAppLink("Halo Rafly");

  useTextReveal({
    ref: titleRef,
    y: 150,
    duration: 1,
    delay: 0,
  });

  return (
    <footer className="mx-5 flex gap-8 md:gap-30 h-screen pb-5 justify-center items-center">
      <div className="font-bold text-7xl md:text-9xl font-kranky uppercase">
        <h2 ref={titleRef}>Let's Talk</h2>
      </div>

      <div className="flex justify-center items-center gap-3">
        <a
          href="https://www.linkedin.com/in/rafly-adriansyah-35587225b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} />
        </a>

        <a
          href="https://www.instagram.com/__rafllyy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} />
        </a>

        <a
          href="https://github.com/rafly-id"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} />
        </a>

        <a
          href="mailto:muhr0417@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdEmail size={30} />
        </a>

        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
