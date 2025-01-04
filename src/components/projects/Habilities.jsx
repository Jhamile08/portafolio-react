import React from 'react'
import './projects.css'
import useScrollAnimation from '../../hooks/useScrollAnimation';

function habilities() {
    const [isVisible, elementRef] = useScrollAnimation();
    return (
        <div className='container-habilities'>
            <div className={`content-habilities effectScroll ${isVisible ? 'visible' : ''}`} ref={elementRef}>
                <img src="/public/photos/html.png" alt="" />
                <img src="/public/photos/css-3.png" alt="" />
                <img src="/public/photos/java-script.png" alt="" />
                <img src="/public/photos/java.png" alt="" />
                <img src="/public/photos/sql-server.png" alt="" />
                <img src="/public/photos/jewelry.png" alt="" />
                <img src="/public/photos/science.png" alt="" />
                <img src="/public/photos/social(1).png" alt="" />
                <img src="/public/photos/jira.png" alt="" />
                <img src="/public/photos/azure.png" alt="" />
                <img src="/public/photos/social.png" alt="" />
                <img src="/public/photos/united-kingdom(1).png" alt="" />

            </div>
        </div>
    )
}

export default habilities