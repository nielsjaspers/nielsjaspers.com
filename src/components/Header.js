import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaCircle } from 'react-icons/fa';
import './Header.css';

function Header() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const isBlogPage = location.pathname === '/blogs';

    return (
        <header>
            <nav>
                <div className="nav-links">
                    <ul>
                        <li><Link to="/" className={isHomePage ? 'active' : 'inactive'}>/home</Link></li>
                        {isHomePage && (
                            <>
                                <li><a className='sub' href="#about">./about</a></li>
                                <li><a className='sub' href="#projects">./projects</a></li>
                                <li><a className='sub' href="#contact">./contact</a></li>
                            </>
                        )}
                        <FaCircle className='separator' />
                        <li><Link to="/blogs" className={isBlogPage ? 'active' : 'inactive'}>/blogs</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;

