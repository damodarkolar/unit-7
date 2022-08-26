const http=require("http");
const PORT=8080;

const server=http.createServer();



server.listen(PORT, ()=>{
   console.log("server Running")
})