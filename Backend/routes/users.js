const express = require ('express');
const router = express.Router();
const User = require('../models/user');
const app = express();

app.use(express.urlencoded({extended: true})); 
app.use(express.json());


router.post('/signup', async (req, res) => {
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

router.post("/login", async (req,res) => {
    var flag=false;
    console.log("check")
        console.log(req.body.User);
        const pwd = req.body.User.password;
        console.log("pwd",pwd)
        const uname = req.body.User.username;
        console.log("uname",uname);
    try{
        const getUser = await User.findOne({"username":uname}); 
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
            res.send("Login successful")
            flag = true
            console.log(getUser);
            
            } 
          else{
            res.json({"error":"Sorry your password is incorrect"});
            console.log("Incorrect password");
          }
        }
        }catch(err){
            console.log("In error /book");
            res.json({message: err})
        }
    }
  );


module.exports = router;