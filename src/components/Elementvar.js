import React,{Component} from "react"

class Elementvar extends Component{
    constructor()
    {
        super()
        this.state={
            isLoggedIn:false
        }
    }
    render()
    {
        var Message
        if(this.state.isLoggedIn)
        {
            Message="Hello Nani"
        }
        else
        {
            Message="Hello Guest"
        }
        return(
            <div>{Message}</div>
        )
    }
    
}

export default Elementvar;