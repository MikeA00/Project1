const mongoose= require('mongoose')
const OrderSchema = new mongoose.Schema({
    id :{
        type: String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now(),
    },
    quanttiy:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})
const exp=mongoose.model('order',OrderSchema)
module.exports =exp
