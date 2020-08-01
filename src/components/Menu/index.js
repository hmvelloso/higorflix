import React from 'react'
import Logo from '../../assets/Img/Logo.png';
import './Menu.css'
import ButtonLink from './components/ButtonLink'

function Menu() {
    return (
        <header>
            <nav className="Menu">
                <a href="/">
                    <img src={Logo} className="Logo" alt="HigorFlix logo" />
                </a>

                <ButtonLink className="ButtonLink" href="/">
                    Novo vídeo
                </ButtonLink>
            </nav>
        </header>
    );
}

export default Menu;