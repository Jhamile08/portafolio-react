import './aboutMe.css'
import UseScrollAnimation from '../../hooks/useScrollAnimation';

function aboutMe() {
    const [isVisible, elementRef] = UseScrollAnimation();
    return (
        <div id='about-me' className='container-information'>
            <div className={`content-information ${isVisible ? 'visible' : ''}`}
                ref={elementRef}>
                <div className='image'>
                    <img src="/photos/rainbow-high-quality-4k-ultra-hd-hdr-free-photo.jpg" alt="" className="fade-in-image" />
                    <p>Andrea Dominguez</p>
                    <p>Fullstack junior developer</p>
                </div>
                <div className='content-text'>
                    <p>So, we made our computers look more like our world, to make their immense power accessible to everyone.</p>
                </div>
            </div>
        </div>
    )
}

export default aboutMe