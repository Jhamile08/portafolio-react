import React from 'react'
import { Link } from "react-scroll";
import './header.css'

function Header(className) {
    return (
        <header className="header">
            <nav className="header__nav">
                <div>
                    <ul className="header__menu">
                        <p>copy right</p>
                    </ul>
                </div>
                <div>
                    <ul className={`header__menu ${className}`}>
                        <Link to="about-me" smooth={true} duration={500}>
                            About me
                        </Link>
                        <Link to="projects" smooth={true} duration={500}>
                            projects
                        </Link>
                        <Link to="contact" smooth={true} duration={500}>
                            contact
                        </Link>
                    </ul>
                </div>
            </nav>

        </header>
    )
}

export default Header