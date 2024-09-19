const express = require("express")
const app = express()
const db = require('./db')
const personRoutes = require('./routes/personRoutes')

require('dotenv').config()
const port = process.env.PORT || 3000;



const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req,res)=>{
    res.send("Welcome to my Hotel How can We HELP YOU");
})

app.get('/chicken',(req,res)=>{
    let biryani = {
        name:"Chicken biryani",
        qty:"3 plates",
        curd:true,
        soup:true
    }
    res.status(202).send(biryani)
})


app.use('/person',personRoutes)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });