import "./App.css";
import Sports from "./sports";
import Users from "./Users";
// import Book from "./book";
// import Task from "./task";
// import Todo from "./todo";

function App() {
  // const books = ['Bangla', 'English', 'Math'];
  return (
    <>
      <h1>Get started</h1>
      <Users></Users>
      <Sports></Sports>
      {/* {
        books.map(book => <Book name={book}></Book>)
      } */}
      {/* <Task name="Finish Module" isDone={true}></Task>
      <Task name="Facebooking" isDone={false}></Task> */}
      {/* <Todo task="Practice Coding" time="5.00"></Todo>
      <Todo task="take a shower" time="10.00"></Todo>
      <Todo task="No work"></Todo> */}
      {/* <Person></Person>
      <Gadgets></Gadgets> */}
      {/* <Student name="kks" grade="A"></Student>
      <Student></Student>
      <Student></Student> */}
      {/* <Developer language="JS"></Developer> */}
      {/* <Developer language="JS" experience="10"></Developer>
      <Developer language="Python" experience="6"></Developer>
      <Developer language="Java" experience="12"></Developer> */}
    </>
  );
}

// function Developer(props){
//   return (
//     <div className="student">
//     <h2>Programming Language: {props.language}</h2>
//     <p>Experience: {props.experience}</p>
//     </div>
//   )
// }


// interface PropsType{
//   name: string;
//   grade: string
// }
// function Student({name, grade}:PropsType){
//   return (
//     <div className="student">
//       <h3>Name: {name}</h3>
//       <p>Grade: {grade}</p>
//     </div>
//   )
// }
// function Student(){
//   const studentStyle = {
//     border: "2px solid red",
//     borderRadius: '10px',
//     margin: '10px',
//   }
//   return (
//     <div style={studentStyle}>
//       <h3>Name:</h3>
//       <p>Grade:</p>
//     </div>
//   )
// }
// function Person() {
//   return <p>Hello React</p>;
// }
// function Gadgets() {
//   const num = 20 + 30;
//   return (
//     <>
//       <p>Some {num + 30}</p>
//       <p>Sum {num}</p>
//       <p>sub: {10 - 5}</p>
//     </>
//   );
// }

export default App;
