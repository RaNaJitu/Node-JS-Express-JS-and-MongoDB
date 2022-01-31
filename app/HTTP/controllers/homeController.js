//#factory function is nothing but it is function to  return its object 
//#index is factory function

const Menu = require('../../models/menu')  //* here we are importing the model 
const homeController = ()=>{
    return{
        async index(req, res) {
            const pizza = await Menu.find();
            console.log(pizza);   //!here we are use async and await it is cleaner to other method
            return res.render('home', { pizzas : pizza});
        //     Menu.find().then(function(pizza){      //^here we are calling the Menu model
        //         console.log(pizza);
        //         return res.render('home', { pizzas : pizza})    //?pizzas is key and pizza is array of objects 
        //     })
         }
    }
}
module.exports = homeController