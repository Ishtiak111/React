
import './App.css'
import Todo from './Todo'

function App() {


  return (
    <>

          <h1>My React</h1>
          <Student name="Ishtiak" grades="3.73"></Student>
          <Student name="Kamal" grades="2.73"></Student>
          <Student name="Jamal" grades="3.33"></Student>
          <Developer language="JavaScript" experience="3"></Developer>
          <Developer language="Python" experience="10"></Developer>
          <Todo task ="Practice Coding"></Todo>
  
    </>
  )
}

function Developer(props){
  return(
    <div className='student'>
      <h4>Programming Language: {props.language}</h4>
      <h4>Years of experience: {props.experience}</h4>
    </div>
  )
}

function Student(props){
  // const studentStyle = {
  //   border: "2px solid red",
  //   borderRadius: "10px",
  //   margin: "5px",
  //   color: "red"
  // }
  return(
    <div style={{
      border: "2px solid lime",
      borderRadius: "10px",
      margin: "10px",
      color: "orange"
    }}>
      <h3>Name: {props.name}</h3>
      <p>Grades: {props.grades}</p>
    </div>
  )
}

function Persion(){
  return <h2>I am here</h2>
}

function Gadgets(){
  const money = 56;
  return(
    <>
    <p>Some {3+9}</p>
    <p>Sum {money}</p>
    <p>Summing</p>
    </>
  )
}

export default App
