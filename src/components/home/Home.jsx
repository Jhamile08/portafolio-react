import React, { useEffect, useState } from "react";
import './home.css'
import Header from '../header/Header.jsx'

const userAgent = navigator.userAgent;


function Home() {

    const [lastLogin, setLastLogin] = useState("");

    useEffect(() => {
        // Obtener fecha y hora actuales
        const now = new Date();
        const formattedDate = now.toLocaleString("en-US", {
            weekday: "short", // Ej: Thu
            month: "short",   // Ej: Jan
            day: "2-digit",   // Ej: 02
            year: "numeric",  // Ej: 2025
            hour: "2-digit",  // Ej: 17
            minute: "2-digit", // Ej: 11
            second: "2-digit", // Ej: 58
        });

        setLastLogin(formattedDate);
    }, []);

    return (
        <div className='container-home'>
            <Header />
            <div className='content-home'>
                <div className="wrapper">
                    <div className="typing-demo">Isasasaselive in using techology for a improve</div>
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