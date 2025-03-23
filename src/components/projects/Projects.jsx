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
                <h2>Projects</h2>
                {data.map((item, index) => (
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