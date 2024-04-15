// console.log('hello kamal');

const fs = require("fs");
const http = require("http");


const data = fs.readFileSync("./data.json", "utf8");
const dataObj = JSON.parse(data).products;
// console.log(dataObj);

const cardTemplate = `
<div clas'product-card'>
<h3>$TITLE$</h3>
</div>
`;

const result = [];
for (let i = 0; i < dataObj.length; i++){
    result.push(cardTemplate);
}
console.log(result);
const server= http.createServer((req, res) => {
    res.end(cardTemplate)
});

server.listen(1400);
