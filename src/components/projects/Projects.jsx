import React from 'react'
import './projects.css'
import data from '../../data/data.json';

const languageClasses = {
    react: "react-style",
    java: "java-style",
    javascript: "javascript-style",
};

function Projects() {
    return (
        <div className='container'>
            <div className="container-cards">
                <h2>Pojects</h2>
                {data.map((item, index) => (
                    <div key={index} className="project-card">
                        <div>
                            <img src={item.img} alt={item.title} style={{ width: '500px', height: '300px', borderRadius: '10px' }} />

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