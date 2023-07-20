import React,{Component} from "react"

class ClickCounterTwo extends Component
{
   
    render()
    {
        const {count ,updateCount} = this.props
        return <button onClick={updateCount}>Clicked {count} times</button>
    }
}

export default ClickCounterTwo