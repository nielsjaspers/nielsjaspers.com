import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

function Projects({ language }) {
    const projectData = {
        en: [
            {
                name: 'cli-sky',
                image: '/assets/blue-sky.jpg',
                github: 'https://github.com/nielsjaspers/cli-sky',
                description:
                'cli-sky is a project I am currently working on. It is a command-line tool, built with Go, for interacting with the social media platform Bluesky',
            },
            {
                name: 'CLS (Command-line Share)',
                image: '/assets/clsdemo.gif',
                github: 'https://github.com/nielsjaspers/cls',
                description:
                    'CLS is a lightweight command-line tool designed for securely sharing files over a local network. Built with Go, it utilizes TLS to ensure safe transfers between devices. Ideal for quick, private file-sharing. Through this project, I gained hands-on experience with the TLS protocol, learning how it secures data transmission, and implemented the logic for sending files from a client to a server application.',
            },
        ],
        nl: [
            {
                name: 'cli-sky',
                image: '/assets/blue-sky.jpg',
                github: 'https://github.com/nielsjaspers/cli-sky',
                description:
                'cli-sky is een project waaraan ik momenteel werk. Het is een command-line tool, gebouwd met Go, voor interactie met het sociale mediaplatform Bluesky.',
            },
            {
                name: 'CLS (Command-line Share)',
                image: '/assets/clsdemo.gif',
                github: 'https://github.com/nielsjaspers/cls',
                description:
                    'CLS is een lichtgewicht command-line tool ontworpen voor het veilig delen van bestanden via een lokaal netwerk. Gebouwd met Go, maakt het gebruik van TLS om veilige overdrachten tussen apparaten te waarborgen. Ideaal voor snelle, privé bestandsoverdracht. Via dit project heb ik praktische ervaring opgedaan met het TLS-protocol, geleerd hoe het gegevensoverdracht beveiligt, en de logica geïmplementeerd voor het verzenden van bestanden van een client naar een servertoepassing.',
            },
        ],
    };

    const projects = projectData[language];

    return (
        <section id="projects">
            <h2>{language === 'en' ? 'Projects' : 'Projecten'}</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.image} alt={project.name} />
                        <div className="project-info">
                            <h3>
                                {project.name}{' '}
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <FaGithub />
                                </a>
                            </h3>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;

