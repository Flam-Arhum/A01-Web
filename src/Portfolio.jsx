// src/App.js
import React, { useState } from 'react';

function Portfolio() {
  const [filter, setFilter] = useState('');
  const projects = [
    { name: 'Facial Clustering via AutoEncoders', tech: 'Python' },
    { name: 'Library Management System', tech: 'Java' },
    { name: 'Pacman', tech: 'C++' },
  ];

  const education = [
    'Undergraduate Degree - FAST NUCES',
    'High School - DHACSS SKBZ Campus',
  ];

  const certifications = [
    'Machine Learning - Stanford University',
    'Deep Learning - Stanford University',
    'Front End Web Development - freeCodeCamp',
    'AWS Certified Cloud Practitioner - Amazon Web Services',
    'Advanced Python - freeCodeCamp',
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', margin: '0', padding: '0', minHeight: '100vh', minWidth: '200vh'}}>
      <header style={{ backgroundColor: '#00bcd4', color: '#000', textAlign: 'center', padding: '1em 0' }}>
        <h1>Arhum Hashmi</h1>
        <p>Software Engineer | ML/DL Engineer | UI/UX Designer</p>
      </header>

      <nav style={{ backgroundColor: '#0097a7', padding: '0.5em', textAlign: 'center' }}>
        <input
          type="text"
          placeholder="Filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ padding: '0.3em' }}
        />
      </nav>

      <section style={{ padding: '20px', color: '#000' }} id="home">
        <h2>Profile</h2>
        <p>23 Years old | PostGrad @ IBA Karachi | MS(DS)</p>
      </section>
      

      <section style={{ padding: '20px', color: '#000' }} id="projects">
        <h2>Personal Projects</h2>
        <ul>
          {projects
            .filter((project) => project.tech.toLowerCase().includes(filter.toLowerCase()))
            .map((project, index) => (
              <li key={index}>{project.name} ({project.tech})</li>
            ))}
        </ul>
      </section>

      <section style={{ padding: '20px', color: '#000' }} id="education">
        <h2>Education</h2>
        <ul>
          {education.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section style={{ padding: '20px', color: '#000' }} id="certifications">
        <h2>Certifications</h2>
        <ul>
          {certifications.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Portfolio;
