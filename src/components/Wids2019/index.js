import React from 'react';
import './wids2019.css';

import Header from '../Header';
import Footer from '../Footer';
import Schedule from '../Schedule';
import Carousel from '../Carousel';
import Participation from '../Participation';

import '../../assets/lib/bulma.css';
import divisor from '../../assets/img/site-divisor-svg.svg';
import poster from '../../assets/img/img-conferencia.png';

const Wids2019 = () => (
  <div>
    <Header poster={poster} />
    <h1>WiDS 2019</h1>
    <img className="divisor" src={divisor} alt="Formas geométricas" />
    <p>Texto</p>
    <h2>Programação</h2>
    <Schedule />
    <Participation audience="XXXX" speaker="YYYY"/>
    <Carousel />
    <Footer />
  </div>
);

export default Wids2019;
