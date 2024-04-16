// console.log('hello kamal');

const fs = require("fs");
const http = require("http");
const url = require("url");

const data = fs.readFileSync("./data.json", "utf8");
const dataObj = JSON.parse(data).products;
// console.log(dataObj);



const cardTemplate = `
<div clas'product-card'>
<h3>$TITLE$</h3>
<img src="$img_src$" alt='product-image' />
<a href="$product_links$">more info</a>
</div>
`;

let result = [];
for (let i = 0; i < dataObj.length; i++) {
  let temp = cardTemplate;
  temp = temp.replace("$TITLE$", dataObj[i].title);
  temp = temp.replace("$img_src$", dataObj[i].images[0]);
  temp = temp.replace("$product_links$", `/product?id=${i}`);
  // temp = temp.replace("$product_links$", `/product?id=${i}`);
  result.push(temp);
}
// console.log(result);

result = result.join(" ");
const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);

  console.log(query);
  if (pathname == "/home") {
    console.log(inputElement);
    res.end(inputElement+result);
  } else if (pathname == "/product") {
    const id = query.id;
    const productData = dataObj[id];
    // console.log(dataObj[id]);
    // res.end(productData.title);
    res.end(`
    
    <div>
    <a href="home">Home Page</a>
    <h1>${productData.title}</h1>
    <img src="${productData.images[0]}"/>
    <p>${productData.description}</p>
    <h4>Price ${productData.price}</h4>
    <h3> DiscountPercentage ${productData.discountPercentage} </h3>
    

    </div>
    `);
  } else {
    res.end("404 not found");
  }
  // res.end(result);
});

server.listen(1400);
