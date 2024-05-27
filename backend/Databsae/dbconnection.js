import mongoose from "mongoose";

export const connectiondb = ()=>{
    mongoose.connect(process.env.MONGO_URI,{dbName:"eventplanning"}).then(()=>{
        console.log("db connected to atlas");
    }).catch((err)=>{
        console.log("db not connected",err);
        
    })
}