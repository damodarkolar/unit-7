import React from 'react'
import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
export const NavBar = () => {
  return (
    <div>
        <Box bg='tomato' w='100%' p={4} color='white' display={"flex"} justifyContent="space-around">
            <Link to="/">Home</Link>
            <Link to="/createTodo">Create Todo</Link>
            <Link to="/login">Login</Link>
            <Link to="/signUp">Sign Up</Link>
        </Box>
    </div>
  )
}
