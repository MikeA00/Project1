const mongoose= require('mongoose')
const OroductSchema = new mongoose.Schema({
    Id :{
        type: String,
        required:true
    },
    Date:{
        type:Date,
        default:Date.now(),
    },
    Quanttiy:{
        type:Number,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    Phone:{
        type:Number,
        required:true
    },
    Address:{
        type:String,
        required:true
    }
})
module.export=mongoose.model('order',OrderSchema)