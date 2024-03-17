import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [taskList, setTaskList] = useState(TASKS);

  function onTaskFormSubmit(newTask){
    setTaskList([...taskList, newTask]);
  }

  return ( 
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}/>
      <NewTaskForm onTaskFormSubmit ={onTaskFormSubmit} categories={CATEGORIES}/>
      <TaskList tasks={taskList} selectedCategory={selectedCategory} onTaskDelete={setTaskList}/>
    </div>
  );
} 

export default App;