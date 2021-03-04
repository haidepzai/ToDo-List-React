import Task from "./Task";

//{tasks} von App.js (Eltern)
const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    //tasks.push()
    //geht nicht! Da states immutable sind (one-way Data)
    //-> setTasks
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        /> //übergibt key und task an Kind
      ))}
    </>
  );
};

export default Tasks;
