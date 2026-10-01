import "./App.css";
import Sports from "./Sports";
import Users from "./Users";
// import Book from "./Book";
// import Task from "./Task";
// import Todo from "./Todo";

function App() {
  // const books:string[] = ['Physics', 'Chemistry', 'Biology', 'Math', 'Bangla', 'English']
  return (
    <>
      <h1>My React</h1>
      <Users></Users>
      <Sports></Sports>
      {/* {
        books.map((book) => <Book name={book}></Book>)
      } */}
      {/* <Task name="Finish module" isDone={false}></Task> */}
      {/* <Student name="Ishtiak" grades="3.73"></Student>
          <Student name="Kamal" grades="2.73"></Student>
          <Student name="Jamal" grades="3.33"></Student>
          <Developer language="JavaScript" experience="3"></Developer>
          <Developer language="Python" experience="10"></Developer> */}
      {/* <Todo task="Practice Coding" time="5.00"></Todo>
      <Todo task="Take a shower" time="10.00"></Todo>
      <Todo task="No work today"></Todo> */}
    </>
  );
}

// function Developer(props) {
//   return (
//     <div className="student">
//       <h4>Programming Language: {props.language}</h4>
//       <h4>Years of experience: {props.experience}</h4>
//     </div>
//   );
// }

// function Student(props) {
  // const studentStyle = {
  //   border: "2px solid red",
  //   borderRadius: "10px",
  //   margin: "5px",
  //   color: "red"
  // }
  // return (
  //   <div
      // style={{
      //   border: "2px solid lime",
      //   borderRadius: "10px",
      //   margin: "10px",
      //   color: "orange",
      // }}
    // >
    //   <h3>Name: {props.name}</h3>
    //   <p>Grades: {props.grades}</p>
    // </div>
  // );
// }

// function Persion() {
//   return <h2>I am here</h2>;
// }

// function Gadgets() {
//   const money = 56;
//   return (
//     <>
//       <p>Some {3 + 9}</p>
//       <p>Sum {money}</p>
//       <p>Summing</p>
//     </>
//   );
// }

export default App;
