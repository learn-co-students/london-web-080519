import React from "react";

// App
// TaskList receives { tasks, deleteTask } as props
// Task receives { text, category, handleDeleteClick } as props
const Task = ({ text, category, handleDeleteClick }) => {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleDeleteClick} className="delete">
        X
      </button>
    </div>
  );
};

export default Task;
