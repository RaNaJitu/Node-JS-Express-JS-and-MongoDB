const { application } = require('express')
const Order = require('../../../models/order')
const moment = require('moment')
const orderController = ()=>{
    return{
        store(req, res){
            //# validate request
            const {phone, address} =req.body
            if(!phone || !address){
                req.flash('error', 'All fields are required')
                return res.redirect('/cart')
            }
            const order = new Order({
                customerId : req.user._id,
                items: req.session.cart.items,
                phone,
                address
            })
            order.save().then(result =>{
                req.flash('success', 'Order placed Successfully' )
                delete req.session.cart
                return res.redirect('/customer/orders')
            }).catch(err =>{
                req.flash('error', 'something Went Wrong')
                return res.redirect('/cart')
            })
            console.log(req.body);
        },
        async index(req, res){
            const order = await Order.find({ customerId: req.user._id}, 
                null, 
                { sort:{ 'createdAt': -1 } } )  //#this code is used for sort the data
            res.render('customers/orders', { orders:order, moments: moment})
            console.log(order);
        }
    }
}

module.exports = orderController