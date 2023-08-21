const{Schema,model}=require('mongoose')

let userSchema=new Schema({
    fullname:{
        type:String,
        required:[true,'fullname is mandatory']
    },
    email:{
        type:String,
        required:[true,'Email is mandatory']
    },
    hasedotp:{
        type:String,
        required: true,
        default:"null"
    }
})
validationSchema.pre("save",async function(next)
{
    let salt=await bcryptjs.genSalt(11);
    this.password=await bcryptjs.hash(this.otp,salt);
    //  ? above moongose version5 donot use next()
    // next()
})

validationSchema.methods.compareMyPassword=async function(otp)
{
    let hasedpassword=await bcryptjs.compare(password,this.otp)
    return hasedotp;
}
module.exports=new model("user",userSchema)