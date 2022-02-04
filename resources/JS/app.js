//console.log('my name is jitu')
import axios from 'axios' //^ this import from nude_modules folder
import Noty from 'noty'  //!this is for notification status 
import { initAdmin } from './admin'  //here we  are import the admin.js files
let addToCart = document.querySelectorAll('.add-to-cart')  //>  addToCart in this variable data come in the form of array type
let cartCounter = document.querySelector('#cartCounter')  //count addToCart
const updateToCart = (pizza)=>{
    //! here we are doing send the request to server then clicked pizza add to the cart
    //! so we are use axios package to add the cart 
    axios.post('/update-cart',pizza).then((res)=>{
        console.log(res);
        cartCounter.innerText = res.data.totalQty  //here we are dynamically changing the cart values 
        new Noty ({
            type:'success',
            timeout:1000,
            progressBar:false,
            // layout: 'bottomLeft',
            text: 'Item added to cart'
        }).show();
    }).catch(err=>{
        new Noty ({
            type:'error',
            timeout:1000,
            progressBar:false,
            // layout: 'bottomLeft',
            text: 'Something Went Wong'
        }).show();
    })
}

addToCart.forEach((btn)=> {
    btn.addEventListener('click',(e)=>{
        //#pre define method    variable to set in data method home.ejs page
        //let pizz = btn.dataset.pizza  //> here we are doing get the data while click to button in JSON string formate
        let pizza = JSON.parse(btn.dataset.pizza)  //this JSON string data  convert into object
        updateToCart(pizza)
        //console.log(pizz);
        console.log(pizza);
    })
});

//# Remove alert message after X seconds
const alertMsg = document.querySelector('#success-alert')
if(alertMsg){
    setTimeout(()=>{
        alertMsg.remove();
    }, 2000)
}

initAdmin(); //here we are calling this function because we want all code from admin.js 
