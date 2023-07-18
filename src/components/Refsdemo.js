import React,{Component} from "react"

class Refsdemo extends Component{
    constructor()
    {
        super()
        this.inputRef=React.createRef()
    }
    componentDidMount()
    {
        this.inputRef.current.focus()
    }
    eventHandler=()=>
    {
        alert(this.inputRef.current.value)
    }
    render()
    {
        return(
            <div>
                <input type="text" ref={this.inputRef}/>
                <button onClick={this.eventHandler}>Click</button>
            </div>
        )
    }
}

export default Refsdemo;