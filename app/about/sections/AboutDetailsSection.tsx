import TextReveal from "@/components/animations/TextReveal";
import { aboutDetails } from "@/lib/data";

const AboutDetailsSection = () => {
  return (
    <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-10">
      {aboutDetails.map((detail, index) => (
        <div key={index}>
          <div className="font-oswald text-xl md:text-3xl mb-3 uppercase border-b pb-2">
            <TextReveal
              text={detail.title}
              y={50}
              duration={1}
              delay={index * 0.1}
            />
          </div>
          <div className="text-sm md:text-base">
            <TextReveal
              text={detail.text}
              y={30}
              duration={1}
              delay={index * 0.1 + 0.2}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutDetailsSection;
