const autos = ["volvo", "audi", "bmw", "mercedes"];

function createList() {
  let html = "";

  for (let i = 0; i < autos.length; i++) {
    html += `<li>${autos[i]}</li>`;
  }

  const sarasas = document.querySelector("ul");
  sarasas.innerHTML = html;
}

function createListForIn() {
  let html = "";

  for (let i in autos) {
    html += `<li>${autos[i]}</li>`;
  }

  const sarasas = document.querySelector("ul");
  sarasas.innerHTML = html;
}

function createListForOf() {
  let html = "";

  for (const auto of autos) {
    html += `<li>${auto}</li>`;
  }

  const sarasas = document.querySelector("ul");
  sarasas.innerHTML = html;
}

// createListForIn();
createListForOf();
// createList();
