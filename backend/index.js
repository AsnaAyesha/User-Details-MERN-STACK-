import express from 'express';
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './route/user.js';

const app = express();

//middleware
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

//routing
app.use("/users",router)

mongoose.connect("mongodb://localhost:27017/Details",
    err => {
        if(err) throw err;
        console.log("Connected to MongoDB")
    });

const PORT=8000;


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})







