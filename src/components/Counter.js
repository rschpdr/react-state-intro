import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function onIncrement() {
    setCount((previousState) => previousState + 1);
  }

  function onDecrement() {
    setCount((previousState) => previousState - 1);
  }

  return (
    <div>
      <button onClick={onDecrement}>-</button>
      <span style={{ padding: "10px" }}>{count}</span>
      <button onClick={onIncrement}>+</button>
    </div>
  );
}

export default Counter;
