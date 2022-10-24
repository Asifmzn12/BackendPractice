const {MongoClient}=require('mongodb')
const url="mongodb://localhost:27017"
const database='ecom'
const client=new MongoClient(url)
async function dbconnect(){
  let result=await client.connect();
  let db=await result.db(database)
  return db.collection('products')

}
module.exports=dbconnect
