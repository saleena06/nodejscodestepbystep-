const http = require('http');
const fs = require('fs');
const { type } = require('os');
const queryString = require('querystring');
const arg=process.argv;
const port=arg[2];

http.createServer((req,res) =>{
fs.readFile('html/form.html','utf-8',(err,data)=>{
    
    if(err){
        res.writeHead(500,"Content-type",'text/plain');
        res.write("server error");
        
        return;
    }
   // res.writeHead(200,{"Content-type":'text/html'});
    if(req.url=='/'){
        res.write(data);
        res.end();
}else if(req.url=='/submit'){
    const dataBody =[];
    req.on('data',(chunk) =>{
        dataBody.push(chunk);

    });
    req.on('end',() =>{
        const rawData = Buffer.concat(dataBody).toString();
        const readableData = queryString.parse(rawData)
        console.log(readableData); 
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`

            <h1>Form Submitted</h1>

            <h2>Name: ${readableData.name}</h2>

            <h2>Email: ${readableData.email}</h2>
           

        `);
        let dataString = "my name is "+readableData.name + " and my email id is "+readableData.email;
        console.log(dataString);
        //fs.writeFileSync("text/"+readableData.name+".txt",dataString);
        fs.writeFile("text/"+readableData.name+".txt",dataString,'utf-8',(err)=>{
            if(err){
                res.end("internal server error");
                return false;
            }else{
                console.log("file created");   
            }
        })
        
        

        res.end();
        
    })
   // res.writeHead(200,{"Content-type":'text/html'});
  //  res.write("<h1>form submitted</h1>");
    //res.write(readableData.name,readableData.email);
    
   // res.end();

}})

}).listen(port)




// const http = require('http');
// const arg=process.argv;
// const port = arg[2];

// http.createServer((req,res) => {
//     res.writeHead(200,{"Content-type":'text/html'})
//     console.log(req.url);
//     if(req.url=='/'){
//     res.write(`
//         <form action="/submit" method="post">
//         <input type="text" placeholder="enter name" name='name'>
//         <input type="text" placeholder="enter email" name='email'>
//         <button>submit</button>
//         </form>
//         `);
//     res.end();
//     }
//     else if(req.url=='/submit'){
//         res.write("<h1>submitted response</h1>");
//         res.end();
//     }



// }).listen(port)
