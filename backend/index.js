import express from 'express';
import mongoose from "mongoose";
import router from './Router/user.js'
import bodyParser from 'body-parser';
import cors from 'cors';


const app = express();

app.use("/users",router)
app.use(cors())
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/userInfo',
    err => {
        if(err) throw err;
        console.log("Connected to MongoDB")
    });

const PORT=8000;


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})





// const URL= 'mongodb://localhost:27017/userInfo'
// const PORT =8000;
// mongoose.connect(URL, { useNewUrlParser: true }).then(() => { 

//     app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
// }).catch((error) => {
//     console.log('Error:', error.message)
// })


