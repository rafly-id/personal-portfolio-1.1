"use client";

import CardWork from "@/components/feature/CardWork";
import Title from "@/components/ui/Title";
import { certificates } from "@/lib/data";

const CertificatesSection = () => {

  return (
    <section className="mt-20 md:mt-32 mb-20">
      <div className="flex justify-center text-center mb-10">
        <Title text="certificate" />
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
