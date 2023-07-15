import React from 'react';

function Indexaskey() {
    const names=["Ram","Krishna","Govind"]
    const nameslist = names.map((name,index)=><h2>{index} {name}</h2>)
  return (

    <div>
        {nameslist}
    </div>
  );
}

export default Indexaskey;
