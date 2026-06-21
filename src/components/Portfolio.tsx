import React from "react";
import "../styles/portfolio.css";
import StatusBar from "./StatusBar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio-root">
      <StatusBar />
      <div className="wrap">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
