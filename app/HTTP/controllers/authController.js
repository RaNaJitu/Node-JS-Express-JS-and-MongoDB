//~^ Here we are written logic of the project
const authController = ()=>{
    return{
        login(req, res) {
            res.render('auth/login.ejs');
        },
        register(req, res) {
            res.render('auth/register.ejs');
        }
    }
}
module.exports = authController