import React from "react"
import Todo from "./models/Todo";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css';
const Todos: React.FC<{items:Todo[],onRemoveTodo:(id:string)=>void,handleSaveTodo:(id:string,editedText:string)=>void,}>= (props) =>{
     
    return (
        <ul className={classes.todos}>
        {props.items.map((item) =>(
         <TodoItem key={item.id} id={item.id} text={item.text}  onRemoveTodo={props.onRemoveTodo.bind(null,item.id) } 
         onSave={(id,editedText) => props.handleSaveTodo(id,editedText)} />
        ))}
        </ul>
    );
};

export default Todos;