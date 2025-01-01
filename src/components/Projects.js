import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

function Projects() {
  const projects = [
    {
      name: 'Project 1',
      image: 'https://via.placeholder.com/300x200.gif',
      github: 'https://github.com/yourusername/project1',
      description: 'This is a placeholder description for Project 1.'
    },
    {
      name: 'Project 2',
      image: 'https://via.placeholder.com/300x200.gif',
      github: 'https://github.com/yourusername/project2',
      description: 'This is a placeholder description for Project 2.'
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.name} />
            <div className="project-info">
              <h3>{project.name} <a href={project.github} target="_blank" rel="noopener noreferrer"><FaGithub  color='#9ed7ff'/></a></h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
