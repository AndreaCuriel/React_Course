import React from 'react';
import { TodoList } from './components/TodoList'; //importa el archivo TodoList.js, es un componente 
import { useState } from 'react';
import { Fragment } from 'react';
import { useRef } from 'react';
import { v4 as uuidv4} from 'uuid/'; //libreria para generar ids automaticos (se tiene que instalar en la terminal para usarla)
import { useEffect } from 'react';

const KEY = "todoApp.todos"; //se crea una contante KEY que se usara para guardar en el localstorage la lista 

export function App(){
    const [todos, setTodos]=useState([{id: 1, task: "Tarea 1", completed:false}]); // se usa el useState para cambair ele stado de la constante "todos" que contiene el array para crear la lista
    
    const todoTaskRef = useRef(); //identifica que la constante es una referencia que se creo en el input 

   //funciones para el localstorage con useEffect

   useEffect(()=>{  //se lee lo del localStorge, almacena todo el array de todos anterior, para que cuando actualices pagina, no se borren
       const storedTodos = JSON.parse(localStorage.getItem(KEY));
       if(storedTodos){
           setTodos(storedTodos);
       }
   }, []);

   useEffect(()=> { //se agregar al localStorage, va almacenando el el localStorage las tareas 
       localStorage.setItem(KEY, JSON.stringify(todos));
   }, [todos]);

   //funcion del boton eliminar, elimina las tareas completadas
    const handleClearAll = (id) =>{
        const newTodos = todos.filter((todo)=> !todo.completed)
        setTodos(newTodos);

    };
    
    // cambia el estado del campo completed cuando seleccionas el checbox, esta funcion se llama desde el componente TodoItem.js
    const toggleTodo = (id) =>{
        const newTodos= [ ...todos]; //hace una copia del array todos 
        const todo = newTodos.find((todo) => todo.id === id);
        todo.completed = !todo.completed;
        setTodos(newTodos);
    };



    const handleTodoAdd = () => { //funcón cuando le das click al botón +
        const task = todoTaskRef.current.value;
        if(task==='') return;  //si no se escribio nada en el input pero se dio click en el boton +, saldra sin modificar

        setTodos((prevTodos)=> {  //funcion que actualiza el valor de "todos" con el valor anterior y uno nuevo
            return [ ...prevTodos, {id: uuidv4(), task, completed: false}]
        });

        todoTaskRef.current.value= null;  //limpia el input 

    };
    
    return (
    <Fragment>
        <TodoList todos={todos} toggleTodo={toggleTodo}/> {/* TodoList se le agregan propiedades*/}
        <input ref= {todoTaskRef} type="text" placeholder='Nueva Tarea'/>
        <button onClick={handleTodoAdd}>+</button>
        <button onClick={handleClearAll}>Eliminar</button>
        <div>Te quedan {todos.filter((todo) => !todo.completed).length} tareas por terminar</div>

    </Fragment>);
}
