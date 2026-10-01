interface TaskPropTypes {
  name: string;
  isDone: boolean;
}

export default function Task({ name, isDone }: TaskPropTypes) {
  // if(isDone){
  //     return <li>Completed: {name}</li>
  // }
  // return <li>Pending: {name}</li>
  //   return isDone ? <li>Completed: {name}</li> : <li>Pending: {name}</li>;
  let list;
  if (isDone) {
    list = <li>Completed: {name}</li>;
  } else {
    list = <li>Pending: {name}</li>;
  }
  return list;
}
