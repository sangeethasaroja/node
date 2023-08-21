const express=require('express');
require('dotenv').config();
require("./adapter/database");
let traineeroute=require('./routes/trainee.routes')
let  validationAndGmail=require("./routes/routes")

let app=express();
app.use(express.json());

app.use('/api/trainer',traineeroute);
app.use('/api/trainee',validationAndGmail);


// user routes
app.use('/api/user',validationAndGmail)

app.use('*',(req,res,next)=>{
    res.status(404).json({error:true,message:"page not found"})
})
app.use((err,req,res,next)=>{
  res.status(400).json({error:true,message:"ID NOT FOUND",error:err.message})
})


let port=process.env.PORT;
app.listen(port,()=>{
    console.log(`server running on ${port}`);
})