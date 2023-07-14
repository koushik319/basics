import React from 'react';

function ChildComponent1(props) {
  return (
    <div>
      <button onClick={props.greethandler}>Greet Parent</button>
    </div>
  );
}

export default ChildComponent1;
