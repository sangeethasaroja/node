const nodemailer=require('nodemailer');

let invitationmail=async(email,name)=>{
    let transport=nodemailer.createTransport({
        service:"Gmail",
        auth:{
            user:"sangeetha.sssona@gmail.com",
            pass:"hdxqqoaqofgkebmq"
        }
    })

    transport.sendMail({
        from:"sangeetha.sssona@gmail.com",
        to:email,
        subject:'invitation mail',
        html:`<h1>thanks for registering ${name} </h1>`
    },()=>{console.log("mail send successfully")})
}



module.exports={
    invitationmail
}