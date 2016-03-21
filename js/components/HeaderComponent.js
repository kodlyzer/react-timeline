import React from 'react';

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
            	{this.props.date}
	        </div>
        );
    }
}

export default Header;