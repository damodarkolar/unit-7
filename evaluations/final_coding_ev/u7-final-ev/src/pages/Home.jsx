import React from 'react'
import { Todos } from './Todos';

export const Home = () => {
    const token=2;
  return !!token? (    
    <div>
        <Todos/>
    </div>
  ): (
    <h1>Please Login or Sign Up</h1>
  )
}
