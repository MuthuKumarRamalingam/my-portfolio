// src/components/Projects.tsx
import React from "react";
import { projects, Project } from "../data/portfolio";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="project">
      <div className="project-head">
        <div>
          <div className="project-title">{project.title}</div>
          <div className="project-stack">{project.stack}</div>
        </div>
        <div className="status-pill">
          <span className="dot" style={{ background: "var(--green)" }} />
          {project.status}
        </div>
      </div>
      <p className="desc">{project.description}</p>
      <div className="project-metrics">
        {project.metrics.map((m) => (
          <div className="pmetric" key={m.label}>
            <div className="v">{m.value}</div>
            <div className="l">{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section className="portfolio-section" id="projects">
      <div className="section-tag">
        <span className="n">03</span> / postmortems
      </div>
      <h2>Featured work</h2>
      {projects.map((project) => (
        <ProjectCard project={project} key={project.title} />
      ))}
    </section>
  );
};

export default Projects;
