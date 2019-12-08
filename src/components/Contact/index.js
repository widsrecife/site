import React from 'react';
import './contact.css';

import Header from '../Header';
import InviteTalk from '../InviteTalk';
import Footer from '../Footer';

import '../../assets/lib/bulma.css'
import divisor from '../../assets/img/site-divisor-svg.svg'
import poster from '../../assets/img/img-contato.png'

const ConductCode = () => (
  <div className="container">
    <Header poster={poster} />
    <h1>Contato</h1>
    <img className="divisor" src={divisor} alt="Formas geométricas" />
    <p>Escreva aqui</p>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeOCDFVAR5xVcyZRx2PIeYVYc5f1YSy8lIIjG4Ywp1eXjEOAA/viewform?embedded=true" width="640" height="812" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
    <InviteTalk />
    <Footer />
  </div>
)

export default Contact;
