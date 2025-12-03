"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    let split: any;

    if (isOpen) {
      gsap.to(menuRef.current, {
        y: "0%",
        duration: 1,
        ease: "power4.inOut",
      });

      split = new SplitText(linksRef.current, { type: "chars" });
      gsap.from(split.chars, {
        y: 150,
        duration: 0.5,
        stagger: 0.01,
        delay: 0.5,
      });
    } else {
      gsap.to(menuRef.current, {
        y: "-100%",
        duration: 1,
        ease: "power4.inOut",
      });
      split = new SplitText(linksRef.current, { type: "chars" });
      gsap.to(split.chars, {
        y: 150,
        stagger: 0.01,
        duration: 0.5,
      });
    }

    return () => {
      if (split) split.revert();
    };
  }, [isOpen]);

  return (
    <div className="sticky top-0 left-0 p-5 w-full z-50">
      <div className="flex justify-between items-center text-center font-bold relative z-60">
        <div className="text-3xl md:text-5xl">RAF</div>
        <Button
          className="flex flex-col justify-center items-center gap-1 p-2 rounded cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block w-7 md:w-10 h-1 bg-foreground rounded transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-7 md:w-10 h-1 bg-foreground rounded transition-opacity ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-7 md:w-10 h-1 bg-foreground rounded transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </Button>
      </div>

      <div
        ref={menuRef}
        className="fixed top-0 left-0 w-full h-screen bg-secondary flex justify-center items-center text-center"
        style={{
          transform: "translateY(-100%)",
        }}
      >
        <div className="flex flex-col gap-3 text-3xl md:text-8xl font-bold uppercase">
          {["Home", "About", "Work", "Contact"].map((item, index) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              ref={(el) => {
                linksRef.current[index] = el;
              }}
              className="overflow-hidden inline-block"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
