import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    if(count > 0){
    setCount(count - 1);
    }
  };
  const handleReset = () => {
    setCount(0);
  }
  return (
    <div>
      <h2>Counter</h2>
      <p>Current Value: {count}</p>
      <button onClick={handleIncrease}>Increase</button> <br />
      <button onClick={handleDecrease}>Decrease</button> <br />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
