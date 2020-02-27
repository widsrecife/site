import React from 'react';
import './eventdetail.css';

const EventDatail = (props) => ( 
    <section className="event">
        <div className="event__first">
            <div class="event__date">
                {props.data.date}
            </div>
        </div>
        <div className="event__second">
            <div className="event__hour">{props.data.hour}</div>
            <h2 className="event__title">{props.data.title}</h2>
            <div className="event__desc">{props.data.description}</div>
        </div>
    </section>
);

export default EventDatail;
