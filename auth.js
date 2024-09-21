const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const Person = require('./models/person')

passport.use(new LocalStrategy(async (user,pass,done)=>{
    try {
        console.log("Recieved user credentials : ",user,pass)
        const userName = await Person.findOne({username:user})
        if(!userName){
            return done(null,false,{message:"Username invalid"})
        }
        const isPasswordMatch = userName.password === pass ? true:false;
        if(isPasswordMatch){
            return done(null,userName)
        }
        else{
            return done(null,false, {message:"Invalid Password"})
        }
    } catch (error) {
        return done(error)
    }
}))

module.exports = passport;