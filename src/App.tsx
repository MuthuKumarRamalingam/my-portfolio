import React from 'react';
import { resumeData } from './data/resume.ts';
import ExperienceCard from './components/ExperienceCard.tsx';

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <header>
        <h1>{resumeData.name}</h1>
        <h2>{resumeData.title}</h2>
        <p>{resumeData.summary}</p>
      </header>

      <section>
        <h2>Technical Expertise</h2>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {resumeData.skills.map(skill => (
            <span key={skill} style={{ background: '#f0f0f0', padding: '5px 10px', borderRadius: '5px' }}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h2>Professional Experience</h2>
        {resumeData.experience.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} />
        ))}
      </section>
    </div>
  );
}

export default App;