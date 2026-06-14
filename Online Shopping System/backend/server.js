import db from './config/db.js';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.listen(5000,()=>{
    console.log("Seerver is running on the port 5000");
});