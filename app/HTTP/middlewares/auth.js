//~# This middleware is used when the customer without login don't go that pages by putting URL
const auth = (req, res, next)=>{
    if(req.isAuthenticated()){
        return next()
    }
    return res.redirect('/login')
}

module.exports = auth;