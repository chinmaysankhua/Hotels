const mongoose = require("mongoose")
require('dotenv').config();
// const url = "mongodb://127.0.0.1:27017/Hotels"
// const url = 'mongodb+srv://user2345:chinu12345@cluster0.zhjft7c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'


// const url = process.env.dbUrl;
const url = process.env.dbUrlLocal;

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