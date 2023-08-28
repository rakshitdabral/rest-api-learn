const User = require("../models/User");
const bcrypt = require("bcrypt");


// code to get every user detail

exports.getUserAll = async (req,res)=>{
  try{
    const data = req.body
    const user = await User.find(req.query);
    if(user){
        res.status(200).json({
            success: true,
            user,
          });
    }else{
      res.status(500).send("Sever Error");
    }
  }catch (err){
    res.send("something went wrong");
  }
}

// code to get user Details by id

exports.getUserDetails = async (req, res) => {
  try {
    const { _id } = req.body;
    const user = await User.findById(_id);
    if(user){
        res.status(200).json({
            success: true,
            user,
          });
    }else{
        res.status(404).send("User not found");
    }
  } catch (err) {
    res.status(500).send("server error");
  }
};

// code to login

exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
        
    if (!email && !password) {
      res.send("Enter Valid Email and Password");
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).send("Invalid credentials.");
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).send("Invalid credentials.");
    }else{  
        res.status(200).send("login successful");
    }

    
  } catch (error) {
    res.status(500).send("Error logging in.");
  }
};

// code to register

exports.userSignup = async (req, res) => {
  try {
    const { username, password, phone, email } = req.body;

    const userEmailExist = await User.findOne({ email: email });
    const userPhoneExist = await User.findOne({ phone: phone });

    if (userEmailExist || userPhoneExist) {
      res.send("user already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name: username,
      password: hashedPassword,
      phone: phone,
      email: email,
    });
    console.log(user);
    await user.save();
    res.status(201).send("User registered successfully.");
  } catch (error) {
    res.status(500).send("Error registering user.");
  }
};




//user delete only available to admins
exports.deleteUser = async (req, res) => {
    try{
        const {_id} = req.body
        
        const user = await User.findByIdAndDelete(_id)
        if(!user)
        res.status(404).send("user not found")
        else
        res.status(200).send("user deleted")
    }
    catch(err){
        res.send("error deleting user")
    }
}