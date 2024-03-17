import React from "react";

function CategoryFilter({setSelectedCategory , selectedCategory , categories}) {

  const buttonsArray = categories.map( category => {
    const className = (category === selectedCategory) ? 'selected' : '';
    return <button key={category} className={className} name={category} onClick={handleClick}>{category}</button>;
  });

  function handleClick(event){
    setSelectedCategory(event.target.name);
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttonsArray}
    </div>
  );
}

export default CategoryFilter;
