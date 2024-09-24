const colors = [
  "red",
  "magenta",
  "violet",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "brown",
  "black",
  "white",
  "gray",
  "cyan",
  "teal",
  "indigo",
  "lime",
  "navy",
  "gold",
  "silver",
];

function first(masyvas) {
  return masyvas[0];
}

console.log("Pirmo masyvo elemento gavimas: " + first(colors));

function last(masyvas) {
  const masyvo_ilgis = masyvas.length;
  return masyvas[masyvo_ilgis - 1];
}

console.log("Paskutinio masyvo elemento gavimas: " + last(colors));

function secondLast(masyvas) {
  const masyvo_ilgis = masyvas.length;

  if (masyvo_ilgis > 2) {
    return masyvas[masyvo_ilgis - 2];
  } else {
    return false;
  }
}

console.log("Priešpaskutinio masyvo elemento gavimas: " + secondLast(colors));

console.log(
  "Priešpaskutinio masyvo elemento gavimas: " + secondLast(["tekstas"])
);

function doesExist(masyvas, reiksme) {
  if (masyvas.indexOf(reiksme) >= 0) {
    return "Rastas elementas masyvo indekse " + masyvas.indexOf(reiksme);
  } else {
    return "Elementas masyve buvo nerastas";
  }
}

console.log(doesExist([1, 2, 3], 4));
console.log(doesExist([1, 2, 3], 2));
console.log(doesExist(colors, "yellow"));
console.log(doesExist(colors, "infrared"));

console.log(colors.join(", "));

const text =
  "Alice_ . _Bob_ . _Charlie_ . _David_ . _Eve_ . _Frank_ . _Grace_ . _Hannah_ . _Isaac_ . _Jack_ . _Karen_ . _Liam_ . _Mia_ . _Nathan_ . _Olivia_ . _Peter_ . _Quinn_ . _Rachel_ . _Sophia_ . _Tom";

const employees = text.split(" . ").map((name) => name.replaceAll("_", ""));

console.log(employees);

function createHtmlList(masyvas, rezimas) {
  const sarasas1 = document.querySelector(".sarasas1");

  if (rezimas === undefined) {
    sarasas1.innerHTML = `<ol>${masyvas
      .map((item) => `<li>${item}</li>`)
      .join("")}</ol>`;
  } else if (rezimas === "ne skaicius") {
    sarasas1.innerHTML = "";
  } else if (rezimas === "nenumeruotas") {
    sarasas1.innerHTML = `<ul>${masyvas
      .map((item) => `<li>${item}</li>`)
      .join("")}</ul>`;
  } else if (rezimas === "numeruotas") {
    sarasas1.innerHTML = `<ol>${masyvas
      .map((item) => `<li>${item}</li>`)
      .join("")}</ol>`;
  }
}

createHtmlList(employees, "numeruotas");

function generateHtmlTable(people, colors) {
  const reversedColors = colors.reverse();
  let table = '<table border="1"><tr><th>Žmogus</th><th>Spalva</th></tr>';

  people.map((person, index) => {
    table += `<tr><td>${person}</td><td>${reversedColors[index]}</td></tr>`;
  });

  table += "</table>";
  return table;
}

const people = ["Jonas", "Petras", "Ona", "Dalia"];

document.querySelector(".uzduotis").innerHTML = generateHtmlTable(
  people,
  colors
);
