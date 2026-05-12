const http = require('http');

const userData=[
    {
        name:"manjot",
        age:54,
        email:"manjot@gmail.com"
    },
    {
        name:"simran",
        age:40,
        email:"simran@gmail.com"
    },
    {
        name:"shally",
        age:30,
        email:"shally@gmail.com"
    }
]


const server = http.createServer((req,res) => {
    res.setHeader("Content-Type",'application/json');
    res.write(JSON.stringify(userData));
    res.end();
    

});
 server.listen(6100);