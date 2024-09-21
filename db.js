const mongoose = require("mongoose")
require('dotenv').config();

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
