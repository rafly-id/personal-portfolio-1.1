import { Button } from "../ui/button";
import Link from "next/link";

interface ButtonCTAProps {
  link: string;
  text: string;
}

const ButtonCTA = ({ link, text }: ButtonCTAProps) => {
  return (
    <div className="flex justify-center items-center text-center">
      <Button
        asChild
        className="font-bold uppercase text-3xl font-oswald p-5 md:p-10 border-2 rounded-full my-5 md:my-10 h-auto"
      >
        <Link href={link}>{text}</Link>
      </Button>
    </div>
  );
};

export default ButtonCTA;
