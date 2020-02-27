import React from 'react';
import './app.css';

import NextEvents from '../NextEvents';
import Footer from '../Footer';
import About from '../About';
import Contact from '../Contact';

import '../../assets/lib/bulma.css';
import divisor from '../../assets/img/site-divisor-svg.svg';

const App = () => (
  <div className="container-default" id="index">
    {/* <About />
    <img className="divisor" src={divisor} alt="Formas geométricas" />
    <NextEvents />
     */}

     <Contact />

    <Footer />
  </div>
)

export default App;
