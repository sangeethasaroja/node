const nodeMailer=require('nodemailer')

let transfer=nodeMailer.createTransport({
    service:'Gmail',
    auth:{
        user:"sangeetha.sssona@gmail.com",
        pass:"hdxqqoaqofgkebmq"
    }
})

let emailInvitation=async(email,name)=>{
    let mailOptions={
        from:'sangeetha.sssona@gmail.com',
        to:email,
        subject:'invitation Mail',
        html:`<h1>${name} thanks for registration</h1>`
    }
    transfer.sendMail(mailOptions,()=>{console.log("mail send successfully")})
}
let sendOtp=async (name,email,otp)=>{
    console.log(otp);
    let sendOtp={
        from:`sangeetha.ssona@gmail.com`,
        to:email,
        subject:`OTP mail`,
        html:`<h2>hello ${name}, your OTP ${otp}</h2>`,
    }
    transfer.sendMail(sendOtp,()=>{console.log("otp send successfully")})
}

module.exports={
    emailInvitation,
    sendOtp
}
