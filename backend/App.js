import  express  from "express";
import { connectiondb } from "./Databsae/dbconnection.js";
import dotenv from "dotenv";
import messageRouter from "./Router/messageRouter.js";
import cors from "cors";

const app = express();

dotenv.config({path:"./config/.env"});

app.use(cors({
    origin:process.env.FRONTEND_URL,
    methods:["POST"],
    credentials:true

}))

//router middleware

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
   res.json({
    success:true,
    message:"Server is up and running,Welcome to event Planner",
   })
})
app.use("/api/message",messageRouter);

connectiondb();

export default app;