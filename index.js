const express =require("express");
const bodyParser= require('body-parser')
const methodOverride= require('method-override')
const mongoose  = require('mongoose');
const app = express()


mongoose.connect("mongodb+srv://Michael:sentuop1A@cluster0.57yfsuc.mongodb.net/gabi?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true, 
})

app.set("view engine", "ejs")
app.use(bodyParser.json())
app.use(methodOverride('_method'))
app.use('/',require('./router/home'))
app.use('/Product',require('./router/product'))
app.use('/about_us',require('./router/about_us'))
app.use('/Delivery',require('./router/delivery'))
app.use('/admin',require('./router/admin'))

app.use(express.static('public'))
app.listen(3000)

