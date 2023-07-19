import React,{Component} from "react"

class Clickcounter extends Component
{
    constructor()
    {
        super()
        this.state={
            count:0
        }
    }
    updateCount=()=>
    {
        this.setState(prevState =>
            {
               return {count:prevState.count + 1}
            })
    }
    render()
    {
        const {count} = this.state
        return <button onClick={this.updateCount}>Clicked {count} times</button>
    }
}

export default Clickcounter