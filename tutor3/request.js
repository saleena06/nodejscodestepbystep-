const http = require('http');

const server = http.createServer((req,res) => {
    console.log(req.method);
    if(req.url=="/"){
    res.write("<h1>home page</h1>");
    }else if(req.url=="/login"){
        res.write("<h1>login page</h1>");
    }else{
        res.write("<h1>other page</h1>");
    }
    res.end();
    
})
server.listen(5600); 