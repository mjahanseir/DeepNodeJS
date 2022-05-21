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

const EventEmitter = require("events");

const Logger = require("./logger");
const logger = new Logger();

logger.on("messageLogged", (arg) => console.log("Listener called", arg));

logger.log("message");
