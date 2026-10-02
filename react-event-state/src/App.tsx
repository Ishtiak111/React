import { Suspense } from "react";
import "./App.css";
import Batter from "./batter";
import Cart from "./Cart";
import Users from "./Users";
import Post from "./Post";

const userDataPromise = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
};

const postDataPromise = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

function App() {
  // const handleClick = () => {
  //   alert("Button Clicked");
  // }

  // const handleAddToCard = (id) => {
  //   alert("Buying item" + id);
  // }

  return (
    <>
      {/* <button onClick={handleClick}>Click Me</button>
      <button onClick={()=>alert("Helllow")}>Click me 2</button>
      <button onClick={()=>handleAddToCard(77)}>Buy now</button> */}
      <Cart></Cart>
      <Batter></Batter>
      <p>--------------------------------</p>
      <Suspense fallback={<p>Loading.......</p>}>
        <Users userDataPromise={userDataPromise()}></Users>
      </Suspense>

      <p>---------------------------------</p>

      <Suspense fallback={<p>Loading...</p>}>
        <Post postDataPromise={postDataPromise()}></Post>
      </Suspense>
    </>
  );
}

export default App;
