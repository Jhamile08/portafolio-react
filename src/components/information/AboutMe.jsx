import './aboutMe.css'
import UseScrollAnimation from '../../hooks/useScrollAnimation';
import { useLanguage } from '../../i18n/LanguageContext';

// Convierte el texto marcado con **...** en fragmentos resaltados
function renderHighlights(text) {
    return text.split("**").map((fragment, index) => (
        index % 2 === 1
            ? <span key={index} className="highlight">{fragment}</span>
            : fragment
    ));
}

function aboutMe() {
    const [isVisible, elementRef] = UseScrollAnimation();
    const { t } = useLanguage();
    return (
        <div id='about-me' className='container-information'>
            <div className={`content-information ${isVisible ? 'visible' : ''}`}
                ref={elementRef}>
                <div className='image'>
                    <img src="/photos/rainbow-high-quality-4k-ultra-hd-hdr-free-photo.jpg" alt="" className="fade-in-image" />
                    <p className='image-name'>Andrea Dominguez</p>
                    <p className='image-role'>{t.aboutMe.role}</p>
                </div>
                <div className='content-text'>
                    <h2 className='title-information'>{t.aboutMe.title}</h2>
                    {t.aboutMe.text.map((paragraph, index) => (
                        <p key={index}>{renderHighlights(paragraph)}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default aboutMe
