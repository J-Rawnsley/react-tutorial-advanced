import React from "react";

const UseStateGotcha = () => {
  const [stateValue, setStateValue] = React.useState(0)
  const increaseByOne = () => {
    setTimeout( () => {
      setStateValue((s) => s + 1)
    }, 3000)
    console.log(stateValue)
  }
  
  return <>
  <h3>Current value is set to {stateValue}</h3>
  <button className="btn" onClick={increaseByOne}>Add 1</button>
  </>;
};

export default UseStateGotcha;
