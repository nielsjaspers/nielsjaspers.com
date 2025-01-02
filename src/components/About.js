import React from 'react';
import Skills from './Skills';

function About() {
    return (
        <section id="about">
            <h2>About Me</h2>
            <p>
                Hi there! I’m Niels, a second-year Computer Science student from the Netherlands with a passion for programming and technology! 🚀<br />
                I’m always excited to experiment with new tools and technologies. Currently, I’m diving deep into Go, with a new upcoming project. 👀<br />
                <br />
                My journey in software development is driven by a love for problem-solving and a curiosity to learn new things. I also have a special place in my heart for Neovim, my go-to tool for writing code. (btw)<br />
                <br />
                In addition to my academic pursuits, I enjoy working on my (open-source) projects, learning about emerging trends, and challenging myself to think outside the box.<br />
                <br />
                Feel free to explore my skills and projects below (and stay tuned for my upcoming blog!), or <a href="#contact">get in touch</a> to learn more about me and what I’m working on!
            </p>
            <Skills />
        </section>
    );
}

export default About;

