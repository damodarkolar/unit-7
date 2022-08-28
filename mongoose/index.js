const mongoose=require("mongoose");

const uri =`mongodb://localhost:27017/assignment`
mongoose.connect(uri, (err)=>{
    if(err){
        console.err("error in connection",err)
        return;
    }
    console.log("Connected")
})

// const { Schemas, model } =mongoose;

// const moviesSchema=new Schemas({
//     id:Number,
//     name:String,
//     rating:Number,
//     date:{ type: Date, require:true},
//     image:String,
//     cast:String
// })

// const moviesModel=model()

// const PORT = 27017;

// async function mongoConnect(){
//    const conn=await mongoose.connect(`mongodb://localhost:27017/assignment`);
//    console.log("server started");
//    conn.disconnect();
// }


// mongoConnect()