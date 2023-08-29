const express = require("express");
const router = express.Router();
const Order  = require("../models/Order");

//create order
router.post("/api/v1/order", async (req, res) => {
    try{
        const  {}
    }catch(err){
        console.log(err);
        res.status(500).json({
            message : "Something went wrong"
        })
    }
})


module.exports = router;