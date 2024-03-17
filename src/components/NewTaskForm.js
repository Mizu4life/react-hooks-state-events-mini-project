import React, {useState} from "react";

function NewTaskForm({onTaskFormSubmit , categories}) {
  const CategoryList = categories.filter( category => category !== 'All')
  const categoriesElements =CategoryList.map( (category) => <option value={category} key={category}>{category}</option> );

  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");
  
  function handleInputChange(event){
    setText(event.target.value)
  }

  function handleSelectChange(event){
    setCategory(event.target.value)
  }
  
  function handleSubmit(event){
    event.preventDefault();
    const newTask = { text: text, category: category};
    onTaskFormSubmit (newTask);
    setText("")
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleInputChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleSelectChange} >
          {categoriesElements}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
