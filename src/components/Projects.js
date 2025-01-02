import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

function Projects() {
  const projects = [
    {
      name: 'CLS (Command-line Share)',
      image: '/assets/clsdemo.gif',
      github: 'https://github.com/nielsjaspers/cls',
      description: 'CLS is a lightweight command-line tool designed for securely sharing files over a local network. Built with Go, it utilizes TLS to ensure safe transfers between devices. Ideal for quick, private file-sharing. Through this project, I gained hands-on experience with the TLS protocol, learning how it secures data transmission, and implemented the logic for sending files from a client to a server application.'
    },
    {
      name: 'Comic Book Reader',
      image: '/assets/comicbookreader.png',
      github: 'https://github.com/nielsjaspers/comicbook-reader',
      description: 'For a school project, my project-partner and I developed a comic book reader in Java using Java Swing. This project helped me dive into file decompression, implementing support for RAR and ZIP formats, as well as optimizing startup times through JSON-based storage.'
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
