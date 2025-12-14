import type { Metadata } from "next";

import ContactSection from "./sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact Me",
  description:
    "Get in touch with me for collaborations, inquiries, or just to say hello.",
};

const Contact = () => {
  return <ContactSection />;
};

export default Contact;
