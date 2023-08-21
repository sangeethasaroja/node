const express=require('express');
const routers=express.Router();
let {addTrainer, getTrainer, getOneTrainer, updateTrainee, deleteTrainee}=require('../controller/controller');

routers.post('/addtrainer',addTrainer);
routers.get('/getalltrainer',getTrainer)
routers.get('/getonetrainer/:id',getOneTrainer)
routers.put('/updatetrainer/:id',updateTrainee)
// routers.patch('/updatesingledata/:id',)
routers.delete('/deletetrainer/:id',deleteTrainee)


module.exports=routers