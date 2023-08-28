const mongoose = require('mongoose');
const validator = require('validator');

const productSchema = new mongoose.Schema({
    owner: {
        type : String,
        required : true,
    },
    productdetails: [
        {
            productname : String,
            quantity : Number,
            quantityunit : String,
            price : Number,
        }
    ],
    productcall : {
        type : String,
        enum : ['BUY', 'SELL'],
        default : 'BUY'
    }

})

const Product = new mongoose.model('Product', productSchema);

module.exports = Product;