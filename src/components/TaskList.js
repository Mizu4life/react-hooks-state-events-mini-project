import React from "react";
import Task from "./Task";

function TaskList({ tasks , selectedCategory, handleDelete }) {
  const filteredTasks = tasks.filter((task) => {
    if(selectedCategory === "All" || selectedCategory === undefined) return true;
    return task.category===selectedCategory;
  }); 
  const tasksToDisplay = filteredTasks.map((task,index) => <Task key={index} category={task.category} text={task.text} handleDelete={ () => handleDelete(task)}/>); 
  
  return (
    <div className="tasks">
      {tasksToDisplay}
    </div>
  );
}

export default TaskList;
