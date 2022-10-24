const mongoose=require('mongoose')
const productSchema=new mongoose.Schema({
    name:String,
    class:Number,
    age:Number
})
  
   module.exports=mongoose.model('products',productSchema)