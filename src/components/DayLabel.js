import React, {Component} from 'react';
import moment from 'moment';

class DayLabel extends Component {

    constructor() {

        super();
        
        this.state = {
            displayDate: this.getFormattedDate()
        }

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

    componentDidMount() {

        this.timer = setInterval(()=>{
            if (this.hasDayPast()) {
                this.setDisplayDate()
            }
        }, 50);

    }

    componentWillUnmount() {

        clearInterval(this.timer);
    }

	render() {

	    return (<h1>{this.getDisplayDate()}</h1>);

	}
}

export default DayLabel;
