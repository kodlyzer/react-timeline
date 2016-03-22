import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import HourlyComponent from '../components/HourlyComponent';

class DayComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
            	<HeaderComponent />
                <div className='hourly-component-parent-container'>
                    <HourlyComponent />
                </div>
	        </div>
        );
    }
}

export default DayComponent;