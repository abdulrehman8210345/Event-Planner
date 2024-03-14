import { messagemodel } from "../models/messagemodel.js";

export const sendMessage = async (req,res)=>{

    try {
        const {name,email,subject,message}=req.body;
    if(!name || !email || !subject || !message){
        return res.status(400).json({
            success:false,
            message:"Please fill all the required fields"
        })
    }

    await messagemodel.create({name,email,subject,message});
    res.status(200).json({
        success:true,
        message:"Message sent successfully"
    });
        
    } catch (error) {

        if(error.name=="ValidationError"){
            let errorMssg= "";
            if(error.errors.name){
                errorMssg += error.errors.name.message + " ";
            }
            if(error.errors.email){
                errorMssg += error.errors.email.message + " ";
            }
            if(error.errors.subject){
                errorMssg += error.errors.subject.message + " ";
            }
            if(error.errors.message){
                errorMssg += error.errors.message.message + " ";
            }
            return res.status(400).json({
                success:false,
                message:errorMssg,
            })

        }

        return res.status(500).json({
            success:false,
            message:"Something went wrong",
        })
        
    }
    
}
