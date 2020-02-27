import React from 'react';
import './next-events.css';
import EventDatail from '../EventDetail';

import events from '../EventDetail/Events.json'


const NextEvents = () => (
    <section className="next-events">  
        <h1 className="title">Próximos Eventos</h1>
            <ul>
                {events.events.map(ev => <li className="next-events__card"><EventDatail data={ev} /></li>)}
            </ul>
    </section>
)

export default NextEvents;
