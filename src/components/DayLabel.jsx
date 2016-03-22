import React, {Component} from 'react';
import moment from 'moment';

class DayLabel extends Component {

    state = {
        displayDate: moment().format("LL")
    }

    setDisplayDate() {

    	this.setState({displayDate: moment().format("LL")});
    }
   
    hasDayPast() {

    	return moment().format('LL') !== this.currentDate;

    }

    testForDayPast(){

        if (this.hasDayPast()) {
        	this.setDisplayDate()
        }
    }

    componentDidMount(){

        this.timer = setInterval(this.testForDayPast.bind(this), 50);

    }

    componentWillUnmount(){

        clearInterval(this.timer);
    }

	render() {

	    return (<h1>{this.state.displayDate}</h1>);

	}
}

export default DayLabel;
