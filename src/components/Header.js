import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header({ onLanguageChange, language }) {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <header>
            <nav>
                <div className="nav-links">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        {isHomePage && (
                            <>
                                <li><a href="#about">About</a></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </>
                        )}
                        <li><Link to="/blogs">Blogs</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;

