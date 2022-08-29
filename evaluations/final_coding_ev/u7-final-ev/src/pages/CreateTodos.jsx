import React from 'react'


const todo={
    name:"",
    status:"",
    tag:""
}
export const CreateTodos = () => {
    const [todoData, setTodoData]=React.useState(todo);
    const {name, status, tag}=todoData;
    const [statusState, setStatusState]=React.useState("");
    const [tags, setTags]=React.useState("");
    
    const statusOnChange=(e)=>{
        setStatusState(e.target.value)
    }

    const tagsOnChange=(e)=>{
        setTags(e.target.value)       
    }

    const handleOnChange=(e)=>{
        const { name, value }=e.target
        setTodoData(()=>({...todoData, [name]:value}))        
    }

    const handleOnclick=()=>{
        setTodoData((prev=>({...prev, status:statusState, tag:tags})))
        // fetch(``)
        // .then(res=>res.json())
        // .then(data=>console.log(data.token))
        // .catch(err=>console.log(err))
    }
  return (
    <div>
        <form action="">
            <input type="text" name="name" value={name} onChange={(e)=>{handleOnChange(e)}} placeholder="name of Task"/>
            <select name="tag"  onChange={(e)=>{tagsOnChange(e)}}  id="">
                <option value="">Select</option>
                <option value="personal">personal</option>
                <option value="official">official</option>
                <option value="family">family</option>
            </select>
            <select name="status"  onChange={(e)=>{statusOnChange(e)}}  id="">
                <option value="">Select</option>
                <option value="pending">pending</option>
                <option value="done">done</option>
            </select>
            <input type="submit" onClick={handleOnclick}></input>
        </form>               
    </div>
  )
}
