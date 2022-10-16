const express= require('express')
const router = express.Router()
const product =require('../model/product')

router.get('/',(req,res)=>{
    product.find({}).then((data)=>{
        res.render('product',{data:data})
        console.log(data)
    }).catch((err)=>{
        console.log(err)
    })
})

router.get('/:id',(req,res)=>{
    res.render("modal")
})
module.exports=router

