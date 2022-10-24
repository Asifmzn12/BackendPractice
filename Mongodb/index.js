// const {MongoClient} =require('mongodb')
// const url='mongodb://localhost:27017';
// const database='ecom'
// const client=new MongoClient(url)
// async function getdata(){
//   let result=await client.connect();
//   let db=result.db(database)
//   let collections=db.collection('products')
//   let res=await collections.find({}).toArray();
//   console.log(res);


// }
// getdata();


// const {MongoClient}=require('mongodb')
// const url='mongodb://localhost:27017'
// const database='ecom'
// const client=new MongoClient(url)
// async function getdata(){
//  let result=await client.connect();
//    let db=result.db(database)
//    let collection=db.collection('products')
//    let resp= await collection.find({}).toArray();
//    console.log(resp);



// }
// getdata()

// const {MongoClient}=require('mongodb')
// const url='mongodb://localhost:27017'
// const database='ecom'
// const client=new MongoClient(url);
// async function getdata(){
//   let result=await client.connect()
//   let db=result.db(database)
//   let collection=db.collection('products')
//   let res=await collection.find({}).toArray()
//   console.log(res);
  
// }
// getdata();

 
        // require another file from another folder 
        // for database connection
// const dbconnect=require('./dbconnect')

// dbconnect().then((res)=>{
//     res.find({}).toArray().then((data)=>{
//         console.log(data);
//     })
// })


// Reading of data from mongodb
// handle promise with the help of arrow function
// // const dbconnect=require('./dbconnect')
// const main=async()=>{
//     let data=await dbconnect();
//      data= await data.find({}).toArray();
//      console.log(data);
  
// } 
// main();

 