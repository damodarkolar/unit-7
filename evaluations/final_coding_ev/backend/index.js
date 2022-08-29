const express=require("express");
const mongoose=require("mongoose");


const app=express();
const PORT=8080;

async function mongoosedb(){
   const conn=await mongoose.connect(`https://cloud.mongodb.com/v2/630ce849a559aa6daafaecbf#metrics/replicaSet/630ce8bc2be82f1a936477c6/explorer/assignments/todos`)
}

app.get("/todo",(req, res)=>{
mongoosedb()
mongoose.
res.send()
conn.disconnect()
})

app.listen(PORT,()=>{
    console.log("server started")
})