// // console.log('apple1');
// // setTimeout(()=>{
// //     console.log('apple2');
// // },2000)

// // console.log('apple3');
const fs = require('fs');

//  fs.readFile("text/tajinder.txt",'utf-8',(err,data)=>{
//    if(err){
//     return false;
//    }
//     console.log(data);
//  })
//  console.log("end script");
const data= fs.readFileSync("text/gurjeet.txt",'utf-8',);
console.log(data);
console.log("end script");