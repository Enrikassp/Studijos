function createListInHtml() {
  const fruits = ["Obuolys", "Mangas", "Bananas", "Drakono vaisius", "Kriaušė"];
  const fruitsContainer = document.querySelector("#fruits");

  let html = "<ul>";
  for (let i = 0; i < fruits.length; i++) {
    html += `<li>${fruits[i]}</li>`;
  }
  html += "</ul>";
  fruitsContainer.innerHTML = html;
}

createListInHtml();

function createListInHtmlWhile() {
  const fruits = ["Obuolys", "Mangas", "Bananas", "Drakono vaisius", "Kriaušė"];
  const fruitsContainer = document.querySelector("#fruitsWhile");
  let html = "<ul>";

  let i = 0;

  while (i < fruits.length) {
    html += `<li>${fruits[i]}</li>`;
    i++;
  }

  html += `</ul>`;
  fruitsContainer.innerHTML = html;
}

createListInHtmlWhile();

function createListInHtmlMap() {
  const fruits = ["Obuolys", "Mangas", "Bananas", "Drakono vaisius", "Kriaušė"];
  const fruitsContainer = document.querySelector("#fruitsMap");
  let html = "<ul>";

  fruits.map((item) => {
    html += `<li>${item}</li>`;
  });

  html += `</ul>`;
  fruitsContainer.innerHTML = html;
}

createListInHtmlMap();

function createTableInHtml() {
  const columnNames = ["Eilės numeris", "Vardas", "Pavarde", "Amzius"];
  const namesColumn = ["Jonas", "Ponas", "Pomidoras"];
  const secondNameColumn = ["Storas", "Plonas", "Baklažanevičius"];
  const ageColumn = [28, 32, 36];
  let heading = ``;

  columnNames.map((item) => {
    heading += `<th>${item}</th>`;
  });
  let html = `
    <thead>
      <tr>
        ${heading}
      </tr>
    </thead>
    <tbody>
  `;

  for (let i = 0; i < namesColumn.length; i++) {
    console.log(secondNameColumn[i]);
    html += `
    <tr>
      <td>${i + 1}</td>  
      <td>${namesColumn[i]}</td>
      <td>${secondNameColumn[i]}</td>
      <td>${ageColumn[i]}</td>
    </tr>
  `;
  }

  html += `
  </tbody>
`;
  const tableCont = document.querySelector("#table");
  tableCont.innerHTML = html;
}

createTableInHtml();
