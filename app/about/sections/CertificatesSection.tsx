"use client";

import { useRef } from "react";
import { useTextReveal } from "@/hooks/useTextReveal";
import CardWork from "@/components/common/CardWork";
import { certificates } from "@/lib/data";

const CertificatesSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useTextReveal({
    ref: titleRef,
    y: 100,
    duration: 1,
    delay: 0,
  });

  return (
    <section className="mt-20 md:mt-32 mb-20">
      <div className="font-oswald text-4xl md:text-6xl uppercase mb-10 overflow-hidden">
        <h2 ref={titleRef}>Certificates</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {certificates.map((cert, index) => (
          <CardWork
            key={index}
            imageSrc={cert.imageSrc}
            imageAlt={cert.imageAlt}
            title={cert.title}
            tech={cert.tech}
            link={cert.link}
          />
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;
