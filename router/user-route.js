const express = require("express");
const {getUserDetails , userLogin , userSignup , deleteUser ,getUserAll} = require('../controller/user-controller')
const User = require("../models/User");

const router = express.Router();

router.post("/api/v1/signup", userSignup)
router.post('/api/v1/login', userLogin);
router.get('/api/v1/getUser',getUserDetails)
router.delete('/api/v1/deleteUser',deleteUser)
router.get('/api/v1/getall', getUserAll)

module.exports = router;
