import TextReveal from "../animations/TextReveal";
const Footer = () => {
  return (
    <div className="mt-10 px-5 py-5 md:py-10 flex justify-between items-center text-center font-bold uppercase md:text-3xl font-oswald text-background bg-foreground">
      <TextReveal
        text="Rafly Adriansyah _ 2025"
        y={150}
        delay={0}
        duration={1}
      />
      <a href="contact">
        <TextReveal text="Contact" y={150} delay={0} duration={1} />
      </a>
    </div>
  );
};

export default Footer;
