const express = require("express");
const router = express.Router();
const Order  = require("../models/Order");
const Product = require("../models/Product");

//create order
router.post("/api/v1/order", async (req, res) => {
    try{
        const  buyerId = req.body.buyerId
        const productId = req.body.productId
        const {quantity} = req.body
       
        const product = await Product.find({_id : productId})
        let counter = 0 
        let totalPrice = 0
        while( counter < product.length){
            totalPrice = totalPrice + product[counter].price* Number(quantity)
            counter++
        }
        const order = new Order({
            buyerId,
            products : [
                {
                    productId,
                    quantity
                }
            ],
            totalPrice
        })
        if(order){
            await order.save();
            res.status(201).send("order created successfully")
        }else{
            res.status(400).send("order not created")
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message : "Something went wrong"
        })
    }
})

// get all orders fix karna hai abhi

router.get("/api/v1/order", async (req, res) => {
    try{
        
        const orders = await Order.find(req.query)
        if(!orders){
            res.status(404).send("order not found")
        }else{
            res.status(200).json(orders)
        }
        
    
    }catch(err){
        console.log(err);
        res.status(500).json({
            message : "Something went wrong"
        })
    }
})

//update status 

router.put("/api/v1/order/:id/status", async (req, res) => {
    try{
        const {statusRequested} = req.body
        const order = await Order.findById(req.params.id)
        order.update({status : statusRequested})
        res.status(200).send("order updated successfully")
    }catch(err){
        console.log(err);
        res.status(500).json({message:"something went wrong"})
    }
})
module.exports = router;