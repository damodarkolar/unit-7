import React from 'react'
import { Box, Button, Input } from '@chakra-ui/react'
export const Todo = () => {
    const [todo, setTodo]=React.useState("");
    const [todosList, setTodosList]=React.useState([]);

    function fetchTodos(){
        fetch(`http://localhost:8080/todos`)
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
    }

    React.useState(()=>{
        console.log(todosList)
    },[])

    const handleOnClick=()=>{
        setTodo("")
        fetch(`http://localhost:8080/todos`,{
            method:"POST",
            body:JSON.stringify({task:todo}),
            headers:{
                "Content-Type": "application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
    }
  return (
    <div>
        <Box bg='tomato' w='100%' p={4} color='white'>
            Todo List
        </Box>
        <Input value={todo} onChange={(e)=>{setTodo(e.target.value)}} placeholder='Enter Task' />
        <Button onClick={handleOnClick} colorScheme='blue'>Button</Button>
    </div>
  )
}
