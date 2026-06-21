// src/components/Contact.tsx
import React from "react";
import { profile } from "../data/portfolio";

const Contact: React.FC = () => {
  return (
    <section className="portfolio-section" id="contact">
      <div className="contact-box">
        <h2>Let's connect</h2>
        <p>
          Open to Senior / Staff Engineer, Architect, and Engineering Manager roles. Always happy to
          talk distributed systems, cloud architecture, or AI integration.
        </p>
        <div className="contact-links">
          <a className="btn primary" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            linkedin
          </a>
          <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">
            github
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
