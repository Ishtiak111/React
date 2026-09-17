interface PropsType {
  task: string;
  time?: string;
}
function Todo({ task, time }: PropsType) {
  return (
    <h2>Do this work: {task} at {time}</h2>
  );
}
export default Todo;
