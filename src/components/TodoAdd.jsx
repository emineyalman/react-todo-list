import React, { useState } from 'react';

const TodoAdd = () => {
  const [todoadd, setTodoAdd] = useState("");
  const [addtodo,setAddTodo] = useState([])

  const NewTodo= (e) => {
    setTodoAdd(e.target.value)
    console.log(e, "e")
   } 
  const AddNewTodo  = () =>{
    setAddTodo(prev => ([...prev,todoadd]))
  }
 
   console.log(addtodo, "addtodo")
 

  return (
    <div>
      <h2>Todo Add</h2>
      <input onChange={NewTodo} type="text" />
      <div>{todoadd}</div>
      <button onClick={AddNewTodo}>Add New Todo</button>
      <div>
        {addtodo.map((item,index) =>
            (
            <div key={index}>
                {item}
                </div>
                )
        )}
      </div>
    </div>
  );
};

export default TodoAdd;
