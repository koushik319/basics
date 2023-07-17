import React, { Component } from 'react';

 class Lifecycleupdate extends Component {
    constructor()
    {
        super()
        this.state={
            name:'Nani'
        }
        console.log("Constructor Method")
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log("DerivedState from props")
    }
    shouldComponentUpdate()
    {
        console.log("Should Component Update")
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log("Snapshot")
        return null
    }
    componentDidUpdate(prevProps,prevState,snapshot)
    {
        console.log("Component did update")
    }
    Update=()=>
    {
        this.setState({
            name:"Updated Name"
        })
    }
  render() {
    console.log("render method")
    return (
      <div>
        <div>Lifecycle Update</div>
        <button onClick={this.Update}>Update</button>
      </div>
    );
  }
}

export default Lifecycleupdate;
