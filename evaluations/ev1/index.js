const express=require("express");
const dns=require("node:dns")
const PORT=8080
const app=express();

app.use(express.json());

app.post("/getmeip",(req, res)=>{
const { website_name }=req.body;
dns.resolve4(website_name, (err, address)=>{
    if(err)
    throw err
    res.send(JSON.stringify(address))
})

    
})




app.listen(PORT, ()=>{
    console.log(`Server started ${PORT}`)
})