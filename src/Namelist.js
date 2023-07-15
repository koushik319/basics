import React from "react"

function Namelist()
{
    const names=["Ram","Krishna","Govinda"]
    return(
        <div>
            {
                names.map((name)=><h2>{name}</h2>)
            }
        </div>
    )
}

export default Namelist 