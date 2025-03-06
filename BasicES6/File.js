const fs = require("fs");
const os = require("os");

console.log(os.cpus().length); // * cores

console.log("1");
//Blocking Operation =  Synchronous
const result = fs.readFileSync("Factorial.js", "utf-8");
console.log(result);

console.log("2");

//Non Blocking = Asynchronous
fs.readFile("Factorial.js", "utf-8", (err, res) => {
  console.log(res);
});

console.log("3");
