const express=require("express");
const PORT=8080;
const fs=require("fs");

const app=express();
app.use(express.json())

app.use((req, res, next)=>{
    const { body }=req
    if(body.ID && body.Name && body.Rating && body.Description && body.Genre && body.Cast){
    next();
    }else{
        return res.send("Some Data is missing");
    }
    
})
app.use((req, res, next)=>{
    const {ID, Name, Rating, Description, Genre, Cast}=req.body
if(typeof ID==="number" && typeof Name==="string" && typeof Rating==="number" && typeof Description ==="string" && typeof Genre==="string" && typeof Cast==="string"){
    console.log(typeof Name==="string")
    next();
}else{
    return res.send("Date is not in valid form");
}

})

app.post("/movies", (req, res)=>{
    const {ID, Name, Rating, Description, Genre, Cast}=req.body
    const obj={
        ID, Name, Rating, Description, Genre, Cast
    }
    const data=JSON.stringify(obj)
    fs.appendFileSync("./moviesData.txt",data,"utf8",( err)=>{
        if(err){
            res.send("Data Not added")
        }else{

        }
    } )
    console.log(obj)
    res.send()
})




app.listen(PORT, ()=>{
    console.log(`server is running in port ${PORT}`)
})