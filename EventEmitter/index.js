const express=require('express')
const EventEmitter=require('events')
const app=express();
const event=new EventEmitter();

event.on("countapi",()=>{
    console.log("event called");
})

app.get('/',(req,res)=>{
  res.send("home page");
   event.emit("countapi")


})






app.listen(5000)