import React from 'react';
import './scheduledetail.css';

const SchedulesDetail = (props) => (
    <section className="scheduledetail">
        <div className="scheduledetail_first">
            <div class="scheduledetail__hour">
                {props.data.hour}
            </div>
        </div>
        
        <div className="scheduledetail_second">
        |
        </div>

        <span className="scheduledetail_third">
            <p class="scheduledetail__desc">
                {props.data.desc}
            </p>
            <h2 class="scheduledetail__title">
                {props.data.title}
            </h2>
            <p class="scheduledetail__author">
                {props.data.author}
            </p>
        </span>

    </section>
);

export default SchedulesDetail;