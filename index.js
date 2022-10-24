   // Creating server 
  // var http=require('http')
// http.createServer((req,res)=>{
//     res.write("hello from server")
//     res.write("hello from server")
//     res.end();
// }).listen(8000)


// // Creating api
// var data=require("./home/data")
//   var http=require('http')
//   http.createServer((req,res)=>{
//   res.writeHead(201,{'content-type':'application\json'});
//   res.write(JSON.stringify(data))
//   res.end();




//   }).listen(8080)


  
//  // input through command line
//   var fs=require ('fs')
//   var input=process.argv;
// //   fs.writeFileSync(input[2],input[3])
//  fs.unlinkSync(input[2])

// creating folder and file through node

// var fs=require('fs')
// fs.mkdir('sample',(err)=>{
//    throw err;
// })
// fs.writeFileSync("text.txt","this is text file")


// removing  folder and file through node
//  var fs=require('fs')

// fs.unlinkSync("text.txt")
// fs.rmdir("sample",(err)=>{
//     console.log("file does not exist");
// })


// var fs=require('fs')
// console.log(__dirname);
// fs.mkdir("data",(err)=>{
//     console.log(err);
//})

// how to get newly created directory path and add some files on it 
// var fs=require('fs')
// // fs.writeFileSync('sample.txt',"data is here")
// var path=require('path')
// var dirPath=path.join(__dirname,'data')
// // console.log(dirPath);
// for(var i=0;i<5;i++){
//     fs.writeFileSync(dirPath+"/sample"+i+".txt","this is data of sample"+i+"file")
// }






