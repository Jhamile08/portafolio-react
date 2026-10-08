import './aboutMe.css'
import UseScrollAnimation from '../../hooks/useScrollAnimation';
import { useLanguage } from '../../i18n/LanguageContext';

function aboutMe() {
    const [isVisible, elementRef] = UseScrollAnimation();
    const { t } = useLanguage();
    return (
        <div id='about-me' className='container-information'>
            <div className={`content-information ${isVisible ? 'visible' : ''}`}
                ref={elementRef}>
                <div className='image'>
                    <img src="/photos/rainbow-high-quality-4k-ultra-hd-hdr-free-photo.jpg" alt="" className="fade-in-image" />
                    <p>Andrea Dominguez</p>
                    <p>{t.aboutMe.role}</p>
                </div>
                <div className='content-text'>
                    <p>{t.aboutMe.text}</p>
                </div>
            </div>
        </div>
    )
}

export default aboutMe