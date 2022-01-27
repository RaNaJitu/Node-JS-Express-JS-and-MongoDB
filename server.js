const express = require('express')
const app = express();
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')
const PORT = process.env.PORT || 3000  //? it is checking 3000 port is assign or not 
app.get('/',(req, res)=>{
    // const pp = (path.join(__dirname) + '/resources/Views')
    // res.send(pp)
    res.render('home');
})
//~# Assets
app.use(express.static('Public'))

//~^ set tempalte engine
app.use(expressLayout);
const jj = app.set('views',path.join(__dirname) + '/resources/Views')
app.set('view engine', 'ejs');
app.listen(PORT, ()=>{
    console.log(`Listening on Port ${PORT}`)
})