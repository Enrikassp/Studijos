const spalvuMasyvas = [
  {
    red: 0,
    green: 0,
    blue: 0,
  },
];

function getRgb(spalva) {
  return `rgb(${spalva.red}, ${spalva.green}, ${spalva.blue})`;
}

console.log(getRgb({ red: 0, green: 255, blue: 255 }));

function createBox() {
  const redInputValue = document.querySelector("#redColorInput").value;
  const greenInputValue = document.querySelector("#greenColorInput").value;
  const blueInputValue = document.querySelector("#blueColorInput").value;

  generateBox(redInputValue, greenInputValue, blueInputValue);
  saveToLocalStorage();
}

function saveToLocalStorage() {
  const defaultColor = [{ red: 0, green: 0, blue: 0 }];
  localStorage.setItem("spalvos", JSON.stringify(defaultColor));
}

function generateBox(red, green, blue) {
  let html = `
      <div class='kvadratas' style="background-color:rgb(${red}, ${green}, ${blue});"></div>
  `;

  const kvadratoKontaineris = document.querySelector(".kvadratoKontaineris");

  kvadratoKontaineris.innerHTML = "";
  kvadratoKontaineris.innerHTML = html;
}
