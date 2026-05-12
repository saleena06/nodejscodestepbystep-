const http = require('http');
let age=24;
const server = http.createServer((req,res) => {
    res.setHeader("Content-Type","text/html");
    res.write(`
        <html>
        <head>
        <title>code step by step</title>
        </head>
        <body>
        <h1>hello jasmine saini</h1>
        <h2>${age}</h2>
        <h3>${new Date()}</h3>
        </body>
        </html>
        `)
    res.end();
    process.exit()

})
server.listen(4800);