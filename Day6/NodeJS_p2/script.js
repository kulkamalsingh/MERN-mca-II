// var figlet = require("figlet");

// figlet("Hi, KAMAL", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

// fetch("").then((res) => {
//   return res.json();
// });

// ************ASYNC AWAIT***************

// async function getApi() {
//   const pr = await fetch(
//     "https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=cfa557f7993d4388b4de9ed96b398fe8"
//   );
//   const data = await pr.json();
//   console.log(data);
// }
// getApi();

// console.log("Start");

// async function callAPI() {
//   const pr1 = new Promise((res, rej) => {
//     console.log("Promised 1 started");
//     setTimeout(() => {
//       console.log("timeout 1...");
//     }, 10000);
//   });
//   console.log("Promise 1 completed");
// }

// async function callAPI() {
//   const pr2 = new Promise((res, rej) => {
//     console.log("Promised 2 started");
//     setTimeout(() => {
//       console.log("timeout 2...");
//     }, 10000);
//   });
//   console.log("Promise 2 completed");
// }

// callAPI();

// console.log("END");

// console.log("start");

// async function callAPI() {
//   const pr1 = await new Promise((res, rej) => {
//     console.log("promise 1...");
//     setTimeout(() => {
//       res("done");
//     }, 10000);
//   });
//   console.log("promise 1 completed");
// }

// callAPI();
// console.log("END");
