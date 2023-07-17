import React,{Component} from "react";

class LifecycleA extends Component{

    constructor()
    {
        super()
        this.state={
            name:'Nani'
        }
        console.log("Constructor Method")
    }

    static getDerivedStateFroProps(props,state)
    {
        console.log("StaticGet DerivedState method")
        return null
    }
    componentDidMount()
    {

        console.log("ComponentDidMount Method")
    }
    render()
    {
        console.log("Render Method")
        return(
            <div>
                LifecycleA
            </div>
            
        )
        
    }
}

export default LifecycleA