const express = require("express");
const Product = require("../models/Product");
const router = express.Router();


// create product list 
router.post("/api/v1/createlist", async (req, res) => {
  try {
    const {vendor ,productdetails, productcall} = req.body; 
    
    const product = new Product({
        owner : vendor,
        productdetails,
        productcall
    })
    console.log(product);
    await product.save();
    res.status(201).send("product registered successfully.");
  } catch (err) {
    res.send("something went wrong");
  }
});

// get product list

router.get("/api/v1/showlist", async (req, res) => {
        try{
            const product = await Product.find();
            if(product){
                res.status(200).send(product);
            }else{
                res.status(404).send("Product not found")
            }
            
        }catch(err){
            res.send("something went wrong"); 
        }
})



module.exports = router;