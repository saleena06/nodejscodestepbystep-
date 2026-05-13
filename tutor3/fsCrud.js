const fs = require("fs");
//console.log(process.argv[2]);
const operation = process.argv[2];
if (operation == "write") {
  const name = process.argv[3];
  const content = process.argv[4];
  const fullname = "files/" + name + ".txt";

  fs.writeFileSync(fullname, content);
} else if (operation == "read") {
  const name = process.argv[3];
  const fullname = "files/" + name + ".txt";

  const data = fs.readFileSync(fullname, "utf-8");
  console.log(data);
} else if (operation == "update") {
  const name = process.argv[3];
  const content = process.argv[4];
  const fullname = "files/" + name + ".txt";
  fs.appendFileSync(fullname, content);
} else if (operation == "delete") {
  const name = process.argv[3];
  //const content = process.argv[4];
  const fullname = "files/" + name + ".txt";
  fs.unlinkSync(fullname);
} else {
  console.log("operation note found");
}

//fs.writeFileSync("files/apple.txt","this is a fruit");
//fs.writeFileSync("files/banana.txt","this is a fruit");

//fs.unlinkSync("files/banana.txt");
//const data = fs.readFileSync('files/apple.txt','utf-8');
//console.log(data);
//fs.appendFileSync("files/apple.txt","this is a good for health");
