import React from 'react';

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div id="date-container">
            	<h3 className="date-heading">{this.props.date}</h3>
	        </div>
        );
    }
}

export default Header;