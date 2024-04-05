// let a = new String("Hello");
// let b = "Hello";

// console.log(a);
// console.log(b);

// const obj = {
//   name: "kamal",
//   lastName: "Singh",
// };

// console.log(obj);
// document.write(obj);

// const obj = {
//   name: "kamal",
//   lastName: "Singh",
// };

// obj.age = 20;
// console.log(obj);

// const obj = {
//   name: "kamal",
//   lastName: "Singh",
// };

// obj.name = 20;
// console.log(obj);  we can't write again = in front of obj but wehave to focus on key value pair

// let arr = [1, 2, 3, 4];
// arr = [3.4, 5];
// console.log(arr);

// const arr = [1, 2, 3, 4];
// arr[10] = 20;
// arr.push(12);
// console.log(arr);
// console.log(typeof obj);
// console.log(typeof arr);
// console.log(typeof null);
// console.log(typeof undefined);

// const obj = {
//   name: "kamal",
//   lastName: "Singh",
// };

// const arr = [1, 2, 3, 4];

// console.log(Array.isArray(obj));
// console.log(Array.isArray(arr));
// console.log(Array.isArray(null));
// console.log(Array.isArray(undefined));

// function checkIfObject(x) {
//   if (Array.isArray(x)) {
//     console.log("not object");
//   } else if (typeof x == "object") {
//     console.log("object");
//   } else {
//     console.log("not object");
//   }
// }

// checkIfObject([]);

// const arr = ["name", 1, 2, 3, 4, true];

// const obj = {
//   name: "ajay",
//   age: 20,
// };

// for (let i = 0; i < 2; i++);
// {
//   console.log(i);
// }

// for (let i = 0; i < 2; i++);
// {
//   console.log([obj(i)]);
// }

// for (let i of arr) {
//   console.log(i);
// }
// for (let i of obj) {
//   console.log(i);
// }
// for (let i in arr) {
//   console.log(i);
// }
// for (let i in obj) {
//   console.log(i);
// }

// window

// console.log(window);

// console.log(innerHeight);
// console.log(innerWidth);

// console.log(window.document);
// console.log(window);
// console.dir(window.document);
// console.dir(window);

// seletors

// const res = document.getElementsByTagName("h3");

// console.log(res);

// const res = document.getElementById("ht3");

// console.log(res);

// const res = document.getElementById("t1");

// console.log(res);

// const res = document.getElementById("t1");

// console.dir(res);

// const res = document.querySelectorAll("h3");

// console.log(res);

// const res = document.querySelectorAll("div>h3");

// console.log(res);

const ne = document.createElement("h3");
console.log(ne);

ne.innerText = "Dynamic text";
console.log(ne);

// document.body.appendChild(ne);
const firstDiv = document.getElementsByTagName("div");
firstDiv[0].appendChild(ne);
firstDiv[0].remove(ne);
