import React from 'react';
import Skills from './Skills';

function About({ language }) {
    // Translations for About section
    const content = {
        en: {
            title: 'About Me',
            intro: `Hi there! I’m Niels, a second-year Computer Science student from the Netherlands with a passion for programming and technology!<br />
I’m always excited to experiment with new tools and technologies. Currently, I’m diving deep into Go, with a new upcoming project. 👀<br />
<br />
My journey in software development is driven by a love for problem-solving and a curiosity to learn new things. I also have a special place in my heart for Neovim, my go-to tool for writing code. (btw)<br />
<br />
In addition to my academic pursuits, I enjoy working on my (open-source) projects, learning about emerging trends, and challenging myself to think outside the box.<br />
<br />
Feel free to explore my skills and projects below (and stay tuned for my upcoming blog!), or <a href="#contact">get in touch</a> to learn more about me and what I’m working on!`,
        },
        nl: {
            title: 'Over Mij',
            intro: `Hoi! Ik ben Niels, een tweedejaars Computer Science student uit Nederland met een grote passie voor programmeren en technologie!<br />
Ik ben altijd op zoek naar nieuwe tools en technologieën om uit te proberen. Op dit moment ben ik druk bezig met Go, voor een nieuw aankomend project. 👀<br />
<br />
Mijn interesse in softwareontwikkeling komt voort uit mijn liefde voor het oplossen van problemen en mijn nieuwsgierigheid om steeds nieuwe dingen te leren. Ik ben ook dol op Neovim, mijn favoriete tool voor het schrijven van code.<br />
<br />
Naast mijn studie werk ik graag aan mijn (open-source) projecten, houd ik me bezig met de laatste trends en daag ik mezelf uit om mijn grenzen te verleggen.<br />
<br />
Kijk gerust rond om meer te ontdekken over mijn vaardigheden en projecten (en blijf op de hoogte van mijn aankomende blog!). Als je meer wilt weten, <a href="#contact">neem dan contact op!</a>`,
        },
    };

    return (
        <section id="about">
            <h2>{content[language].title}</h2>
            <p dangerouslySetInnerHTML={{ __html: content[language].intro }} />
            <Skills language={language} />
        </section>
    );
}

export default About;

