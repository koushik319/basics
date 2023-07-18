import React,{Component} from "react"

class RegComponent extends Component
{
    render()
    {
        console.log("regular Compnent render")
        return(
            <div>
                Regular Compnent {this.props.name}
            </div>
        )
    }
}

export default RegComponent