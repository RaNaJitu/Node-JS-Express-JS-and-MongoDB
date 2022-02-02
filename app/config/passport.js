const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user')
const bcrypt =  require('bcrypt')
const init = (passport)=>{
    passport.use(new LocalStrategy({usernameField: 'email'}, async(email, password, done)=>{
        //Check email is Exist or not
        const user = await User.findOne({email : email })
        if(!user){
            return done(null, false, {message : 'Username is does not Exist'})
        }
        bcrypt.compare(password, user.password).then(match =>{
            if(match){
                return done(null, user, {message: 'Logged in successfully'})
            }
            return done(null, false, { message: 'Wrong username or password'})
        }).catch(err =>{
            return done(null, false , {message: 'Something Went Wrong'})
        })
    }))
    //# this is use to store the data inside session
    passport.serializeUser((user,done) =>{
        done(null, user._id)
    })
    //!session  data get how to use
    passport.deserializeUser((id, done)=>{
        User.findById(id, (err, user)=>{
            done(err, user)
        })
    })
}
module.exports = init; //this line of code is written because import to the server.js files