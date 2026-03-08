import React from 'react';
import { Experience } from '../data/resume.ts';

const ExperienceCard: React.FC<{ exp: Experience }> = ({ exp }) => (
    <div style={{ borderBottom: '1px solid #ccc', padding: '20px 0' }}>
        <h3>{exp.role} at {exp.company}</h3>
        <p><em>{exp.period}</em></p>
        <ul>
            {exp.highlights.map((point: string, i: number) => (
                <li key={i}>{point}</li>
            ))}
        </ul>
    </div>
);

export default ExperienceCard;