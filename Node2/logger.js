// (function (exports, require, module, __filename, __dirname) {
// console.log(__filename);
// console.log(__dirname);

const EventEmitter = require("events");

// const emitter = new EventEmitter();

var url = "http://mylogger.io/log";

class Logger extends EventEmitter {
  log(message) {
    console.log(message);
    //Raise an Event
    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}
module.exports = Logger;

// module.exports.log = log;

// exports.log = log;
// });
