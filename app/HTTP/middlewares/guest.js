//~? this middleware is used when the customer is login after that the customer is not go 
//~? to the login pages by using login URL
const guest = (req, res, next)=>{
    if(!req.isAuthenticated()){
        return next();
    }
    return res.redirect('/')
}

module.exports = guest;