import TextReveal from "@/components/animations/TextReveal";

interface TitleProps {
  text?: string;
}

const Title = ({ text }: TitleProps) => {
  return (
    <div className="flex justify-start items-center text-center">
      <div className="text-8xl md:text-9xl font-bold uppercase font-oswald">
        <TextReveal text={text} y={150} duration={0.5} delay={0.5} />
      </div>
    </div>
  );
};

export default Title;
