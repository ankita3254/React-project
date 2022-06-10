import React from 'react'

export const Todoitem = ({todo}) => {
  return (
    <div>
    <h4>{todo.title}</h4>
    <h4>{todo.desc}</h4>
    <button className='btn btn-danger'>Delete</button>
    </div>
  )
}
