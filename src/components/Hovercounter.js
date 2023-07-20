import React, { Component } from 'react';
import UpdatedComponent from './withCounter';
import withCounter from './withCounter';
class Hovercounter extends Component {
    
    render() {

        const { count,updateCount } = this.props
        return <h2 onMouseOver={updateCount}>Hovered {count} times</h2>

    }
}

export default withCounter(Hovercounter);
