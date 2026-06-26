import React from "react";
import { profile } from "../data/portfolio";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-top">
        <img
          src="/profile.jpg"
          alt={profile.name}
          className="hero-photo"
        />
        <div>
          <div className="hero-eyebrow">whoami</div>
          <h1>{profile.name}</h1>
          <div className="role">
            Lead Software Engineer<span className="sep">/</span>Distributed Systems
            <span className="sep">/</span>Cloud &amp; AI
          </div>
        </div>
      </div>
      <p className="lede">{profile.lede}</p>
      <div className="hero-actions">
        <a className="btn primary" href={profile.resumeUrl} download>
          ↓ download resume
        </a>
        <a className="btn" href={`mailto:${profile.email}`}>
          get in touch
        </a>
        <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          linkedin
        </a>
        <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">
          github
        </a>
      </div>
    </section>
  );
};

export default Hero;