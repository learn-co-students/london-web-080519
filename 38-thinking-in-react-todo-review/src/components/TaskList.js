import React from "react";
import Task from "./Task";

// App
// Tasklist receives { tasks, deleteTask } as props
const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div className="tasks">
      <h5>Tasks</h5>
      {tasks.map(task => (
        <Task
          key={task.text + task.category}
          handleDeleteClick={() => deleteTask(task)}
          {...task}
        />
      ))}
    </div>
  );
};

export default TaskList;
