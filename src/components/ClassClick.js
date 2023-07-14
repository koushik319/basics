import React,{Component} from "react"

class ClassClick extends Component
{
    updatetext()
    {
        console.log("Button is Clicked");
    }
    render()
    {
        return(
            <div>
                <button onClick={this.updatetext}>Click Me</button>
            </div>
        )
    }
}

export default ClassClick;