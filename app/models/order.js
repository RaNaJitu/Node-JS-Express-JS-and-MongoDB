const momgoose = require('mongoose');
const Schema = momgoose.Schema;

const orderSchema = new Schema({
    customerId:{
        type: momgoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    items:{type:Object, required:true},
    phone: {type:String, required:true},
    address: {type:String, required:true},
    paymentType: {type:String, default:'COD'},
    status: {type:String, default:'order_placed'}
},{ timestamps:true})

module.exports = momgoose.model('Order',orderSchema)