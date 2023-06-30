import express,{json, Request, Response} from "express"
import "express-async-errors";
import httpStatus from "http-status";
import router from "@/routes/weapons.router";
import errorHandler from "../src/middlewares/error-middleware";

const app = express();
app.use(json())

app.get("/health",(req:Request , res: Response) =>{
    res.sendStatus(httpStatus.OK);
})
app.use(router)
app.use(errorHandler)
const port : number = parseInt(process.env.PORT) || 5000;

app.listen(port,()=>{
    console.log(`Running in port: ${port}`)
})