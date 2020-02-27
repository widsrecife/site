import React from 'react';
import './meetups.css';

import Header from '../Header';

import '../../assets/lib/bulma.css';
import divisor from '../../assets/img/site-divisor-svg.svg';
import poster from '../../assets/img/img-meetup.png';

import meetups from '../MeetupDetail/Meetups.json'
import MeetupDetail from '../MeetupDetail';

const Meetups = () => (
  <div className="meetups">
    <Header poster={poster} />
    <h1 className="meetups__title">Meetups</h1>
    <img className="divisor" src={divisor} alt="Formas geométricas" />

    <ul>
        {meetups.meetups.map(meet => <li className="meetups__card"><MeetupDetail data={meet} /></li>)}
    </ul>
  </div>
);

export default Meetups;
