const fs = require("fs");
setTimeout(() => console.log("this is setTimeout 1"), 2000);
fs.readFile( './new', () => {
console.log("this is readFile 1");
});