import React, { Component } from 'react';
import Input from './Input';
class Focusinput extends Component {
    constructor()
    {
        super()
        this.Inputref1=React.createRef()
    }
    clickHandler=()=>
    {
        this.Inputref1.current.Focushandler()
    }
  render() {
    return (
      <div>
        <input ref={this.Inputref1}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default Focusinput;
