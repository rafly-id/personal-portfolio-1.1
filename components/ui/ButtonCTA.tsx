import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonCTAProps {
  link: string;
  text: string;
  className?: string;
}

const ButtonCTA = ({ link, text, className }: ButtonCTAProps) => {
  return (
    <div className="flex justify-center items-center text-center">
      <Button
        asChild
        className={cn(
          "font-bold uppercase text-3xl font-oswald p-5 border-2 rounded-full my-5 md:my-10 h-auto",
          className
        )}
      >
        <Link href={link}>{text}</Link>
      </Button>
    </div>
  );
};

export default ButtonCTA;
