const cartController = ()=>{
    return{
        cart(req, res) {
            res.render('customers/cart.ejs');
        }
    }
}
module.exports = cartController