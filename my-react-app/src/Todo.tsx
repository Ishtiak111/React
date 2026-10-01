interface TodoPropsType{
    task: string;
    time?: string;
}

function Todo({task, time}:TodoPropsType){
    return <li>Work: {task} at {time}</li>
}

// function Todo({ task, time }: { task: string; time?: string }) {
//   return (
//     <li>
//       Work: {task} at {time}
//     </li>
//   );
// }

// function Todo({task, time}){
//     return <li>Do this work: {task} at {time}</li>
// }
export default Todo;
