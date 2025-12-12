import AboutHeroSection from "./sections/AboutHeroSection";
import AboutDetailsSection from "./sections/AboutDetailsSection";
import TechStackSection from "./sections/TechStackSection";
import CertificatesSection from "./sections/CertificatesSection";

const About = () => {
  return (
    <div className="mx-5">
      <AboutHeroSection />
      <AboutDetailsSection />
      <TechStackSection />
      <CertificatesSection />
    </div>
  );
};

export default About;
