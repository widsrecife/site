import React from 'react';
import './next-events.css';
import Event from '../Event';

import events from '../Event/Events.json'


const NextEvents = () => (
    <section className="next-events">  
        <h1 className="title">Próximos Eventos</h1>
            <ul>
                {events.events.map(ev => <li className="next-events__card"><Event data={ev} /></li>)}
            </ul>
    </section>
)

export default NextEvents;
