const mongoose = require('mongoose');

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URL);

        const connection = mongoose.connection

        connection.on("connected",()=> {
            console.log("connected to DB");
        })

        connection.on('error',(error)=> {
            console.error("something is wrong in mongoDB",error);
        })
    }catch (error){
        console.error("someting is wrong ,", error);
    }

}

module.exports = connectDB