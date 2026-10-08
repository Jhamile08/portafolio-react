import { useEffect, useState } from "react";
import './home.css'
import Header from '../header/Header.jsx'
import { useLanguage } from '../../i18n/LanguageContext';
import { locales } from '../../i18n/translations';

const userAgent = navigator.userAgent;


function Home() {

    const { language, t } = useLanguage();
    const [lastLogin, setLastLogin] = useState("");

    useEffect(() => {
        // Obtener fecha y hora actuales
        const now = new Date();
        const formattedDate = now.toLocaleString(locales[language], {
            weekday: "short", // Ej: Thu
            month: "short",   // Ej: Jan
            day: "2-digit",   // Ej: 02
            year: "numeric",  // Ej: 2025
            hour: "2-digit",  // Ej: 17
            minute: "2-digit", // Ej: 11
            second: "2-digit", // Ej: 58
        });

        setLastLogin(formattedDate);
    }, [language]);

    return (
        <div className='container-home'>
            <Header />
            <div className='content-home'>
                <div className="wrapper">
                    <div className="typing-demo">{t.home.welcome}</div>
                </div>
                <div>
                    <p>{lastLogin}</p>
                    <p>{userAgent}</p>
                </div>
            </div>
        </div>
    )
}

export default Home