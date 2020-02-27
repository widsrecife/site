import React from 'react';
import './app.css';

import NextEvents from '../NextEvents';
import Footer from '../Footer';
import About from '../About';

import '../../assets/lib/bulma.css';
import divisor from '../../assets/img/site-divisor-svg.svg';

const App = () => (
  <div className="container-default" id="index">
    <About />
    <img className="divisor" src={divisor} alt="Formas geométricas" />
    <NextEvents />
    
    <Footer />
  </div>
)

export default App;
