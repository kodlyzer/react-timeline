import React from 'react';
import {totalHours} from '../constants/AppConstants';


class HourlyComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        var HourlyElements = [],
            i = 0;
        for (i = 0; i < totalHours; i++) {
            HourlyElements.push( <div className="hourly-component-container" key = {i}>
                <div className="time"><span> {i}</span></div>
                <div className="events">Events</div>
                </div>);
        }
        return <div>{ HourlyElements}</div>;
    }
}

export default HourlyComponent;