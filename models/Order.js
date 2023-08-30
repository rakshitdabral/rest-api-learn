const mongoose = require("mongoose");
const validator = require("validator");

const orderSchema = new mongoose.Schema({
  key: {
    type: String,
  },
  buyerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: {
        type : Number,
        required : true,
      }
    },
  ],
  totalPrice: {
    type: Number,
  },
    status : {
        type : String,
        default : "pending"
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
});

const Order = new mongoose.model("Order", orderSchema);

module.exports = Order;
