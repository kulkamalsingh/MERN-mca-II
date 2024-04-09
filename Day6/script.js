// console.log("start");

// setTimeout(() => {
//   console.log("timeout......");
// }, 0);

// console.log("end");
setTimeout(() => {
  console.log("timeout....1..");
}, 2000);
console.log("start");

setTimeout(() => {
  console.log("timeout....2..");
}, 0);

console.log("intermidiate");

console.log("end");
