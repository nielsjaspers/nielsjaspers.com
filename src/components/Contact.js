import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="contact-icons">
        <a href="https://github.com/nielsjaspers" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/nielsjasperss" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:zakelijk@nielsjaspers.com">
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}

export default Contact;


