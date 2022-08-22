const express=require("express");
const dns=require("node:dns");
const fs=require("fs")
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

app.get("/products", (req, res)=>{
    fs.readFile("./products.json", (err, data)=>{
        if(err)
        res.status(404).send("server Err")
        res.status(200).send(JSON.stringify(JSON.parse(data)))
    })
})

let max=1;
app.post("/products/create", (req, res)=>{
const item=req.body
max++;
item.id=max
    fs.readFile("./products.json", (err, data)=>{
        if(err)
        res.status(404).send("server Err")
        const items=JSON.parse(data)
        products.push(JSON.stringify(item))
        fs.writeFile("./products.json", items,(error)=>{
            if(error)
            res.send("Server err")
            res.send("Products added")
        })
        // res.status(200).send(products)
    })
})



app.delete("/products/:productid", (req, res)=>{
const { productid } =req.params;
fs.readFile("./products.json", (err, data)=>{
    if(err)
    res.status(404).send("server Err")
    const items=JSON.parse(data)
    const index=-1;
    
    products.push(JSON.stringify(item))
    fs.writeFile("./products.json", items,(error)=>{
        if(error)
        res.send("Server err")
        res.send("Products added")
    })
    // res.status(200).send(products)
})
})



app.patch("/products/:productid",(req, res)=>{

    const { productid } =req.params;
    fs.readFile("./products.json", (err, data)=>{
        if(err)
        res.status(404).send("server Err")
        const items=JSON.parse(data)
        const index=-1;
        
        products.push(JSON.stringify(item))
        fs.writeFile("./products.json", items,(error)=>{
            if(error)
            res.send("Server err")
            res.send("Products added")
        })
        // res.status(200).send(products)
    })
})




app.listen(PORT, ()=>{
    console.log(`Server started ${PORT}`)
})