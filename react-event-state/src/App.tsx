import { Suspense } from "react";
import "./App.css";
import Users from "./Users";
import Todos from "./Todos";

const userDataPromise = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
};

function App() {
  return (
    <>
    <Todos></Todos>


      <Suspense fallback={<p>Loading...</p>}>
        <Users userDataPromise={userDataPromise()}></Users>
      </Suspense>
    </>
  );
}

export default App;
