// const fs = require("node:fs");

// const data = fs.readFileSync("./myReadMe.txt");
// console.log(data);
// console.log(data.toString());

// const fs = require("fs");
// const data = fs.readFileSync("./myReadMe.txt", { encoding: "utf-8" });
// console.log(data);

// const fs = require("fs");
// fs.writeFileSync("./logs.txt", "makng ths file with write file sync");

// const fs = require("fs");
// console.log("Start");
// const data = fs.readFileSync("./myReadMe.txt", { encoding: "utf-8" });
// console.log(data);
// console.log("End");

// **********PROMISES THROUGH FILE SYTEM***************************

// const fsPromises = require("fs/promises");
// console.log("Start");
// const pr = fsPromises.readFile("./myReadMe.txt", { encoding: "utf8" });
// console.log(pr);
// pr.then((res) => {
//   console.log(res);
// });
// console.log("End");

// *****************CALLBACK IN FILE SYYSTEM********************

// const fs = require("fs");

// fs.readFile("./myReadMe.txt", { encoding: "utf8" }, (err, data) => {
//   console.log(data);
// });

// ****************HTTP MODULE*******************

// const http = require("http");
// const server = http.createServer((req, res) => {
//   console.log("Reqest Recived");
//   console.log(req.url);
//   res.writeHead(200, {
//     "content-type": "text/html",
//   });
//   res.end("<h1>HI KAMAL<h1><h2>How are You?<h2>");
// });

// server.listen(1400, () => {
//   console.log("****************Server Startted!...........");
// });

// *****************MINI PROECT******************

const http = require("http");

const htmlTemplate = `
<!DOCTYPE HTML>
    <html>
        <head>

        </head>
        <body>
            _PRODUCTS_CARDS_
        </body>
    </html>
`;

const cardTemplate = `
<div class='product-card'>
<h4>_TITLE_</h4>
<p>_INFO_<p>
`;
const page = htmlTemplate.replace("_PRODUCTS_CARDS_", cardTemplate);
const server = http.createServer((req, res) => {
  //   console.log("Reqest Recived");
  console.log(req.url);
  res.writeHead(200, {
    "content-type": "text/html",
  });
  res.end(page);
});

server.listen(1400, () => {
  console.log("****************Server Startted!...........");
});
