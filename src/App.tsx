import Todos from './components/Todos';
import './App.css';
import Todo from './components/models/Todo';
import NewTodo from './components/NewTodo';
import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

function App() {
   const [todos, setTodos] = useLocalStorage<Todo[]>("Todos",[]);


  const addToTodoHandler = (todoText:string)=>{
    const newTodo = new Todo(todoText);
    setTodos((prevTodos)=>{
      return prevTodos.concat(newTodo);
    });
  };
  const removeTodoHandler=(todoId:string)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo=>todo.id!==todoId);
    });
  };
  const updateHandler=(TodoId:string,editedText:string)=>{
      setTodos((prevTodos)=>{
        return prevTodos.map((todos)=>
        todos.id===TodoId?{...todos,text:editedText}:todos)
      });
  };
  return (
    <div >
      <NewTodo addToTodo={addToTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} handleSaveTodo={updateHandler}/>
    </div>
  );
}

export default App;
