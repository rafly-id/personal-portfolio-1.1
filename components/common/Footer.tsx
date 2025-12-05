import TextReveal from "../animations/TextReveal";
import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const whatsappLink = `https://wa.me/6285974111131?text=${encodeURIComponent(
    "Halo Rafly "
  )}`;
  return (
    <div className="mx-5 flex gap-8 md:gap-30 h-screen pb-5 justify-center items-center">
      <div className="font-bold text-7xl md:text-9xl font-oswald uppercase">
        <TextReveal text="Let's Talk" y={150} delay={0} duration={1} />
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
    </div>
  );
};

export default Footer;
