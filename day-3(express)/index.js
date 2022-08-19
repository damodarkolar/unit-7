const express=require("express");
const cors=require("cors")
let PORT=8080;
const app=express()
let data=[];
app.use(express.json())
app.use(cors())
app.get("/todos", (req, res)=>{
    res.end(JSON.stringify(data))
    console.log(req.params)
})

app.post("/todos", (req, res)=>{
    try {
        let max=0;
        data.forEach(ele=>{
            max=Math.max(ele.id, max)
        })
        const { task }=req.body
        console.log(task)
        let todo={
            work:task,
            date:new Date(),
            id:max+1,
            status:false
        }
    data.push(todo)
    res.status(200).send("Task Added")
    } catch (error) {
        res.status(400).send("err")
    }    
})


app.delete("/todos/:id",(req, res)=>{
    try {
        let index=-1
        let { id }=req.params
        data.find((ele, i)=> {
            if(ele.id==id){
                index=i
            }
        })
        if(index!=-1){
            data.slice(index, 1)
            res.send("Deleted ")
        }else{
            res.send("Element not found")
        }
        
       
    } catch (error) {
        console.error(error)
        res.status(400).send("error")        
    }
})


app.patch("/todos/:id", (req, res)=>{
    try {
        let { id }=req.params;
        let index=-1;
        data.find((ele, i)=>{
            if(ele.id==id){
                index=i
            }
        }) 
        if(index!=-1){
            data[index].status=!data[index].status
            res.send("Data Updated")
        }else{
            res.send("element not found")
        }       
    } catch (error) {
        res.status(400).send("server Err")
    }
})




app.listen(PORT, ()=>{
    console.log(`server started port no ${PORT}`)
})