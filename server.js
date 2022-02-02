require('dotenv').config(); //~? this is use for .env files has to access here
const session = require('express-session'); //~# import the express-session package
const express = require('express')
const app = express();
//const connectDB = require('../Real-Time-Pizza/app/config/db')
const ejs = require('ejs')
const path = require('path')  //? HERE WE ARE USE PATH NPM
const expressLayout = require('express-ejs-layouts') //!import the express-ejs-layouts
const PORT = process.env.PORT || 8880  //? it is checking 3000 port is assign or not 
const mongoose = require('mongoose') //~% import the MONGOOES
const flash = require('express-flash') //~^ import the express-flash
//const { MongoStore } = require('connect-mongo');
const MongoDbStore = require('connect-mongo')(session);//* this is use for store the session in database
const passport = require('passport')

//~* DATABASE CONNECTION
//#                             || pizza is a DATABASE name
const url = 'mongodb://localhost/Pizza';
// //* process.env.MONGO_CONNECTION_URL
// //#                     ||this is object to configure the mongoDB
// mongoose.connect(url, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
// const connection = mongoose.connection;
// connection.once('open', ()=> {
//     console.log('Database connected...'); //* if connection is open then msg is display on console
// }).catch(err => {
//     console.log('Connection failed...') //^ here we are catching the connections error
// });
//connectDB();

// Create the database connection 
mongoose.connect(url);
const connection = mongoose.connection;
// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
    console.log('Mongoose  connection Successfully open ' + url);
  });

  // If the connection throws an error
mongoose.connection.on('error',function (err) { 
    console.log('Mongoose default connection error: ' + err);
  }); 

  // When the connection is disconnected
mongoose.connection.on('disconnected', function () { 
    console.log('Mongoose default connection disconnected'); 
  });

  // If the Node process ends, close the Mongoose connection 
process.on('SIGINT', function() {   
    mongoose.connection.close(function () { 
      console.log('Mongoose default connection disconnected through app termination'); 
      process.exit(0); 
    }); 
  }); 

  //~* Session store in database

  let mongoStore = new MongoDbStore({
    mongooseConnection:connection,
    collection:'sessions'
  });
//~?session config
//% session is does not work without cookies
//% cookies has need to encrypt and have require secret key
//% we don't have store the direct values of secret values so we have require dotenv package
//%session library is used as a middle ware
app.use(session({
  secret: process.env.COOKIE_SECRET,
  resave: false,
  store: mongoStore,
  saveUninitialized: false,
  cookie:{maxAge:1000*60*60*24}  //^ 24 hrs 
  //cookie:{maxAge:1000*15}  //^ 15 sec 
})); //> here we are using the session with express

//~# passport config
const passportInit = require('./app/config/passport')
passportInit(passport);
app.use(passport.initialize())
app.use(passport.session())

//~% here we are use the express flash
app.use(flash());

//!how store the session in the database use connect-mango package
//~# Assets
app.use(express.static('Public'))
//>by default express don't now which formate data is coming
app.use(express.urlencoded({extended:false})) //# we are defining data formate is come in the form of urlencoded
app.use(express.json()) //^ enable the json data what ever data come in json form

//~> Global Middleware
app.use((req,res, next)=>{
    res.locals.session = req.session;   //! this for getting the session values in view pages
    res.locals.user = req.user;
    next();
})

//~^ set template engine
app.use(expressLayout);
app.set('views',path.join(__dirname) + '/resources/Views')
app.set('view engine', 'ejs');

//~* routes setting
//# when we are use layout make sure this routes setting is always below the template engine
//# otherwise it is not working
require('./routes/web')(app)

app.listen(PORT, ()=>{
    console.log(`Listening on Port ${PORT}`)
})