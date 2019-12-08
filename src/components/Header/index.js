import React from 'react';
import './header.css';
import Nav from '../Nav';

import poster from '../../assets/img/poster-home4.jpg'


const Header = () => (
    <header className="header">
        <Nav />
        <img className="header__poster" src={poster} alt="" />
        <section className="header__text">
            <p>
                WiDS (regional event name) is an independent event organized by [name of Ambassador(s) or Ambassador organization] to 
                coincide with the annual Global Women in Data Science (WiDS) Conference held at Stanford University and an estimated 150+ 
                locations worldwide. All genders are invited to attend WiDS regional events, which features outstanding women doing outstanding
                work.
            </p>
            <p>
                The Global WiDS Conference aims to inspire and educate data scientists worldwide, regardless of gender, and to support women 
                in the field. This one-day technical conference provides an opportunity to hear about the latest data science related research and 
                applications in a number of domains, and connect with others in the field.
            </p>
        </section>
    </header>
);

export default Header;