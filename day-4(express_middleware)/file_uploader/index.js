const express =require("express");
const multer =require("multer")
const upload=multer({dest:"./upload"});
const PORT=8070;
const app=express();

app.post("/", upload.single("image"),(req, res)=>{
req.file()
    // req.file()
    req.end("uploaded")
})






app.listen(PORT, ()=>{
    console.log(`Server is Running ${PORT}`)
})