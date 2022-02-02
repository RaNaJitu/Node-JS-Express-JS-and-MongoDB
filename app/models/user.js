const mongoose = require('mongoose')
const Schema = mongoose.Schema  //~> if the we are use capital latter it means this is class and constructor
//~^ this is way to call the class and constructor
const userSchema = new Schema({  //# this is blue print of our table
    name:{type:String, require: true},
    email:{type:String, require: true, unique:true},
    password:{type:String, require: true},
    role:{type:String,default:'customer'}
},{timestamps:true}); 

//~% in this model user there has two parameter 1st is model name first latter  should be capital
//~% and  second parameter is schema name an this schema is defined above
const User = mongoose.model('User', userSchema)  //# this is creating a model

module.exports = User;  //! here we are doing export the model because we are import in controller and 
                        //! after that we run the database quarry

 //module.exports = mongoose.model('User', userSchema)       //* other way to export the models    