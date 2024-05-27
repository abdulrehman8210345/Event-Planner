import mongoose from "mongoose";

export const connectiondb = ()=>{
    mongoose.connect(process.env.MONGO_URL,{dbName:"eventplanning"}).then(()=>{
        console.log("db connected locally");
    }).catch((err)=>{
        console.log("db not connected",err);
        
    })
}