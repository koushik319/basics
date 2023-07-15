import React,{Component} from "react"

class Renderif extends Component{
    constructor()
    {
        super();
        this.state={
            isLoggedIn: false
        }
    }
    render()
    {
    if(this.state.isLoggedIn)
    {
        return(
            <div>Hello Nani</div>
        )
    }
    else{
        return(
            <div>
                Hello Guest
            </div>
        )
    }
    
}
}

export default Renderif;