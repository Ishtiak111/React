import { useState } from "react";

export default function Batter() {
  const [runs, setRauns] = useState(0);
  const Add1 = () => {
    setRauns(runs + 1);
  };
  const Add2 = () => setRauns(runs + 2);
  const Add3 = () => setRauns(runs + 3);
  const Add4 = () => setRauns(runs + 4);
  const Add6 = () => setRauns(runs + 6);
  const ResetRun = () => setRauns(0);
  return (
    <div>
      <p>------------------------------</p>
      <h2>Score: {runs}</h2>
      <button onClick={Add1}>Add 1</button> <br />
      <button onClick={Add2}>Add 2</button> <br />
      <button onClick={Add3}>Add 3</button> <br />
      <button onClick={Add4}>Add 4</button> <br />
      <button onClick={Add6}>Add 6</button> <br />
      <button onClick={ResetRun}>Reset</button>
    </div>
  );
}
