import React from "react";
import './Sidebar.css';
import logoSpotify from '../assets/icons/logo-spotify.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faGlobe, faBook, faPlus } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="sidebar">
        <nav className="sidebar-navigation">
            <div className="logo">
                <a href="">
                    <img src={logoSpotify} alt=""/>
                </a>
            </div>
            <ul>
                <li>
                    <a href="">
                        <span><FontAwesomeIcon icon={faHome}/></span>
                        <span>Início</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span><FontAwesomeIcon icon={faSearch}/></span>
                        <span>Buscar</span>
                    </a>
                </li>
            </ul>
        </nav>

        <div className="library">
            <div className="library-content">
                <button className="library-button">
                    <span><FontAwesomeIcon icon={faBook}/></span>
                    <span>Sua biblioteca</span>
                </button>
                <span className="fa fa-plus"></span>
            </div>

            <section className="section-playlist">
                <div className="section-playlist-content">
                    <span className="text title">
                        Crie sua primeira playlist.
                    </span>
                    <span className="text subtitle">
                        É fácil, vamos te ajudar.
                    </span>
                    <button className="section-playlist-button">
                        <span>Criar playlist</span>
                    </button>
                </div>
            </section>

            <div className="cookies">
                <a href="">Cookies</a>
            </div>

            <div className="languages">
                <button className="languages-button">
                    <span className="fa fa-globe"></span>
                    <span>Português do Brasil</span>
                </button>
            </div>
        </div>
    </div>
    )
}

export default Sidebar;