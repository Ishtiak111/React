import "./App.css";

function App() {
  return (
    <>
      <h1>Get started</h1>
      {/* <Person></Person>
      <Gadgets></Gadgets> */}
      <Student></Student>
      <Student></Student>
      <Student></Student>
    </>
  );
}
function Student(){
  const sstyle = {
    border: "2px solid red",
    borderRadius: '10px',
    margin: '10px',
  }
  return (
    <div style={sstyle}>
      <h3 style={{backgroundColor: "lime"}}>Name:</h3>
      <p>Grade:</p>
    </div>
  )
}
// function Student(){
//   return (
//     <div className="student">
//       <h3>Name:</h3>
//       <p>Grade:</p>
//     </div>
//   )
// }
function Person() {
  return <p>Hello React</p>;
}
function Gadgets() {
  const num = 20 + 30;
  return (
    <>
      <p>Some {num + 30}</p>
      <p>Sum {num}</p>
      <p>sub: {10 - 5}</p>
    </>
  );
}

export default App;
