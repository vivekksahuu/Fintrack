import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import FAQ from "./FAQ";
import Footer from "./Footer";

import { useRef } from "react";

const LandingPage = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const faqRef = useRef(null);
  const scrollToSection = (section) => {
    const sectionRefs = {
      hero: heroRef,
      features: featuresRef,
      faq: faqRef,
    };

    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <Hero ref={heroRef} />
      <Features ref={featuresRef} />
      <FAQ ref={faqRef} />
      <Footer scrollToSection={scrollToSection} />
    </>
  );
};

export default LandingPage;
