import React from "react";
import { skillGroups } from "../data/portfolio";

const Skills: React.FC = () => {
  return (
    <section className="portfolio-section" id="skills">
      <div className="section-tag">
        <span className="n">02</span> / stack
      </div>
      <h2>Tech stack</h2>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.category}>
            <div className="cat">{group.category}</div>
            <div className="items">{group.items}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
