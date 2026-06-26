import React, { useEffect } from "react";
import "../styles/portfolio.css";
import StatusBar from "./StatusBar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";

// Declaring global gtag typing for TypeScript compilation safety
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const Portfolio: React.FC = () => {
  // Effect Hook to handle initial page view metrics tracking
  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("config", "G-4FWBGFJP5J", {
        page_path: window.location.pathname + window.location.search
      });
    }
  }, []);

  return (
    <div className="portfolio-root">
      <StatusBar />
      
      {/* Semantic main landmark for perfect accessibility scores */}
      <main className="wrap">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Portfolio;