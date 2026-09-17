interface TaskPropType{
    name: string;
    isDone: boolean;
}
export default function Task({name, isDone}: TaskPropType){
    return isDone ? <li>Completed: {name}</li> : <li>Pending: {name}</li>
    // if(isDone){
    //     return <li>Completed: {name}</li>
    // }
    // return <li>Pendin: {name}</li>
}