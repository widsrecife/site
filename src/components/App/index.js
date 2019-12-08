import React from 'react';
import './app.css';

import Header from '../Header'
import NextEvents from '../NextEvents';
import Footer from '../Footer';

import '../../assets/lib/bulma.css'
import divisor from '../../assets/img/site-divisor-svg.svg'

const App = () => (
  <div className="container">
    <Header />
    <img className="divisor" src={divisor} alt="Formas geométricas" />
    <NextEvents />
    <Footer />
  </div>
)

export default App;
