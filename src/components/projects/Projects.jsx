import { useState } from 'react';
import './projects.css'
import data from '../../data/data.json';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { useLanguage } from '../../i18n/LanguageContext';

const languageClasses = {
    react: "react-style",
    java: "java-style",
    javascript: "javascript-style",
    html: "html-style",
    css: "css-style",
    typescript: "typescript-style",
    wordpress: "wordpress-style",
    "spring boot": "spring_boot-style",
    "spring security": "spring_security-style",
    "ruby on rails": "ruby-on-rails-style",

};

const backendLanguages = ["java", "ruby on rails"];

const filters = ["all", "fullstack", "landing", "wordpress"];

function matchesFilter(item, filter) {
    const lenguages = item.lenguages.map((language) => language.toLowerCase());
    const hasReact = lenguages.includes("react");
    const hasBackend = lenguages.some((language) => backendLanguages.includes(language));

    if (filter === "fullstack") return hasReact && hasBackend;
    if (filter === "landing") return hasReact && !hasBackend;
    if (filter === "wordpress") return lenguages.includes("wordpress");
    return true;
}

function Projects() {
    const [isVisible, elementRef] = useScrollAnimation();
    const [activeFilter, setActiveFilter] = useState("all");
    const { language, t } = useLanguage();
    const visibleProjects = data.filter((item) => matchesFilter(item, activeFilter));

    return (
        <div id='projects' className='container'>
            <h2>{t.projects.title}</h2>
            <div className='project-filters'>
                {filters.map((filter) => (
                    <button
                        key={filter}
                        type='button'
                        className={`filter-button ${activeFilter === filter ? "active" : ""}`}
                        onClick={() => setActiveFilter(filter)}
                    >{t.projects.filters[filter]}</button>
                ))}
            </div>
            <div className={`container-cards`} ref={elementRef}>
                {visibleProjects.map((item, index) => (
                    <div key={index} className="project-card">
                        <div>
                            <iframe className='iframe' src={item.dominio} frameBorder="0" ></iframe>
                        </div>
                        <div className='content-card'>
                            <h3>{item.title}</h3>
                            <div>
                                <ul>
                                    {item.lenguages.map((language, langIndex) => (
                                        <li
                                            key={langIndex}
                                            className={`lenguagues ${languageClasses[language.toLowerCase()] || ""}`}
                                        >{language}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='description'>
                                <p>{item.description[language]}</p>
                            </div>
                            <div className='social-link'>
                                <a href={item.linkGit} target='blank'><i className="fa-brands fa-github"></i>  {t.projects.github}</a>
                                <a href={item.linkWeb} target='blank'><i className="fa-solid fa-globe"></i>  {t.projects.web}</a>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Projects
