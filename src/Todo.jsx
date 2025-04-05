import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([]);

  const handleButtonClick = () => {
    const input = document.getElementById("input");

    const value = input.value;
    setTodo([...todo, value]);
    input.value = "";
  };

  const handleDelete =(indextoDelete)=>{
    const updated = todo.filter((_,index)=> index !== indextoDelete);
    setTodo(updated)
  }
  return (
    <div>
      {todo?.map((item,index) => (
        <div id="main" key={index}>
            <span>{item}</span>
            <button onClick={()=>handleDelete(index)}> Delete</button>
        </div>
      ))}
      <input type="text" name="" id="input" /> <br/>
      <button onClick={handleButtonClick}>ADD</button>
    </div>
  );
};

export default Todo;


// logic behind the deletion :
// we creates a new Array which takes all items of todo Array 
// but exept that that one elemrnt whose will match 
// then we update the original todo which updated Array