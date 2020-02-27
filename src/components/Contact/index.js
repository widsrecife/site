import React from 'react';
import './contact.css';

import Header from '../Header';
import InviteTalk from '../InviteTalk';
import Footer from '../Footer';

import '../../assets/lib/bulma.css';
import divisor from '../../assets/img/site-divisor-svg.svg';
import poster from '../../assets/img/img-contato.png';

const Contact = () => (
  <div className="contact">
    <Header poster={poster} />
    <h1 className="contact__title">Contato</h1>
    <img className="divisor" src={divisor} alt="Formas geométricas" />
    <p className="contact__text">Que massa que você quer falar com a gente. Existem algumas maneiras: Instagram, Twitter, Facebook, E-mail ou preenchendo o formulário abaixo.</p>
    <div className="space"></div>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeOCDFVAR5xVcyZRx2PIeYVYc5f1YSy8lIIjG4Ywp1eXjEOAA/viewform?embedded=true" width="640" height="812" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
  </div>
)

export default Contact;
