import React from "react"
const Destructprops=({fname,lname})=> // Destructing in function parameters

{
    //Destructing in function body
    //const{fname,lname}=props
    return(
        <div>
            <h1>The firstname is {fname} and lastname is {lname}</h1>
        </div>
    );
}
export default Destructprops