const express= require('express')
const router = express.Router()
const product= require('../model/product')
const multer= require('multer')
const path = require('path')
const { read } = require('fs')

router.get('/',(req,res)=>{
    res.render("admin",{msg:'',file:''})
})

const Storage= multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./public/uploads/')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname+path.extname(file.originalname))
    },
})
const upload= multer({
    storage:Storage,
    
}).single('myImg')

router.post('/',  (req, res)=> {
    upload(req,res,(err)=>{
        if(err){
            res.render('admin',{msg:err})
        } else {
            if(req.file== undefined ){
                console.log('right here')
                res.render('admin',{msg:'No File Selected'})
            }else{
                const newproduct= new product({
                    image:{
                        data:req.file.filename,
                        contentType:'image'
                    },
                    price:req.body.price,
                    quantity:req.body.quantity,
                    filename:req.file.filename
                })
                newproduct.save().then(()=>console.log('sucess')).catch((err)=> console.log(err))
                res.render('admin',{msg:'File Uploaded',file:'/uploads/'+req.file.filename})
            }
        }
    })
})

module.exports=router