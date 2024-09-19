const mongoose = require("mongoose")

const url = "mongodb://127.0.0.1:27017/Hotels"

mongoose.connect(url)

const db = mongoose.connection;

db.on('connected',()=>{
    console.log("Connection Sucessfully ")
})

db.on('error',(error)=>{
    console.error("MongoDB connection error",error)
})

db.on('disconnected',()=>{
    console.log("MongoDB disconnected!!!")
})

module.exports = db;


//this project is only for practice purpose .