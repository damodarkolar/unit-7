const express =require("express");
const PORT=8070;
const app=express();

app.get("/", (req, res)=>{

    res.send("<input type=file/>")
})






app.listen(PORT, ()=>{
    console.log(`Server is Running ${PORT}`)
})