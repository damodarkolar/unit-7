import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { TodoCard } from '../components/TodoCard';

export const Todos = () => {
    const [token, setToken]=useState("");
    const todosData=[{
        id:1,
        name:"data",
        status:"comp",
        tag:"doit"
    }]
    const navigate=useNavigate()
    // const [todosData, setTodosData]=useState([]);

    React.useEffect(()=>{
    //    fetch(`/todos`)
    //    .then(res=>res.json())
    //    .then(data=>setTodosData(data))
    //    .catch(err=>console.log(err))    
    },[])

  return (
    <div>
        {todosData?.map((ele)=>
            <TodoCard key={ele.id} todo={ele}/>
        )}
    </div>
  )
}
