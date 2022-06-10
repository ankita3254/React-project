import React from 'react'
import { Todoitem } from "./Todoitem";
export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center">todos list</h3>
      <Todoitem todo={props.todos[1]}/>
    </div>
  )
}
