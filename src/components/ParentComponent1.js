import React,{Component} from "react"
import ChildComponent1 from "./ChildComponent1";

class ParentComponent1 extends Component
{
    constructor(props)
    {
        super();
        this.state={
            parentName:"Parent"
        }
        this.greetParent=this.greetParent.bind((this))
    }
    greetParent()
    {
        alert(`Hello ${this.state.parentName}`)
    }
    render()
    {
        return(
            <div>
                <ChildComponent1 greethandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent1