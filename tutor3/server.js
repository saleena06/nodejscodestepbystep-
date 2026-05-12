const http = require('http');
http.createServer((req,res) => {
    res.write("<h1>Hello,this is saleena saini1234</h1>");
    res.end("hello...");

}).listen(4800);

http.createServer((req,res) => {
    res.write("<h2>hii,how are you</h2>");
    res.end("done");

}).listen(5800);