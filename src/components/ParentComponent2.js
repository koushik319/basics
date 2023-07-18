import React, { Component ,PureComponent} from 'react';
import RegComponent from './RegComponent';
import Purecomponent from './Purecomponent';
import Memocomponent from './Memocomponent';

class ParentComponent2 extends Component {

    constructor(props)
    {
        super(props)
        this.state={
            name:"Nani"
        }
    }
    componentDidMount()
    {
        setInterval(() => {
            this.setState({
                name:"Nani"
            })
        }, 2000);
    }
  render() {
    console.log("Parent Component render")
    return (
      <div>
        Parent Component
       <Memocomponent name={this.state.name}/>
        
      </div>
    );
  }
}

export default ParentComponent2;
