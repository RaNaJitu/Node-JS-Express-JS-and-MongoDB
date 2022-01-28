const express = require('express')
const app = express();
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')
const PORT = process.env.PORT || 3000  //? it is checking 3000 port is assign or not 

//~# Assets
app.use(express.static('Public'))

//~^ set tempalte engine
app.use(expressLayout);
const jj = app.set('views',path.join(__dirname) + '/resources/Views')
app.set('view engine', 'ejs');

//~* routes setting
//# when we are use layout make sure this routes always below the template engine
app.get('/',(req, res)=>{
    res.render('home');
})
app.get('/cart',(req, res)=>{
    res.render('customers/cart.ejs');
})

app.get('/login',(req, res)=>{
    res.render('auth/login.ejs');
})

app.get('/register',(req, res)=>{
    res.render('auth/register.ejs');
})

app.listen(PORT, ()=>{
    console.log(`Listening on Port ${PORT}`)
})