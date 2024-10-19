const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/connectDB');
const app =express();

app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials: true 

}))

const PORT = process.env.PORT || 8080;



app.get('/',(req,res) => {
    res.json({message:`server running on port: ${PORT}`})
})

connectDB().then(()=> {
    app.listen(PORT,()=> {
        console.log(`server running on ${PORT}`);
    })
})