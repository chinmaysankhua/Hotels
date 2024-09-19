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
    salary:{type:Number}

})

const Person = mongoose.model('Person', personSchema);

module.exports = Person;