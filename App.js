import React from 'react';
import HeaderComponent from './js/components/HeaderComponent.js'

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    dateFunction() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }

        today = mm + '/' + dd + '/' + yyyy;
        return today;
    }

    render() {
        return (
            <div>
            	<HeaderComponent date={this.dateFunction()}/>
	        </div>
        );
    }
}

export default App;