import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import VoucherRoute from "./routes/VoucherRoute.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(VoucherRoute);

app.listen(process.env.APP_PORT, ()=>{
    console.log('Server up and Running..')
});