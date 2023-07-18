import React from "react"

function Memocomponent({name})
{
    console.log("Memo Component")
    return(
        <div>
            {name}
        </div>
    )
}

export default React.memo(Memocomponent)