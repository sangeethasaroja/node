const mongoose=require('mongoose')
let bcryptjs=require('bcryptjs')
let validationSchema=new mongoose.Schema(
    {
        name:
        {
            type:String,
            required:[true,"Name is mandatory"],
        },
        email:
        {
            type:String,
            required:[true,"mailId is mandatory"],
            unique:true
        },
        password:
        {
            type:String,
            required:[true,"please is mandatory"],
            minLength:[8,"password should be contain maximum 8 charactor your entered only{VALUE} charactor"]
        }
    },
    {timestamps:true}
);

//! donot use arrow fn
validationSchema.pre("save",async function(next)
{
    let salt=await bcryptjs.genSalt(11);
    this.password=await bcryptjs.hash(this.password,salt);
    //  ? above moongose version5 donot use next()
    // next()
})

validationSchema.methods.compareMyPassword=async function(password)
{
    let hasedpassword=await bcryptjs.compare(password,this.password)
    return hasedpassword;
}

module.exports=new mongoose.model("traineevalitation",validationSchema);