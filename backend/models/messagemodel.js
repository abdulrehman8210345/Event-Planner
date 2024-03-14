import mongoose from "mongoose";
import validator from "validator";

const messageSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name required!!"],
        minLength:[3,"Name must be at least 3 characters"]
    },
    email:{
        type:String,
        required:[true,"Email required!!"],
        validate:[validator.isEmail,"Email is not valid"]
    },
    subject:{
        type:String,
        required:[true,"Subject required!!"],
        minLength:[3,"Subject must be at least 3 characters"]
    },
    message:{
        type:String,
        required:[true,"Message required!!"],
        minLength:[10,"Message must be at least of 10 characters"]
    },

})

export const messagemodel = new mongoose.model("Message",messageSchema);