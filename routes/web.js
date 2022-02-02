//! Here we are written web related routes
const homeController = require('../app/HTTP/controllers/homeController') //# here we are consuming the controller
const authController = require('../app/HTTP/controllers/authController')
const cartController = require('../app/HTTP/controllers/customers/cartController')
const guest = require('../app/HTTP/middlewares/guest')
const initRoutes = (app)=> {
    // app.get('/',(req, res)=>{
    //     res.render('home');
    // })
    app.get('/',homeController().index)
    app.get('/login', guest, authController().login)
    app.post('/login',authController().postLogin)
    app.get('/register', guest, authController().register)  //? here we are doing call the controller 
    app.post('/register',authController().postRegister)   
    app.get('/cart',cartController().cart) //# 1st parameter is routes and 2nd parameter is controller name
    app.post('/update-cart',cartController().update);
    app.post('/logout', authController().logout)
}
module.exports = initRoutes