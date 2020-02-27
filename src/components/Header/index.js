import React from 'react';
import './header.css';
import Nav from '../Nav';

const Header = (props) => (
    <header className="header-default">
        <Nav />
        <img className="header__poster" src={props.poster} alt="Banner WiDS" />
    </header>
);

export default Header;