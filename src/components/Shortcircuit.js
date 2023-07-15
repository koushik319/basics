import React,{Component} from "react"

class Shortcircuit extends Component
{
    constructor()
    {
        super()
        this.state={
            isLoggedIn:true
        }
    }
    render()
    {
        return ( this.state.isLoggedIn && <div>Welcome Nani</div>

        )
    }
}

export default Shortcircuit