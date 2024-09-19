const express = require('express')
const router = express.Router();
const Person = require('./../models/person')

router.post('/', async(req,res)=>{
    try {
        const data = req.body
        const newPerson = new Person(data)
        const response = await newPerson.save()
        res.status(202).json(response)
        console.log("data recieved")
    } catch (error) {
        console.log(error)
        res.status(500).send({error:"Internal Server Error!!!"})
    }
    
})

router.get('/',async (req,res)=>{
    try {
        const data = await Person.find();
        console.log("Data Fetched")
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        res.status(500).send({error:"Internal Server Error!!!"})
    }
})

router.get('/:workType',async (req,res)=>{
    try {
        const workType = req.params.workType
        const response = await Person.find({work:workType})
        res.status(202).json(response)
    } catch (error) {
        console.log(error)
        res.status(500).send({error:"Internal Server Error!!!"})
    }
})

router.put('/:id',async (req,res)=>{
    try {
        const newId = req.params.id;
        const update = req.body;
        const response = await Person.findByIdAndUpdate(newId,update,{
            new:true,
            runValidators:true
        })
        if(!response){
            return res.status(404).json({error:"Person not Found !!!"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({error:"Internal Server Error!!!"})
    }
})

router.delete('/:id',async (req,res)=>{
    try {
        const newId  = req.params.id;
        const response = await Person.findByIdAndDelete(newId)
        if(!response){
            return res.status(404).json({error:"Person not Found !!!"})
        }
        console.log("Data deleted")
        res.status(200).json({message:"person deleted"})
    } catch (error) {
        console.log(error)
        res.status(500).send({error:"Internal Server Error!!!"})
    }
})

module.exports = router;