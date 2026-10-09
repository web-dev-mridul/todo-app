import { useEffect, useState } from "react";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
      });
  }, []);
  return (
    <div>
      {tasks?.map((allTaskLists) => (
        <div key={allTaskLists.id}>
          <TaskItem Title={allTaskLists.title} Description={allTaskLists.description} Date={allTaskLists.date}/>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
