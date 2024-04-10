const fs = require("node:fs");

const data = fs.readFileSync("./myReadMe.txt");
console.log(data);
