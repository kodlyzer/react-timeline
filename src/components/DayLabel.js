import React, {Component} from 'react';

class DayLabel extends Component {

    constructor() {

        super();

    }

	render() {

	    return (<h1>{this.props.displayDate}</h1>);

	}
}

export default DayLabel;
