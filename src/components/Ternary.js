import React,{Component} from "react"

class Ternary extends Component{
    constructor()
    {
        super()
        this.state={
            isLoggedIn:false
        }
    }
    render()
    {
        return  this.state.isLoggedIn?(
           <div>Hello Nani</div>
        ):
        
        (
            <div>Hello Guest</div>
        )

    }
}

export default Ternary