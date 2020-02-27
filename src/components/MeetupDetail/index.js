import React from 'react';
import './meetupdetail.css';

import '../../assets/lib/bulma.css';

const MeetupDetail = (props) => (
    <section className="meetup">
        <div className="meetup__first">
            <div class="meetup__date">
                {props.data.date}
            </div>
        </div>
        <div className="meetup__second">
            <div className="meetup__hour">{props.data.hour}</div>
            <h2 className="meetup__title">{props.data.title}</h2>
            <div className="meetup__desc">{props.data.description}</div>
        </div>
    </section>
);

export default MeetupDetail;
