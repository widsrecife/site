import React from 'react';
import './app.css';

import Header from '../Header'
import NextEvents from '../NextEvents';

import 'bulma/css/bulma.css'
import divisor from '../../assets/img/site-divisor-svg.svg'

const App = () => (
  <div className="container">
    <Header />
    <img class="divisor"src={divisor}></img>
    <NextEvents />
  </div>
)

export default App;
