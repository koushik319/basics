import React from "react"
const Childprop=(props)=>{
    console.log(props);
    return(
        <div>
            <h1>This is the name : {props.name}</h1>
            {props.children}
        </div>
    )
}

export default Childprop;