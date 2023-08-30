const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('../db/connection');

const User = require('../models/User');
const Product = require('../models/Product');
const Order = require('../models/Order');

const userRouter = require('../router/user-route');
const productRouter = require('../router/product-route');
const orderRouter = require('../router/order-route');

const app = express()

app.use(cors({
    origin : "http://localhost:3000/",
    methods : "GET,POST,PUT,DELETE",
    credentials : true

}))
app.use(express.json())
app.use(cookieParser());
app.use(userRouter)
app.use(productRouter)
app.use(orderRouter)

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})