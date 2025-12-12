import ScrollVelocity from "@/components/animations/ScrollVelocity";
import TextReveal from "@/components/animations/TextReveal";

const MarqueeSection = () => {
  return (
    <div className="uppercase mt-5 md:mt-10">
      <TextReveal
        text={
          <ScrollVelocity
            texts={["Rafly Adriansyah/", "Frontend Developer/"]}
            velocity={50}
            numCopies={10}
          />
        }
        y={160}
        enableSplit={false}
      />
    </div>
  );
};

export default MarqueeSection;
