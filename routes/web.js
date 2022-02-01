//! Here we are written web related routes
const homeController = require('../app/HTTP/controllers/homeController') //# here we are consuming the controller
const authController = require('../app/HTTP/controllers/authController')
const cartController = require('../app/HTTP/controllers/customers/cartController')
const initRoutes = (app)=> {
    // app.get('/',(req, res)=>{
    //     res.render('home');
    // })
    app.get('/',homeController().index)
    app.get('/login',authController().login)
    app.get('/register',authController().register)  //? here we are doing call the controller 
    app.get('/cart',cartController().cart) //# 1st parameter is routes and 2nd parameter is controller name
    app.post('/update-cart',cartController().update);
}
module.exports = initRoutes