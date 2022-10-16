const mongoose= require('mongoose')

const connectDB= async()=>{
    try{
        const conn = await mongoose.connect("mongodb+srv://Michael:sentuop1A@cluster0.57yfsuc.mongodb.net/?retryWrites=true&w=majority",{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            
        })
        console.log(conn.connection.host)
    }catch(err){
        console.log(err)
        process.exit(1)

    }
}
module.exports=connectDB