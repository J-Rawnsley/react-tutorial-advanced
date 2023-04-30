import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const [addition, setAddition] = useState(0);
  const incrementCount = () => {
    setCount(count + addition);
    console.log(count);
  };

  const incrementAddition = () => {
    setAddition(addition + 1);
  };
  const decrementAddition = () => {
    setAddition(addition - 1);
  };
  const incrementAddition10 = () => {
    setAddition(addition + 10);
  };
  const decrementAddition10 = () => {
    setAddition(addition - 10);
  };

  return (
    <div>
      <h2>Total = {count}</h2>
      
      <p><button type="button" className="btn" onClick={incrementAddition}>
        +
      </button><span>      </span>
      <button type="button" className="btn" onClick={decrementAddition}>
        -
      </button></p>
      <p>
      <button type="button" className="btn" onClick={incrementAddition10}>
        + 10
      </button><span>      </span>
      <button type="button" className="btn" onClick={decrementAddition10}>
        - 10
      </button>
      </p>
      <p><button type="button" className="btn" onClick={incrementCount}>
      add {addition} to total
      </button></p>
    </div>
  );
};

export default UseStateBasics;
