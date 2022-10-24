const dbconnect=require('./dbconnect')
 const insert=async ()=>{
 const db=await dbconnect();
   const result= await db.insertMany([
    {name:"sakib ali",Class:8,age:10},
    // {name:"sakib ali",Class:8,age:10},
    // {name:"sakib ali",Class:8,age:10}

   ])
   if(result.acknowledged){
    console.log("data inserted");
   }
 
 }
 insert()
 