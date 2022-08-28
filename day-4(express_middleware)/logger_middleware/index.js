const express=require("express");
const morgan=require("morgan")

const app=express();

app.use(morgan(':method :status :[content-length] :time taken :date :http version :url accesed :newline at the :end'))

app.get("/", (req, res)=>{
    res.send("logged ");
})

app.listen(8088, ()=>{
    console.log("server started")
})
