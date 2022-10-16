const mongoose= require('mongoose')
const Schema= mongoose.Schema;

const productSchema = new Schema({
    Title:{
        type:String,
        required:true
    },
    Content:{
        type:String,
        required:true
    }
})
const exp=mongoose.model('product',productSchema)
module.exports =exp

// image:{
//     type:String,
//     required:true
// }
// price:{
//     type:Number,
//     required:true
// }
// quantity:{
//     type:Number,
//     required:true
// }