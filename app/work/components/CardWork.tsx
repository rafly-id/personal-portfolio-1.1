import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import TextReveal from "@/components/animations/TextReveal";
import ParallaxImage from "@/components/animations/ParalaxImages";

interface CardWorkProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  tech: string[];
  link?: string;
  github?: string;
}

const CardWork = ({
  imageSrc,
  imageAlt,
  title,
  tech,
  link,
  github,
}: CardWorkProps) => {
  return (
    <Card className="rounded-none border-0 p-0 gap-2 shadow-none">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <ParallaxImage src={imageSrc} alt={imageAlt} />
      </a>

      <CardHeader className="text-center font-bold text-4xl uppercase font-oswald">
        <CardTitle>
          <TextReveal text={title} y={150} duration={0.5} delay={0} />
        </CardTitle>
      </CardHeader>

      <CardContent className="text-center uppercase">
        <CardDescription className="font-bold">
          <TextReveal text={tech.join(", ")} y={150} duration={0.5} delay={0} />
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <TextReveal
                text="See on GitHub"
                y={150}
                duration={0.5}
                delay={0}
              />
            </a>
          )}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default CardWork;
