const fs=require("fs");

let option = process.argv.slice(2)[0]

function action (optionType) {
    switch (option) {
        case "delete":
            fs.unlinkSync("./test.txt",(err)=>{
               if(err) throw new err
            })                       
            break;
        case "create":
            fs.writeFileSync("./test.txt","Hello", (err)=>{
                if(err) throw err
            })                       
            break;
        case "append":
            fs.appendFileSync("./test.txt","CONTENT",(err)=>{
                if(err) throw err
            })                       
            break;
        case "rename":
            fs.renameSync("./test.txt", "./new.txt")                       
            break;
        case "read":
            fs.readFileSync("./test.txt","",(err, data)=>{
                if(data) console.log(data)
            })                       
            break;
    
        default:
            break;
    }
}


action(option)