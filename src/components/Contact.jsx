import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaBluesky } from "react-icons/fa6";
{/* import { FaXTwitter } from "react-icons/fa6"; */}
import './Contact.css';

function Contact() {
    return (
        <section id="contact">
            <h2>Contact</h2>
            <div className="contact-icons">
                <a href="https://github.com/nielsjaspers" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://bsky.app/profile/nielsjaspers.com" target="_blank" rel="noopener noreferrer">
                    <FaBluesky />
                </a>
                <a href="https://linkedin.com/in/nielsjasperss" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                {/*
                <a href="https://x.com/_nielsjaspers" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter />
                </a>
                */}
                <a href="mailto:zakelijk@nielsjaspers.com">
                    <FaEnvelope />
                </a>
            </div>
        </section>
    );
}

export default Contact;


