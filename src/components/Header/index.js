import React from 'react';
import './header.css';
import Nav from '../Nav';

const Header = (props) => (
    <header className="header">
        <Nav />
        <img className="header__poster" src={props.poster} alt="" />
    </header>
);

export default Header;