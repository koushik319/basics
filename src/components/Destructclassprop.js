import React,{Component} from "react"

class Destructclassprop extends Component{
    render()
   
    {
        const{fname,lname}=this.props
        return(
            <div>
                <h1>First name is {fname} and last name is {lname}</h1>
            </div>
        )
    }
}

export default Destructclassprop