import React, { useState } from 'react';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import './Home.css'

function Home() {
    const [language, setLanguage] = useState('en');

    const onLanguageChange = () => {
        setLanguage(language === 'en' ? 'nl' : 'en');
    };

    return (
        <div>
            <div className="language-toggle">
                <button
                    onClick={onLanguageChange}
                    className={`toggle-button ${language === 'nl' ? 'active' : ''}`}
                >
                    {language === 'en' ? 'NL' : 'EN'}
                </button>
            </div>

            <About language={language} />
            <Projects language={language} />
            <Contact language={language} />
        </div>
    );
}

export default Home;

