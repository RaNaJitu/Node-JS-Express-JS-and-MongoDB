//#fectory function is nothing but it is function to  return its object 
//#index is fectory function
const homeController = ()=>{
    return{
        index(req, res) {
            res.render('home')
        }
    }
}
module.exports = homeController