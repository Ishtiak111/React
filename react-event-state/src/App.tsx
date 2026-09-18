import "./App.css";

function App() {
  const handleClick = () => alert("Button Click 1");
  const handleBuy = (id: number) => alert("Buying Item: " + id);

  return (
    <>
      <button onClick={handleClick}>Click Me 1</button>
      <button onClick={() => alert("Button Clicked 2")}>Click Me 2</button>
      <button onClick={() => handleBuy(12)}>Buy Now</button>
    </>
  );
}

export default App;
