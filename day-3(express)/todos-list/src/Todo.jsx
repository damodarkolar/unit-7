import React from 'react'
import { Box, Button, Input } from '@chakra-ui/react'
export const Todo = () => {
    const [todo, setTodo]=React.useState("");
    const [todosList, setTodosList]=React.useState([{work: 'damodar', date: '2022-08-19T02:41:34.448Z', id: 1, status: true}]);

    function fetchTodos(){
        fetch(`http://localhost:8080/todos`)
        .then(res=>res.json())
        .then(data=>setTodosList(data))
        .catch(err=>console.log(err))
    }

    React.useState(()=>{
        fetchTodos()
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
        fetchTodos()
    }
    const handleToggle=(id)=>{
        fetch(`http://localhost:8080/todos/${id}`,{
            method:"PATCH"
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
        fetchTodos()
    }
    const handleDelete=(id)=>{
        fetch(`http://localhost:8080/todos/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
        fetchTodos()
    }
  return (
    <>
    <div>
        <Box bg='tomato' w='100%' p={4} color='white'>
            Todo List
        </Box>
        <Input value={todo} onChange={(e)=>{setTodo(e.target.value)}} placeholder='Enter Task' />
        <Button onClick={handleOnClick} colorScheme='blue'>Button</Button>
        
    </div>
    <Box>
        {todosList?.map(ele=> <div ket={ele.id} style={{display:"flex", justifyContent:"space-evenly"}}>{<><h1>{ele.work}</h1><h1>{ele.date}</h1><h1>{ele.status?"completed": "pending"}</h1><Button onClick={()=>{handleToggle(ele.id)} }>Toggle</Button><Button onClick={()=>{handleDelete(ele.id)} }>Delete</Button></>}</div>)}
    </Box>
    </>
  )
}
