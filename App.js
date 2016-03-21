import React from 'react';
import HeaderComponent from './js/components/HeaderComponent.js'

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
            	<HeaderComponent date="123"/>
	        </div>
        );
    }
}

export default App;