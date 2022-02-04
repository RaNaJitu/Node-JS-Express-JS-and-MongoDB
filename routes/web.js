//! Here we are written web related routes
const homeController = require('../app/HTTP/controllers/homeController') //# here we are consuming the controller
const authController = require('../app/HTTP/controllers/authController')
const cartController = require('../app/HTTP/controllers/customers/cartController')
const orderController = require('../app/HTTP/controllers/customers/orderController')
const AdminOrderController = require('../app/HTTP/controllers/admin/orderController')

//~% middleware
const guest = require('../app/HTTP/middlewares/guest')
const auth = require('../app/HTTP/middlewares/auth')
const admin = require('../app/HTTP/middlewares/admin')



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

    //~* customer Routes
    app.post('/orders', auth, orderController().store)
    app.get('/customer/orders', auth, orderController().index)

    //~^ Admin Routes
    app.get('/admin/orders', admin, AdminOrderController().index)
}
module.exports = initRoutes