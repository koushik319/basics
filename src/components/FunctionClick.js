import React,{Component} from "react"

const FunctionClick=()=>
{
  function update()
    {
        console.log("Button Clicked");
    }
    return(
        <div>
            <button onClick={update}>Update</button>
        </div>
    )
}

export default FunctionClick;  