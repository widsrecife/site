import React from 'react';
import './meetups.css';

import Header from '../Header';
import Footer from '../Footer';
import Event from '../Event';

import '../../assets/lib/bulma.css';
import divisor from '../../assets/img/site-divisor-svg.svg';
import poster from '../../assets/img/img-meetup.png';

const Meetups = () => (
  <div className="container">
    <Header poster={poster} />
    <h1>Meetups</h1>
    <img className="divisor" src={divisor} alt="Formas geométricas" />
    <Event />
    <Footer />
  </div>
);

export default Meetups;
