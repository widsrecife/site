import React from 'react';
import './nav.css';

import divisor from '../../assets/img/site-divisor-svg.svg'

const Nav = () => (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="true" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>                
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link" href="#">Sobre</a>
                    <div className="navbar-dropdown">
                        <a className="navbar-item" href="#">Código de Conduta</a>
                        <a className="navbar-item" href="#">Contato</a>
                    </div>
                </div>
                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link" href="#">Conferência</a>
                    <div className="navbar-dropdown">
                        <a className="navbar-item" href="#">WiDS 2019</a>
                        <a className="navbar-item" href="#">WiDS 2018</a>
                        <a className="navbar-item" href="#">WiDS 2017</a>
                        
                    </div>
                </div>
                <a className="navbar-item" href="#">Meetups</a>
                <a className="navbar-item" href="#">Dathaton</a>
                <a className="navbar-item" href="#">Blog</a>
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                    <img src={divisor} />
                </div>
            </div>
        </div>
    </nav>
);

export default Nav;