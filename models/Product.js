const mongoose = require('mongoose');
const validator = require('validator');


const productSchema = new mongoose.Schema({
    key : {
        type : String,
    },
    sellerId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    name : {
        type : String,
        required : true,
    },
    desc : {
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required : true,
    },
    totalQuantity : {
        type : Number,
        required : true,
    },
    createdAt : {
        type : Date,
        default : Date.now,
    }
})

const Product = new mongoose.model('Product', productSchema);

module.exports = Product;