import React,{Component} from "react";
class Count extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            count:0
        }
    }
    updateCount=()=>
    {
        this.setState(prevState =>
            {
               return {count:prevState.count + 1}
            })
    }
    render()
    {
        return(
            <div>
                {this.props.render(this.state.count,this.updateCount)}
            </div>
        )
    }
}

export default Count