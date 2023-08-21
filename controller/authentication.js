let teacher=require("../models/validation.model")
let Joi=require('joi')
let bcryptjs=require('bcryptjs')
let  {invitationmail}=require("../helper/mailHelper")

let validationSchema=Joi.object({
    name:Joi.string().min(3).max(30).required(),
    email:Joi.string().required().email(),
    password:Joi.string().min(8).required()
})

let signUp=async (req,res,next)=>{
  try{
    let {name,email,password}=req.body
    // let salt=await bcryptjs.genSalt(10);
    // let hasedpassword=await bcryptjs.hash(password,salt)
    let {value,error}=validationSchema.validate({name,email,password})
    if(error)
    {
        return res.status(400).json({error:true,message:"validation failed",err:error})
    }
    let isfindData=await teacher.findOne({email})
    if(!isfindData)
    {
        invitationmail (email,name);
        let signData=await teacher.create(value)
        return res.status(201).json({error:false,message:"data added success",data:signData})
    }
     res.status(409).json({error:true,message:"email id already present"})
  }
  catch(err)
  {
    next(err);
  }
}

let LoginData=async (req,res,next)=>{
    try{
        let {email,password}=req.body
        let isEmailAvailable=await teacher.findOne({email})
        if(!isEmailAvailable)
        {
           return res.status(404).json({error:true,message:"email Id not found"})
        }
        // let hasedpassword=await bcryptjs.compare(password,isEmailAvailable.password)
        // if(isEmailAvailable.password===password)
        let hasedpassword=await isEmailAvailable.compareMyPassword(password)
        if(hasedpassword)
        {
            return res.status(201).json({error:false,message:"login successfully"})
        }
        res.status(401).json({error:true,message:"Invalid authentication"})
    }
    catch(err)
    {
        next(err)
    }
}

module.exports={
    signUp,LoginData
}
