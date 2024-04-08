// console.log("...APP Started");

// function callAPI(params) {
//   fetch(
//     "https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=ffc3755c37c147799c44793024549eec"
//   )
//     .then(() => {
//       return resizeBy.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// }

// callAPI();

console.log("...API STARTED");

function callAPI() {
  fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?=ffc3755c37c147799c44793024549eec"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      renderUI(data);
    });
}

const root = document.getElementById("root");
function renderUI(data) {
  const articles = data.articles;

  for (let i = 0; i < articles.length; i++) {
    const ar = articles[i];
    const div = document.createElement("div");
    div.setAttribute("class", "news-card");

    const h3 = document.createElement("h3");
    h3.innerText = ar.title;
    div.appendChild(h3);

    const img = document.createElement("img");
    img.src = ar.urlToImage;
    div.appendChild(img);

    const p = document.createElement("p");
    p.innerText = ar.description;
    div.appendChild(p);

    root.appendChild(div);
  }
}

// renderUI();

callAPI();
