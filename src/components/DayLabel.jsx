import React, {Component} from 'react';
import moment from 'moment';

class DayLabel extends Component {

    state = {
        displayDate: this.getFormattedDate()
    }

    getFormattedDate() {

    	return moment().format("LL");

    }

    setDisplayDate() {

    	this.setState({displayDate: this.getFormattedDate()});
    }

    getDisplayDate() {

    	return this.state.displayDate;
        
    }
   
    hasDayPast() {

    	return this.getFormattedDate() !== this.getDisplayDate();

    }

    testForDayPast() {

        if (this.hasDayPast()) {
        	this.setDisplayDate()
        }
    }

    componentDidMount() {

        this.timer = setInterval(this.testForDayPast.bind(this), 50);

    }

    componentWillUnmount() {

        clearInterval(this.timer);
    }

	render() {

	    return (<h1>{this.getDisplayDate()}</h1>);

	}
}

export default DayLabel;
