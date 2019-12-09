import React from 'react';
import './participation.css';
import speaker from '../../assets/img/speaker.svg';
import audience from '../../assets/img/audience.svg';

const Participation = (props) => (
    <div className="participation">
        <div className="participation__module">
            <img className="icon" src={audience} alt="Três icones femininos" />
            <p><strong>{props.audience}</strong></p>
            <p><strong>participantes</strong></p>
        </div>
        
        <div className="participation__module">
            <img className="icon" src={speaker} alt="Icone feminino apontando para um gráfico" />
            <p><strong>{props.speaker}</strong></p>
            <p><strong>palestrantes</strong></p>
        </div>        
    </div>
);

export default Participation;