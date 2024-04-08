console.log("weather app");

function fetchAPI(params) {
  const url =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?key=GQPSP9JCPBS3M58ERC9S76MNL";

  fetch(url)
    .then((res) => res.json())
    .then(renderUI);
  // .then((res) => {
  //   return res.json();
  // })
  // .then((data) => {
  //   renderUI(data);
  // });
}

function renderUI(data) {
  const days = data.days;
  console.log(days);

  const row = document.createElement("tr");

  const cell1 = document.createElement("th");
  cell1.innerText = "Date";
  row.appendChild(cell1);

  const cell2 = document.createElement("th");
  cell2.innerText = "Maximum Temp";
  row.appendChild(cell2);

  const cell3 = document.createElement("th");
  cell3.innerText = "Minimum Temp";
  row.appendChild(cell3);

  root.append(row);

  const childRow = document.createElement("tr");
  const c1 = document.createElement("td");
  c1.innerText = "07-04-24";
  childRow.appendChild(c1);

  const c2 = document.createElement("td");
  c2.innerText = "121 F";
  childRow.appendChild(c2);

  const c3 = document.createElement("td");
  c3.innerText = "90 F";
  childRow.appendChild(c3);

  root.append(childRow);
}

fetchAPI();
