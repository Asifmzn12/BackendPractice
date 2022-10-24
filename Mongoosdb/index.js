

const mongoose = require('mongoose')

const main=async()=>{
  await mongoose.connect('mongodb://localhost:27017/ecom')
  const productSchema= new mongoose.Schema({
    name:String
  })
  // ADD
//   const productModel=mongoose.model('products',productSchema);
//   let data= new productModel({ name:"mohin khan",price:1000})
//   let result=await data.save();
//     console.log(result);


//DELETE 
// const deletedb=async()=>{
//     const product=mongoose.model('products',productSchema)
//     let data=await product.deleteOne({name:"mohin khan"})
//     console.log(data);
  
  
//    }

// deletedb()


// UPDATE
//  const update=async()=>{
//   const product= mongoose.model('products',productSchema)
//   let data=await product.updateOne(
//     {name:"ajay"},
//     {
//         $set:{name:"ajaykumar"}

//        })

//    console.log(data);
//  }

//  update();


//FIND 
// const find=async()=>{
//     const products= mongoose.model('products',productSchema)
//      let data=await products.find();
//      console.log(data);
   
// }
// find();
}
main();
 





