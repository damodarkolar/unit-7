import React from 'react'

export const TodoCard = (props) => {

    const {todo}=props
    const { name, status, tag }=todo
  return (
    <div style={{display:"flex", justifyContent:"space-evenly"}}>
        <h1>{name}</h1> <h1>{status}</h1> <h1>{tag}</h1>
    </div>
  )
}
