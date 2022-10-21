const express= require('express')
const router = express.Router()
const product =require('../model/product')
const order= require('../model/order')

router.get('/',(req,res)=>{
    product.find({}).then((data)=>{
        res.render('product',{data:data})
        console.log(data)
    }).catch((err)=>{
        console.log(err)
    })
})

router.get('/:id',(req,res)=>{
    product.find({_id:req.params.id}).then(datas=>{
        res.render('modal',{data:datas[0]})
    }).catch (err=>{
        console.log(err)
    })
})
router.post('/',(req,res)=>{
    //console.log('\n'+req.body.id + "\n "+req.body.quantity+"\n "+req.body.fullname+ "\n " +req.body.phone)
    product.updateOne({_id:req.body.id},{$set:{quantity:11}})
    .then(()=>console.log('success'))
    .catch((err)=>console.log('1'+err))
    const neworder= new order({
        id :req.body.id,
        quanttiy:req.body.quantity,
        name:req.body.name,
        phone:req.body.phone,
        address:"Addis Ababa,Ethiopia"
    })
    neworder.save().then(()=>console.log('sucess')).catch((err)=> console.log(err))
    product.find({}).then((data)=>{
        res.render('product',{data:data})
    }).catch((err)=>{
        console.log(err)
    })
    
})
module.exports=router

