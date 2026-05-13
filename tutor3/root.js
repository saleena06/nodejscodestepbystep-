const http = require('http');
const userForm = require('./userForm')
const userDatasubmit = require('./userDatasubmit')
const arg = process.argv;
const port = arg[2];

http.createServer((req,res)=>{
    
    if(req.url=="/"){
 res.writeHead(200,{"Content-type":'text/html'});
    userForm(req,res);
    res.end();
}else if(req.url=="/submit"){
    userDatasubmit(req,res);

}
 //res.end();
    

}).listen(port);