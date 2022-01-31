const mongoose = require('mongoose')
const Schema = mongoose.Schema  //~> if the we are use capital latter it means this is class and constructor
//~^ this is way to call the class and constructor
const menuSchema = new Schema({  //# this is blue print of our table
    name:{type:String, require: true},
    image:{type:String, require: true},
    price:{type:Number, require: true},
    size:{type:String, require: true}
}); 

//~% in this model menu there has two parameter 1st is model name first latter  should be capital
//~% and  second parameter is schema name
const Menu = mongoose.model('Menu', menuSchema)  //# this is creating a model

module.exports = Menu;  //! here we are doing export the model because we are import in controller and 
                        //! after that we run the database quarry

                        