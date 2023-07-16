import React from "react"

const styling=
{
    fontSize: '25px',
    color:'blue'
}
function Inline()
{
    return(
        <div>
            <h1 style={styling}>Inline CSS Styling</h1>
        </div>
    )
}

export default Inline;