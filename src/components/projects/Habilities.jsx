import React from 'react'
import './projects.css'
import useScrollAnimation from '../../hooks/useScrollAnimation';

function habilities() {
    const [isVisible, elementRef] = useScrollAnimation();
    return (
        <div className='container-habilities'>
            <div className={`content-habilities effectScroll ${isVisible ? 'visible' : ''}`} ref={elementRef}>
                <img src="/photos/html.png" alt="" />
                <img src="/photos/css-3.png" alt="" />
                <img src="/photos/java-script.png" alt="" />
                <img src="/photos/java.png" alt="" />
                <img src="/photos/sql-server.png" alt="" />
                <img src="/photos/jewelry.png" alt="" />
                <img src="/photos/science.png" alt="" />
                <img src="/photos/social(1).png" alt="" />
                <img src="/photos/jira.png" alt="" />
                <img src="/photos/azure.png" alt="" />
                <img src="/photos/social.png" alt="" />
                <img src="/photos/united-kingdom(1).png" alt="" />

            </div>
        </div>
    )
}

export default habilities