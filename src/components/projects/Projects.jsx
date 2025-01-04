import React from 'react'
import './projects.css'
import data from '../../data/data.json';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const languageClasses = {
    react: "react-style",
    java: "java-style",
    javascript: "javascript-style",
    html: "html-style",
    css: "css-style",
    "spring boot": "spring_boot-style",
    "spring security": "spring_security-style",
    "ruby on rails": "ruby-on-rails-style",
};

function Projects() {
    const [isVisible, elementRef] = useScrollAnimation();
    return (
        <div id='projects' className='container'>
            <div className={`container-cards effectScroll ${isVisible ? 'visible' : ''}`} ref={elementRef}>
                <h2>Pojects</h2>
                {data.map((item, index) => (
                    <div key={index} className="project-card">
                        <div>
                            <iframe src={item.dominio} frameborder="0" style={{ width: '600px', height: '450px', borderRadius: '10px', objectFit: 'cover' }} ></iframe>
                            {/* <iframe
                                src=
                                title={item.title}
                                style="width: 100%; height: 500px; border: none;"
                                loading="lazy"
                            ></iframe> */}
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
                                <a href="{item.linkGit}"><i class="fa-brands fa-github"></i>  Git hub</a>
                                <a href="{item.linkGit}"><i class="fa-solid fa-globe"></i>  Web page</a>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Projects