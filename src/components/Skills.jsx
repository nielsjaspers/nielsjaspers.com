import React from 'react';
import './Skills.css';

const skillCategories = {
    en: [
        {
            category: 'Programming Languages',
            skills: ['Go (Golang)', 'C#', 'Java'],
        },
        {
            category: 'Technologies',
            skills: ['Docker', 'TLS/SSL', 'SQL', 'Linux/Unix'],
        },
        {
            category: 'Tools',
            skills: ['Git', 'GitHub', '✨Neovim✨'],
        },
    ],
    nl: [
        {
            category: 'Programmeertalen',
            skills: ['Go (Golang)', 'C#', 'Java'],
        },
        {
            category: 'Technologieën',
            skills: ['Docker', 'TLS/SSL', 'SQL', 'Linux/Unix'],
        },
        {
            category: 'Tools',
            skills: ['Git', 'GitHub', '✨Neovim✨'],
        },
    ],
};

function Skills({ language }) {
    const categories = skillCategories[language];

    return (
        <section id="skills">
            <h2>{language === 'en' ? 'Skills' : 'Vaardigheden'}</h2>
            <div className="skills-grid">
                {categories.map((category, index) => (
                    <div key={index} className="skill-category">
                        <h3>{category.category}</h3>
                        <ul>
                            {category.skills.map((skill, skillIndex) => (
                                <li key={skillIndex} className={skill.includes('✨Neovim✨') ? 'neovim' : ''}>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
