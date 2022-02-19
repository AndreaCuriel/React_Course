import React from 'react';

export function TodoItem({todo, toggleTodo}) {
    const {id, task, completed}= todo;
    const handleTodoClick =()=>{
        toggleTodo(id); //llama la funcion toggleTodo para cambiar el valor de complete cuando el valor del checkbox cambia 
    };
  return ( 
    <li>
      <input type="checkbox" checked={completed} onChange={handleTodoClick}/>
      {task}
    </li>
    );
}
