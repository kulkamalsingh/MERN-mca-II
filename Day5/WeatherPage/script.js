console.log("weather app");

function fetchAPI(params) {
  const url =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?key=V5QWY8Y5E73VJ2QHC2N7TK36D";

  fetch(url)
    .then((res) => res.json())
    .then(renderUI);
}

function renderUI(params) {
  const days = data.days;
  console.log(days);

  const row = document.createElement("tr");

  const cell1 = document.createElement("th");
  cell1.innerText = "Date";
  row.appendChild(cell1);

  const cell2 = document.createElement("th");
  cell2.innerText = "Maximun Temp";
  row.appendChild(cell2);

  const cell3 = document.createElement("th");
  cell3.innerText = "Maximun Temp";
  row.appendChild(cell3);

  root.append(row);

  const childRow = document.createElement("tr");
  const c1 = document.createElement("td");
  c1.innerText = "07-04-24";
  row.appendChild(c1);

  const c2 = document.createElement("td");
  c2.innerText = "104 F";
  row.appendChild(c2);

  const c3 = document.createElement("td");
  c3.innerText = "90 F";
  row.appendChild(c3);

  root.append(childRow);
}

fetchAPI();
