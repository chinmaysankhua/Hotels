const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{type:Number},
    phone:{type:Number},
    work:{type:String, required:true},
    address:{type:String},
    salary:{type:Number},
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true,unique:true}

})

const Person = mongoose.model('Person', personSchema);

module.exports = Person;