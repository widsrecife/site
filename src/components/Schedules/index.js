import React from 'react';
import './schedule.css';

import Header from '../Header'
import poster from '../../assets/img/img-conferencia.png';

import divisor from '../../assets/img/site-divisor-svg.svg';
import schedules from './Schedules.json';
import SchedulesDetail from '../ScheduleDetail';

import audience from '../../assets/img/audience.svg';
import speakers from '../../assets/img/speaker.svg';
import sponsor from '../../assets/img/image.png';

const Schedules = () => (
    <section className="schedule">
        <Header poster={poster} />

        <h1 className="schedule__title">WiDS 2019</h1>
        <img className="divisor" src={divisor} alt="Formas geométricas" />
        <p className="schedule__text">Em 2019 a edição do Women in Data Science Recife ocorreu em 16 de março na ThoughtWorks Recife, organizado pela embaixadora Talitha Medeiros e coembaixadora Deborah Mesquita. Foram no total XXX participantes e XXX palestrantes.</p>
        <div className="space"></div>

        <h1 className="schedule__subtitle">Programação</h1>

        <ul className="schedule__detail">
            {schedules.schedules2019.map(sche => <li><SchedulesDetail data={sche} /></li>)}
        </ul>

        <div className="schedule__center">
            <div className="schedule__center-item">
                <img className="schedule__center-img" src={audience} alt="Participantes" />
                <h2 className="schedule__center-item-title">100 <span className="schedule__center-item-title-color">participantes</span></h2>
            </div>

            <div className="schedule__center-item">
                <img className="schedule__center-img" src={speakers} alt="Palestrantes" />
                <h2 className="schedule__center-item-title">10 <span className="schedule__center-item-title-color">palestrantes</span></h2>
            </div>
        </div>

        <h1 className="schedule__title">Apoiadoras</h1>
        <img className="divisor" src={divisor} alt="Formas geométricas" />
        <div className="space"></div>

        <div className="schedule__sponsor">
            <div className="schedule__sponsor-row">
                <img className="schedule__sponsor-img" src={sponsor} alt="" />
                <img className="schedule__sponsor-img" src={sponsor} alt="" />
                <img className="schedule__sponsor-img" src={sponsor} alt="" />
            </div>

            <div className="schedule__sponsor-row">
                <img className="schedule__sponsor-img" src={sponsor} alt="" />
                <img className="schedule__sponsor-img" src={sponsor} alt="" />
                <img className="schedule__sponsor-img" src={sponsor} alt="" />
            </div>

            <div className="schedule__sponsor-row">
                <img className="schedule__sponsor-img" src={sponsor} alt="" />
                <img className="schedule__sponsor-img" src={sponsor} alt="" />
                <img className="schedule__sponsor-img" src={sponsor} alt="" />
            </div>
        </div>


    </section>
);

export default Schedules;