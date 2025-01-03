import React from 'react'
import './header.css'

function Header() {
    return (
        <header className="header">
            <nav className="header__nav">
                <div>
                    <ul className="header__menu">
                        <p>copy right</p>
                    </ul>
                </div>
                <div>
                    <ul className="header__menu">
                        <li><a href="#home">Inicio</a></li>
                        <li><a href="#about">Acerca</a></li>
                        <li><a href="#services">Servicios</a></li>
                    </ul>

                </div>
            </nav>

        </header>
    )
}

export default Header