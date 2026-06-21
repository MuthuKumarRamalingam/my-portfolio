import React from "react";
import { about } from "../data/portfolio";

const About: React.FC = () => {
  return (
    <section className="portfolio-section" id="about">
      <div className="section-tag">
        <span className="n">01</span> / about
      </div>
      <h2>System overview</h2>
      <div className="about-grid">
        <div>
          {about.paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <div className="metrics">
          {about.metrics.map((m) => (
            <div className="metric" key={m.label}>
              <div className="val">{m.value}</div>
              <div className="lbl">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
