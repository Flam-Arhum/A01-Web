// src/App.js
import React, { useState } from 'react';
import './App.css';

function Portfolio() {
  const [filter, setFilter] = useState('');
  const projects = [
    { name: 'Project 1', tech: 'C#' },
    { name: 'Project 2', tech: 'Java' },
    { name: 'Project 3', tech: 'Node.js' },
    // Add more projects as needed
  ];

  const education = [
    '9th Grade - School Name',
    '10th Grade - School Name',
    // Add more education details as needed
  ];

  const certifications = [
    'Certification 1 - Certification Body',
    'Certification 2 - Certification Body',
    // Add more certification details as needed
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Your Name</h1>
        <p>Web Developer | Software Engineer</p>
      </header>

      <nav>
        <input
          type="text"
          placeholder="Filter projects by technology"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </nav>

      <section id="home">
        <h2>Home</h2>
        <p>Welcome to my portfolio website. I am a passionate web developer with experience in various technologies.</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <ul>
          {projects
            .filter((project) => project.tech.toLowerCase().includes(filter.toLowerCase()))
            .map((project, index) => (
              <li key={index}>{project.name} ({project.tech})</li>
            ))}
        </ul>
      </section>

      <section id="education">
        <h2>Education</h2>
        <ul>
          {education.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section id="certifications">
        <h2>Certifications</h2>
        <ul>
          {certifications.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <footer>
        <p>2023 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Portfolio;
