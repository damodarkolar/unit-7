const mongoose=require("mongoose");

const PORT = 27017;

async function mongoConnect(){
   const conn=await mongoose.connect(`mongodb://localhost:/PORT/assignment`);
   mongoose.disconnect()
}

