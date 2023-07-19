import React, { Component } from 'react';

 class Hovercounter extends Component {
    constructor()
    {
        super()
        this.state={
            hover :0
        }
    }
    Hovered=()=>
    {
        this.setState(prevState=>
            {
                return { hover:prevState.hover+1}
            })
    }
  render() {
        
        const {hover} = this.state
        return <h2 onMouseOver={this.Hovered}>Hovered {hover} times</h2>
   
  }
}

export default Hovercounter;
