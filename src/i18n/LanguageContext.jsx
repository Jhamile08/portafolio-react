import { createContext, useContext, useEffect, useState } from 'react';
import { translations } from './translations';

const STORAGE_KEY = 'portafolio-language';
const DEFAULT_LANGUAGE = 'en';

const LanguageContext = createContext(null);

function getInitialLanguage() {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved && translations[saved] ? saved : DEFAULT_LANGUAGE;
}

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(getInitialLanguage);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, language);
        document.documentElement.lang = language;
    }, [language]);

    const value = {
        language,
        setLanguage,
        t: translations[language],
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used inside a LanguageProvider');
    }
    return context;
}
