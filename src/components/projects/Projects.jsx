import { useState } from 'react';
import './projects.css'
import data from '../../data/data.json';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const languageClasses = {
    react: "react-style",
    java: "java-style",
    javascript: "javascript-style",
    html: "html-style",
    css: "css-style",
    wordpress: "wordpress-style",
    "spring boot": "spring_boot-style",
    "spring security": "spring_security-style",
    "ruby on rails": "ruby-on-rails-style",

};

const backendLanguages = ["java", "ruby on rails", "typescript"];

const filters = [
    { id: "all", label: "Todos" },
    { id: "fullstack", label: "Full stack" },
    { id: "landing", label: "Landing pages" },
    { id: "wordpress", label: "WordPress" },
];

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
    const visibleProjects = data.filter((item) => matchesFilter(item, activeFilter));

    return (
        <div id='projects' className='container'>
            <h2>Projects</h2>
            <div className='project-filters'>
                {filters.map((filter) => (
                    <button
                        key={filter.id}
                        type='button'
                        className={`filter-button ${activeFilter === filter.id ? "active" : ""}`}
                        onClick={() => setActiveFilter(filter.id)}
                    >{filter.label}</button>
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
                                <p>{item.description}</p>
                            </div>
                            <div className='social-link'>
                                <a href={item.linkGit} target='blank'><i className="fa-brands fa-github"></i>  Git hub</a>
                                <a href={item.linkWeb} target='blank'><i className="fa-solid fa-globe"></i>  Web page</a>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Projects
