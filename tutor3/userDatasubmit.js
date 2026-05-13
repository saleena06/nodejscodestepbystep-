const queryString = require("querystring");
function userData(req, res) {
  const dataBody = [];
  req.on("data", (chunk) => {
    dataBody.push(chunk);
  });
  req.on("end", () => {
    const rawData = Buffer.concat(dataBody).toString();
    const readableData = queryString.parse(rawData);
    let dataString =
      "my name is " +
      readableData.name +
      " and my email id is " +
      readableData.email;
    console.log(dataString);

    console.log(readableData);

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`

            <h1>Form Submitted</h1>

             <h2>Name: ${readableData.name}</h2>

             <h2>Email: ${readableData.email}</h2>
             <h1>you can get user data from here</h1>
           

         `);
    res.end();
  });
  // });
  //  let dataString = "my name is "+readableData.name + " and my email id is "+readableData.email;
  // console.log(dataString);
}
//res.write(`<h1>you can get user data from here</h1>`);

module.exports = userData;
