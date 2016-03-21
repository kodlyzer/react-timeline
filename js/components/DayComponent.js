import React from 'react';
import HeaderComponent from '../components/HeaderComponent'

class DayComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
            	<HeaderComponent />
                <HourlyComponent />
	        </div>
        );
    }
}

export default DayComponent;