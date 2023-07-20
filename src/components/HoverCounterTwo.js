import React,{Component} from "react"

class HoverCounterTwo extends Component
{
   
    render()
    {
        const {count,updateCount}= this.props
        return(
            <h1 onMouseOver={updateCount}>Hovered {count} times</h1>
        )
    }
}

export default HoverCounterTwo