//! Here we are written web related routes
const homeController = require('../app/HTTP/controllers/homeController') //# here we are consuming the controller
const authController = require('../app/HTTP/controllers/authController')
const cartController = require('../app/HTTP/controllers/customers/cartController')
const initRoutes = (app)=> {
    // app.get('/',(req, res)=>{
    //     res.render('home');
    // })
    app.get('/',homeController().index)
    app.get('/cart',cartController().cart)
    app.get('/login',authController().login)
    app.get('/register',authController().register)  //? here we are doing call the controller 
}
module.exports = initRoutes