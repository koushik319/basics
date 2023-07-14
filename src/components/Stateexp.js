import React,{Component} from "react"
class Stateexp extends Component
{
    constructor()
    {
        super()
        this.state= {
            Message:"Hello this is state"
        }

    }
    changeMessage()
    {
        this.setState({
            Message:"This is the New Message"
        })
    }
    render()
    {
        return(
            <div>
                <h1>{this.state.Message}</h1>
                <button onClick={()=> this.changeMessage()}>Change</button>
            </div>
        );
    }
}

export default Stateexp;