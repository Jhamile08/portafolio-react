import React from 'react'
import './aboutMe.css'

function aboutMe() {
    return (
        <div className='container-information'>
            <div className='image'>
                <img src="/public/rainbow-high-quality-4k-ultra-hd-hdr-free-photo.jpg" alt="" style={{ width: '600px', height: 'auto', borderRadius: '10px' }} />
                <p>Andrea Dominguez</p>
                <p>Fullstack junior developer</p>
            </div>
            <div className='content-text'>
                <p>So, we made our computers look more like our world, to make their immense power accessible to everyone.</p>
            </div>
        </div>
    )
}

export default aboutMe