import './aboutMe.css'
import UseScrollAnimation from '../../hooks/useScrollAnimation';
import { useLanguage } from '../../i18n/LanguageContext';
import programacion from '../../assets/programacion.png';

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
                    <img src={programacion} alt="" className="fade-in-image" />
                    <p className='image-name'>Andrea Dominguez</p>
                    <p className='image-role'>{t.aboutMe.role}</p>
                </div>
                <div className='content-text'>
                    <h2 className='title-information'>{t.aboutMe.title}</h2>
                    {t.aboutMe.text.map((paragraph, index) => (
                        <p key={index}>{renderHighlights(paragraph)}</p>
                    ))}
                    <div className="about-social-links">
                        <a className="about-social-button about-social-github" href="https://github.com/Jhamile08" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M12 .75a11.25 11.25 0 0 0-3.558 21.922c.563.104.77-.244.77-.542 0-.267-.01-.975-.016-1.913-3.13.68-3.79-1.508-3.79-1.508-.512-1.3-1.25-1.646-1.25-1.646-1.022-.699.078-.685.078-.685 1.13.08 1.725 1.16 1.725 1.16 1.005 1.723 2.636 1.225 3.278.937.102-.728.393-1.225.715-1.507-2.499-.285-5.126-1.25-5.126-5.565 0-1.23.44-2.235 1.16-3.023-.116-.285-.503-1.43.11-2.98 0 0 .945-.303 3.094 1.155a10.8 10.8 0 0 1 5.625 0c2.148-1.458 3.092-1.155 3.092-1.155.614 1.55.227 2.695.112 2.98.72.788 1.158 1.793 1.158 3.023 0 4.326-2.631 5.277-5.138 5.555.404.349.764 1.039.764 2.094 0 1.512-.014 2.732-.014 3.103 0 .3.203.65.774.54A11.25 11.25 0 0 0 12 .75Z" />
                            </svg>
                            <span>GitHub</span>
                        </a>
                        <a className="about-social-button about-social-linkedin" href="https://www.linkedin.com/in/andrea-dominguez-ab56bb25a/" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.39-.74 1.36-1.52 2.79-1.52 2.99 0 3.58 1.97 3.58 4.53v5.24Z" />
                            </svg>
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default aboutMe
