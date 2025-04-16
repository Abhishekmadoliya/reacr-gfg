import React, { useState } from "react";
import './index.css'

const Todo2 = () => {

  const [title,setTitle] = useState('');
  const [desc,setDesc] = useState('');
  const [edittask, setEdittask] = useState()

  const [todo, setTodo] = useState([])

  const handleDelete =(indextoDelete)=>{
    const updated = todo.filter((_,index)=> index !== indextoDelete);
    setTodo(updated)
  }

  const handleEdit = (indextoEdit)=>{
    setTitle(todo[indextoEdit].title)
    setDesc(todo[indextoEdit].desc)
    setEdittask(indextoEdit)
  }

  const ontodoChange = ()=>{
    const obj = {
      title: title,
      desc: desc,

    }

    setTodo(todo=> [...todo, obj])

    setDesc("");
    setTitle("");
    
  }

  console.log(todo);
  
  return (
    <div>
      <div className="">
        <input type="text" placeholder="Enter title " onChange={(e)=>setTitle(e.target.value)} />
        <input type="text" placeholder="Enter Description " onChange={(e)=>setDesc(e.target.value)}/>
      </div>

      <div className="">
        <button onClick={ontodoChange}>Add Todo</button> <br/>
        <button>Delete All</button>
      </div>

      <div>
        {todo.map((todo,index)=>(
          
          <div key={index}>
            <h1 >{todo.title}</h1>
            <p >{todo.desc}</p>
            <button onClick={()=>handleDelete(index)}>delete</button>
            <button onClick={()=>handleEdit(index)}>edit</button>

          </div>
            
          
        ))}
      </div>
    </div>
  );
};

export default Todo2;
