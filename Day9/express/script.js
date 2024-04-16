const express = require("express");
const fs = require("fs");

const app = express();

app.get("/api/products", (req, res) => {
  const data = fs.readFileSync("./data.json", "utf8");
  const obj = JSON.parse(data);
  res.json(obj);
  // console.log('Request Received')
  // res.send('<h1>Welcome GET</h1>');
});

// app.put('/products',(req, res)=>{
//     console.log('Request Received')
//     res.send('<h1>Welcome GET</h1>');
// })

// app.patch('/products',(req, res)=>{
//     console.log('Request Received')
//     res.send('<h1>Welcome GET</h1>');
// })

// app.delete('/products',(req, res)=>{
//     console.log('Request Received')
//     res.send('<h1>Welcome GET</h1>');
// })

app.listen(1400);
