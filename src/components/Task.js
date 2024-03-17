import React from "react";

function Task({ category , text , handleDelete }) {

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button type="reset" className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
