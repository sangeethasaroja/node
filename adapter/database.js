const {connect}=require('mongoose');
require('dotenv').config();

connect(process.env.url)
.then(()=>{
    console.log("mongodb connected");
})
.catch(err=>
{
    console.log(err);
})
