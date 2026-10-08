import React from 'react'
import { Link } from "react-scroll";
import './header.css'
import { useLanguage } from '../../i18n/LanguageContext';

const languageOptions = [
    { id: "es", label: "ES" },
    { id: "en", label: "EN" },
];

function Header({ className = "" }) {
    const { language, setLanguage, t } = useLanguage();

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
                            {t.nav.aboutMe}
                        </Link>
                        <Link to="projects" smooth={true} duration={500}>
                            {t.nav.projects}
                        </Link>
                        <Link to="contact" smooth={true} duration={500}>
                            {t.nav.contact}
                        </Link>
                        <li className="language-switch">
                            {languageOptions.map((option) => (
                                <button
                                    key={option.id}
                                    type="button"
                                    className={`language-button ${language === option.id ? "active" : ""}`}
                                    onClick={() => setLanguage(option.id)}
                                    aria-pressed={language === option.id}
                                >{option.label}</button>
                            ))}
                        </li>
                    </ul>
                </div>
            </nav>

        </header>
    )
}

export default Header
