// const fs=require("fs");
// const http=require("http");

// let text=fs.readFile("./public/login.txt", "utf8",(err, data)=>{
// console.log(data)
// })
// const server=http.createServer((req, res)=>{
//    if(req.url=="/"){
//       res.write("hell0 world")
//    }
//    if(req.url=="/home")
//    {
//       res.write("hell0 HOME")
//    }

// res.end("\n !")
// })

//  server.listen(4000,()=>{
//     console.log("server started")
//  })



const fs=require("fs")
const http=require("http");

const server=http.createServer((req, res)=>{
   console.log(req)
   const data =fs.readFileSync("./public/login.txt", "utf-8", ()=>{

   })
   const directory=fs.readdirSync("../fileServer")
   
   directory.forEach(ele=>res.write(`<a href=${ele}>${ele}</a><br/>`))

   res.end("end")
})


console.log(fs.readdirSync("../fileServer"))
server.listen(4000, ()=>{
   console.log("running")
})