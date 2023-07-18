import React,{Component} from "react"

class Input extends Component
{
    constructor ()
    {
        super()
        this.Inputref=React.createRef()
    }
    Focushandler()
    {
        this.Inputref.current.focus()
    }
    render()
    {
        return(
            <div>
                <input type="text" ref={this.Inputref}/>
                
            </div>
        )
    }
}

export default Input;