import React from 'react'
import { Todoitem } from "./Todoitem";
export const Todos = (props) => {
  return (
    <div className="container">
      <h3 >todos list</h3>
      {props.todos.length===0?"No todo":
      props.todos.map((todo)=>
      
      
        <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete} value={todo}/>
    
        )
      }
    </div>
  )
}
