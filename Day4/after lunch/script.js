// const res = document.querySelector("div");

// const c = document.querySelector("p");
// const c = document.querySelector("p:nth-of-type(2)");

// console.log(res);

// res.remove();
// res.removeChild(c);

function getInfo() {
  const d = document.querySelector("div");
  const el = document.createElement("p");
  el.innerText = "my name is kamal";
  d.prepend(el);
  console.log("Btn clicked");
  d.prepend(hi);
}
