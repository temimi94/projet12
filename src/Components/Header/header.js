import React from 'react'
import logo from '../../Images/logo.png'
import './header.css'


//integration of the Header
function Header() {
    return (
        <div>
            <div className="container-header">
                <div className="sportsee-logo">
                    <img src={logo} alt="SportSee" />
                </div>
                <nav className="nav-item-list">
                    <ul>
                        <li>
                            <a href="#">Accueil</a>
                        </li>

                        <li>
                            <a href="#">Profil</a>
                        </li>

                        <li>
                            <a href="#">Réglage</a>
                        </li>

                        <li>
                            <a href="#">Communauté</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}


export default Header
