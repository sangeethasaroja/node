const trainee=require('../models/model');

let addTrainer=async (req,res,next)=>{
    try{
    let {name,subject,exprience,contact}=req.body;
    let newTrainee=await trainee.create({name,subject,exprience,contact});
     res.status(202).json({error:false,message:"data added successfully",data:newTrainee})
    }
    catch(err){
        res.status(400).json({error:true,message:err.message})
    }
}
let getTrainer=async (req,res,next)=>{
    try{
        let getTraine=await trainee.find({})
        if(!getTraine)
        {
            throw new Error("database empty");
        }
        res.status(200).json({error:false,message:"all data fetched",data:getTraine})
    }
    catch(err)
    {
        res.status(400).json({error:true,message:err})
    }
}
let getOneTrainer=async (req,res,next)=>{
    try{
        let {id}=req.params;
        // let getone=await trainee.findById(id)
        let getone=await trainee.findOne({_id:id})
        if(!getone)
        {
            throw new Error("ID NOT FOUND");
        }
        res.status(200).json({error:false,message:`fetched data ${id} successfully`,data:getone})
    }
    catch(err)
    {
        res.status(400).json({error:true,message:err.message})
    }
}
let updateTrainee=async(req,res,next)=>{
    try{
        let {id}=req.params;
        let{name,subject,exprience,contact}=req.body;
        let getdata=await trainee.findOne({_id:id})
        if(!getdata)
        {
            throw new Error("ID NOT FOUND");
        }
        let updatetrainee=await trainee.findOneAndUpdate({_id:id},{name,subject,exprience,contact},{new:true,runValidators: true});
        res.status(202).json({error:false,message:`updated ${id} successfully`,data:updatetrainee})
    }
    catch(err)
    {
        res.status(400).json({error:true,message:err.message});
    }
}
let deleteTrainee=async(req,res,next)=>{
   try{
    let {id}=req.params;
    let findId=await trainee.findOne({_id:id})
    if(!findId)
    {
        return res.status(404).json({error:true,message:"ID Not Found"})
    }
    await trainee.findOneAndDelete({_id:id});

    res.status(200).json({error:false,message:`${findId.name} trainer data deleted`})
   }
   catch(err)
   {
    res.status(400).json({error:true,message:err.message});
   }
}

module.exports={addTrainer,getTrainer,getOneTrainer,updateTrainee,deleteTrainee};