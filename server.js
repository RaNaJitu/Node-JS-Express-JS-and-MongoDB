require('dotenv').config();
const express = require('express')
const app = express();
const connectDB = require('../Real-Time-Pizza/app/config/db')
const ejs = require('ejs')
const path = require('path')  //? HERE WE ARE USE PATH NPM
const expressLayout = require('express-ejs-layouts') //!import the express-ejs-layouts
const PORT = process.env.PORT || 8080  //? it is checking 3000 port is assign or not 
//const mongoose = require('mongoose') //~% import the MONGOOES

//~* DATABASE CONNECTION
//#                             || pizza is a DATABASE name
// const url = 'mongodb://localhost/pizza';
// //* process.env.MONGO_CONNECTION_URL
// //#                     ||this is object to configure the mongoDB
// mongoose.connect(url, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
// const connection = mongoose.connection;
// connection.once('open', ()=> {
//     console.log('Database connected...'); //* if connection is open then msg is display on console
// }).catch(err => {
//     console.log('Connection failed...') //^ here we are cathing the connections error
// });
connectDB();
//~# Assets
app.use(express.static('Public'))

//~^ set tempalte engine
app.use(expressLayout);
app.set('views',path.join(__dirname) + '/resources/Views')
app.set('view engine', 'ejs');

//~* routes setting
//# when we are use layout make sure this routes setting is always below the template engine
//# otehrwise it is not working
require('./routes/web')(app)

app.listen(PORT, ()=>{
    console.log(`Listening on Port ${PORT}`)
})