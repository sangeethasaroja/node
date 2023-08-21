const {emailInvitation,sendOtp } = require("../helper/userMailHelper");
let User=require('../models/user.models')

let createUser=async (req,res,next)=>
{
try{
    let {fullname,email,role}=req.body;
    let isUserAvailable=await User.findOne({email});
    if(isUserAvailable)
    {
        return res.status(500).json({error:true,message:"user already exists"})
    }
    let user=await User.create({fullname,email,role})
    emailInvitation(email,fullname,role)
    return res.status(201).json({error:false,message:"user added successfully",data:user})
}
catch(err)
{
    next(err);
}
}
let userLogin=async (req,res,next)=>{
    try{
        let {email}=req.body
        let isUserAvailable=await User.findOne({email});

        if(!isUserAvailable)
        {
            return res.status(500).json({error:true,message:"user not found given mail ${email}"})
        }
        let otp=Math.floor(Math.random()*899999+100000);
        let user=await User.findOneAndUpdate({email},
        {hasedotp:otp},{new:true,runValidators:true})

        sendOtp(user.fullname,email,otp)

        return res.status(201).json({error:false,message:"user otp updated successfully",data:user})
    }
    catch(err)
    {
        next(err);
    }
}


module.exports={
    createUser,userLogin
}