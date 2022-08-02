const express = require ('express');
const router = express.Router();
const User = require('../models/user');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.urlencoded({extended: true})); 
app.use(express.json());


router.post('/api/signup', async (req, res) => {
    console.log("in user route");
    console.log(req.body.User.email);
    console.log("req body:");
    console.log(req.body);
        
    const user = new User({
        name: req.body.User.name,
        email: req.body.User.email,
        username: req.body.User.username,
        password: req.body.User.password
    });
    
    try{
    const savedUser = await user.save();
        res.json(savedUser);
        console.log("saved"+savedUser);
     }catch(err){
        res.json({ message: err });
     }   
});

router.post("/api/login", async (req,res) => {
    var flag=false;
    
        const pwd = req.body.User.password;
        
        const uname = req.body.User.username;

        // let getUser;
        
    
        await User.findOne({"username":uname}).then(function(getUser){
        // res.json(getUser);
        console.log("getUser"+getUser);
        if (getUser == null) {
            console.log("In null")
            res.json({"error": "This email address is not recognised, please check you have entered your email correctly"});
          } 
        else{
            console.log("In not null")
          if (pwd == getUser.password){
            console.log("Valid login")
            
            flag = true
            console.log(getUser);
            let payload={subject:getUser.username+getUser.password}
            let token = jwt.sign(payload,'secretKey')
            console.log("token is",token)
            res.status(200).send(token) 
            } 
          else{
            res.json({"error":"Sorry your password is incorrect"});
            console.log("Incorrect password");
          }
        }
        
    }
  )})
  
  module.exports = router;
