import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Img/Logo.png';
import './Menu.css';
import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <header>
            <nav className="Menu">
                <Link to="/">
                    <img src={Logo} className="Logo" alt="HigorFlix logo" />
                </Link>

                <ButtonLink as={Link} className="ButtonLink" to="/cadastro/video">
                    Novo vídeo
                </ButtonLink>
            </nav>
        </header>
    );
}

export default Menu;