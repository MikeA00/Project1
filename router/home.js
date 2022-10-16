const express= require('express')
const router = express.Router()

const product= require('../model/product')

router.get('/',async (req,res)=>{ 
    console.log(product)
    product.find({}).then((data)=>{
        res.render('home',{data:data})
        console.log(data)
    }).catch((err)=>{
        console.log(err)
    })
    
})
module.exports=router