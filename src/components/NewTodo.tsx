import { useRef } from "react";
import classes from './NewTodo.module.css';
const NewTodo :React.FC<{addToTodo:(text:string)=> void}>= (props) =>{
    const todoTextInputRef=useRef<HTMLInputElement>(null);
    const submitHandler=(event:React.FormEvent)=>{
        event.preventDefault();
        const enteredText=todoTextInputRef.current!.value;
        todoTextInputRef.current!.value='';
        if(enteredText.trim().length===0){
            return;
        }
       props.addToTodo(enteredText);  
    };
    
  return (
    <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor='text' >TodoText</label>
        <input type='text' id='text' ref={todoTextInputRef} placeholder="Write here"
           />
        <button>Add Todo</button>
        
    </form>
  )
}
export default NewTodo;