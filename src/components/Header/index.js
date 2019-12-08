import React from 'react';
import './header.css';
import Nav from '../Nav';
import About from '../About';


const Header = () => (
    <header className="header">
        <Nav />
        <img className="header__poster" src={this.props.poster} alt="" />
        <About />
    </header>
);

export default Header;