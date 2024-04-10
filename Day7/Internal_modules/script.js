// const fs = require("node:fs");

// const data = fs.readFileSync("./myReadMe.txt");
// console.log(data);
// console.log(data.toString());

const fs = require("fs");
const data = fs.readFileSync("./myReadMe.txt", { encoding: "utf-8" });
console.log(data);
