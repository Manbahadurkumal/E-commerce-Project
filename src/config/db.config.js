require("dotenv").config()
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_DB_URL,{
    dbName: process.env.MONGO_DB_NAME
}).then(() =>{
    console.log("MOngo db connected successfully...")
})
.catch((err) =>{
    console.log("error while connecting Mongodb...")
    process.exit(1)
})