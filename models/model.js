const {model, Schema}=require('mongoose')
let TraineeSchema=new Schema(
    {
        name:{
            type:String,
            trim: true,
            lowercase: true,
            require:[true,"Name is Mandatory"],
            minLength:[2,"Name should be contained atleast 3 charactor,your entered:{VALUE}"],
            maxLength:[30,"Name should be contain atmost 30 character,your data:{VALUE}"],
        },
        subject:{
            type:String,
            require:[true,"subject is Mandatory"],
            minLength:[3,"subject should be contained atleast 3 charactor,your entered:{VALUE}"],
            maxLength:[30,"subject should be contain atmost 30 character,your data:{VALUE}"]
        },
        exprience:{
            type:Number,
            default:0,
            require:[true],
            min:[0,"minimum exprience 0 your enter:{VALUE}"],
            max:[10,'maximum exprience 10 your entered:{VALUE}']
        },
        contact:{
            type: String,
            minLength: [10, "No should have minimum 10 digits,YOUR ENTERED {VALUE}"],
            maxLength: [10, "No should have maximum 10 digits,your entered:{VALUE}"],
            match: [/\d{10}/, "no should only have digits"]
        }
    },
    {timestamps:true}
);

module.exports=new model("trainee",TraineeSchema)
