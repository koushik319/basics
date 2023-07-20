import React,{Component} from "react"
import UpdatedComponent from "./withCounter"
import withCounter from "./withCounter"
class Clickcounter extends Component
{
   
    render()
    {
        const {count , updateCount} = this.props
        return <button onClick={updateCount}>Clicked {count} times</button>
    }
}

export default withCounter(Clickcounter)