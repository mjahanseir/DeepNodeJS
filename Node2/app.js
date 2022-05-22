//global objects
// console.log();

// setTimeout();
// clearTimeout();

// setInterval();
// clearInterval();

// window.console.log
// window.setTimeout

// global.console.log
// global.setTimeout

// var message = "";
// console.log(global.message);

// const log = require("./logger");
// log("hello");

// const path = require("path");

// var pathobj = path.parse(__filename);
// console.log(pathobj);

// const os = require("os");
// var tot = os.totalmem();
// var mem = os.freemem();
// var oss = os.version();

// console.log(`Total Memory ${tot}`);
// console.log(`Free Memory ${mem}`);
// console.log(`Free Memory ${oss}`);

// const fs = require("fs");
// var fss = fs.readdirSync("./");
// console.log(fss);

// var fsa = fs.readdir("$", function (err, file) {
//   if (err) console.log("Error", err);
//   else console.log("Result", file);
// });
// console.log(fss);

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello world");
    res.end();
  }
});
server.listen(3000);

console.log("Listen on port 30000");
