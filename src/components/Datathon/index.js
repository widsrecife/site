import React from 'react';
import './datathon.css';

import Header from '../Header';
import Footer from '../Footer';
import InviteTalk from '../InviteTalk';

import '../../assets/lib/bulma.css';
import divisor from '../../assets/img/site-divisor-svg.svg';
import poster from '../../assets/img/img-datathon.png';

const Datathon = () => (
  <div className="container">
    <Header poster={poster} />
    <h1>Datathon</h1>
    <img className="divisor" src={divisor} alt="Formas geométricas" />
    <p>Escreva aqui</p>
    <InviteTalk />
    <Footer />
  </div>
)

export default Datathon;
