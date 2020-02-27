import React from 'react';
import './footer.css';
import banner from '../../assets/img/wids-banner-grey.svg';
import cc from '../../assets/img/cc.png';
import email from '../../assets/img/email.svg';
import github from '../../assets/img/github.svg';
import instagram from '../../assets/img/instagram.svg';
import twitter from '../../assets/img/twitter.svg';


const Footer = () => (
    <section className="footer-default">
        <img className="banner" src={banner} alt="WiDS Banner" />
        <div className="footer-left">
            <img className="cc" src={cc} alt="CC" />
            <h2>2019 Women in Data Science Recife</h2>
        </div>
        <div className="footer-right">
            <img className="email" src={email} alt="Ícone E-mail" />
            <img className="github" src={github} alt="Ícone Github" />
            <img className="instagram" src={instagram} alt="Ícone Instagram" />
            <img className="twitter" src={twitter} alt="Ícone Twitter" />
        </div>
    </section>
);

export default Footer;