import { useState } from "react";

export default function Batter() {
  const [run, setRun] = useState(0);
  const add1 = () => {
    setRun(run + 1);
  };
  const add2 = () => {
    setRun(run + 2);
  };
  const add3 = () => {
    setRun(run + 3);
  };
  const add4 = () => {
    setRun(run + 4);
  };
  const add6 = () => {
    setRun(run + 6);
  };
  const decrease1 = () => {
    if (run > 0) {
      setRun(run - 1);
    }
  };
  const decrease5 = () => {
    if (run > 5) {
      setRun(run - 5);
    }
  };
  const reset = () => {
    setRun(0);
  };
  return (
    <div>
      <p>----------------------------------</p>
      <h2>Score: {run}</h2>
      <button onClick={add1}>Add 1</button>
      <br />
      <button onClick={add2}>Add 2</button>
      <br />
      <button onClick={add3}>Add 3</button>
      <br />
      <button onClick={add4}>Add 4</button>
      <br />
      <button onClick={add6}>Add 6</button>
      <br />
      <button onClick={decrease1}>remove 1</button>
      <br />
      <button onClick={decrease5}>remove 5</button>
      <br />
      <button onClick={reset}>reset</button>
    </div>
  );
}
