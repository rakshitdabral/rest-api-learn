const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
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
        unique : [true, "Email already present"],
    },
    email :{
        type: String,
        required: true,
        unique : [true, "Email already present"],
        
    },
    address : [
        {
            addressline1 : String
        }
    ]

})

//collection
const User = new mongoose.model('User', userSchema);

module.exports = User;