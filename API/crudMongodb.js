const express=require('express')
const app=express();
const dbconnect=require('../Mongodb/dbconnect');
const mongodb=require('mongodb')
app.use(express.json())
//read data
app.get('/',async(req,res)=>{
    let db=await dbconnect();
     let data=await db.find().toArray();
    
     res.send(data)

})
//insert data
app.post('/',async(req,res)=>{
  let data=await dbconnect();
  let result=await data.insertOne(req.body)
  res.send(result)

})
//update data
 app.put('',async(req,res)=>{
      let data=await dbconnect();
      // req.param.name is used to update value 
      //which is coming by browser or client in the form of parameter
      // just change app.put('/:name(parameter name)') and {req.param.name(parameter)}
       // parameter can be anything
      let result=await data.updateOne(
        {age:12},{$set:req.body}
      )

    res.send({result:"updated"})


 })

//delete data
app.delete('/:id',async(req,res)=>{
 let data=await dbconnect();
 let result=await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
 res.send(result)
 if(result.deletedCount ){
  console.log("data deleted");
 }
 else{
  console.log("no data found");
 }

})

app.listen(5000)