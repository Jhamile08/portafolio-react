import React from 'react'
import './projects.css'
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { useLanguage } from '../../i18n/LanguageContext';

function habilities() {
    const [isVisible, elementRef] = useScrollAnimation();
    const { t } = useLanguage();
    return (
        <div className='container-habilities'>
            <h1 >{t.habilities.title}</h1>
            <div className={`content-habilities effectScroll ${isVisible ? 'visible' : ''}`} ref={elementRef}>
                <div className="skill-item">
                    <img src="/photos/html.png" alt="" />
                    <span>HTML</span>
                </div>
                <div className="skill-item">
                    <img src="/photos/css-3.png" alt="" />
                    <span>CSS</span>
                </div>
                <div className="skill-item">
                    <img src="/photos/java-script.png" alt="" />
                    <span>JavaScript</span>
                </div>
                <div className="skill-item">
                    <img src="/photos/java.png" alt="" />
                    <span>Java</span>
                </div>
                <div className="skill-item">
                    <img src="/photos/sql-server.png" alt="" />
                    <span>SQL Server</span>
                </div>
                <div className="skill-item">
                    <img src="/photos/jewelry.png" alt="" />
                    <span>Ruby</span>
                </div>
                <div className="skill-item">
                    <img src="/photos/science.png" alt="" />
                    <span>React</span>
                </div>
                <div className="skill-item">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="" />
                    <span>TypeScript</span>
                </div>
                <div className="skill-item">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="" />
                    <span>Node.js</span>
                </div>
                <div className="skill-item">
                    <img src="/photos/social(1).png" alt="" />
                    <span>Git</span>
                </div>
                <div className="skill-item">
                    <img src="/photos/jira.png" alt="" />
                    <span>Jira</span>
                </div>
                <div className="skill-item">
                    <img src="/photos/azure.png" alt="" />
                    <span>Azure</span>
                </div>
                <div className="skill-item">
                    <img src="/photos/social.png" alt="" />
                    <span>Docker</span>
                </div>
                <div className="skill-item">
                    <img src="/photos/united-kingdom(1).png" alt="" />
                    <span>English B1</span>
                </div>
            </div>
        </div>
    )
}

export default habilities