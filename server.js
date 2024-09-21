
const express = require("express")
const app = express()
const db = require('./db')
const personRoutes = require('./routes/personRoutes')
const passport = require('./auth')

require('dotenv').config()

const port = process.env.PORT || 3000;

app.use(passport.initialize());


const bodyParser = require('body-parser');
app.use(bodyParser.json());

const logRequest = (req,res,next)=>{
    console.log(`${new Date().toLocaleString()} Request made to : ${req.originalUrl}`);
    next();
}
app.use(logRequest);  

const localMiddleware =  passport.authenticate('local',{session:false})
app.get('/',localMiddleware, (req,res)=>{
    res.send("Welcome to my Hotel How can We HELP YOU");
})


app.use('/person',personRoutes)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });

