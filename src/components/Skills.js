import React from 'react';
import './Skills.css';

const skillCategories = [
  {
    category: 'Programming Languages',
    skills: ['Go (Golang)', 'C#', 'Java']
  },
  {
    category: 'Technologies',
    skills: ['Docker', 'TLS/SSH', 'SQL', 'Linux/Unix']
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', '✨Neovim✨']
  }
];

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
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

