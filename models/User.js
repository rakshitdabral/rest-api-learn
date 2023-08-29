const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    key : {
        type : String,
    },
    name:{
        type : String,
        required : true,
    },
    password :{
        type : String,
        required : true,
        
    },
    phone:{
        type: Number,
        minlength : 10,
        maxlength : 10,
        unique : [true, "Phone Number already present"],
    },
    email :{
        type: String,
        required: true,
        unique : [true, "Email already present"],
        
    },
    role : {
        type : String,
        enum : ['SELLER', 'BUYER', 'BOTH'],
        default : 'BOTH'
    }
})

//collection
const User = new mongoose.model('User', userSchema);

module.exports = User;