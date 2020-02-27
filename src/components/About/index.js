import React from 'react';
import './about.css';

import Header from '../Header'
import poster from '../../assets/img/poster-home.png';


const About = () => (
    <section>
        <Header poster={poster} />
        <div className="about">
            <p className="about-text">
                WiDS (regional event name) is an independent event organized by [name of Ambassador(s) or Ambassador organization] to 
                coincide with the annual Global Women in Data Science (WiDS) Conference held at Stanford University and an estimated 150+ 
                locations worldwide. All genders are invited to attend WiDS regional events, which features outstanding women doing outstanding
                work.
            </p>
            <p className="about-text">
                The Global WiDS Conference aims to inspire and educate data scientists worldwide, regardless of gender, and to support women 
                in the field. This one-day technical conference provides an opportunity to hear about the latest data science related research and 
                applications in a number of domains, and connect with others in the field.
            </p>

        </div>
    </section>
);

export default About;