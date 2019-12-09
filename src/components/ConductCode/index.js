import React from 'react';
import './conductCode.css';

import Header from '../Header';
import Footer from '../Footer';

import '../../assets/lib/bulma.css';
import divisor from '../../assets/img/site-divisor-svg.svg';
import poster from '../../assets/img/img-cond-conduta.png';

const ConductCode = () => (
  <div className="container">
    <Header poster={poster} />
    <h1>Código de Conduta</h1>
    <img className="divisor" src={divisor} alt="Formas geométricas" />
    <p>Escreva aqui</p>
    <Footer />
  </div>
)

export default ConductCode;
