//console.log('my name is jitu')
import axios from 'axios' //^ this import from nude_modules folder
let addToCart = document.querySelectorAll('.add-to-cart')  //>  addToCart in this variable data come in the form of array type
const updateToCart = (pizza)=>{
    //!here we are doing send the request to server then clicked pizza add to the cart
    //! so we are use axios package to add the add 
    axios.post('/upda')
}

addToCart.forEach((btn)=> {
    btn.addEventListener('click',(e)=>{
        //#pre define method    variable to set in data method home.ejs page
        let pizz = btn.dataset.pizza  //> here we are doing get the data while click to button in JSON string formate
        let pizza = JSON.parse(btn.dataset.pizza)  //this JSON string data  convert into object
        updateToCart(pizza)
        console.log(pizz);
        console.log(pizza);
    })
});