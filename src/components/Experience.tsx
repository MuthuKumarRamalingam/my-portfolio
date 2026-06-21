import React from "react";
import { experience } from "../data/portfolio";

const Experience: React.FC = () => {
  return (
    <section className="portfolio-section" id="experience">
      <div className="section-tag">
        <span className="n">04</span> / timeline
      </div>
      <h2>Experience</h2>
      <div className="timeline">
        {experience.map((item) => (
          <div className="tl-item" key={item.role + item.dateRange}>
            <div className="tl-date">{item.dateRange}</div>
            <div className="tl-role">{item.role}</div>
            <div className="tl-org">{item.org}</div>
            <div className="tl-desc">{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
