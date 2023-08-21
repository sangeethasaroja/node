let express=require('express');
const { signUp, LoginData } = require('../controller/authentication');
const {createUser,userLogin}=require('../controller/user.controller')


let route=express.Router();

route.post("/signtrainee",signUp)
route.post("/logintrainee",LoginData)

//  user api
route.post('/sign',createUser)
route.post('/login',userLogin)

module.exports=route