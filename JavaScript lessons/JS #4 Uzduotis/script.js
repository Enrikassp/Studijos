const vardas = "Enrikas", //string
  algosDydis = 800, // number
  metaloKainaTona = 588.7; // number
let balansas = 100; // number

initialize();

function isleistiPinigus() {
  const islaiduInput = document.querySelector("#islaidu-input");
  const islaidos = +islaiduInput.value;

  atimtiNuoBalanso(islaidos);
}

function atimtiNuoBalanso(islaidos) {
  // Jei islaidos yra ne skacius arba islaidos yra negiamos - baigiame funkciją
  if (isNaN(islaidos) || islaidos < 0) return;

  if (balansas >= islaidos) {
    balansas -= islaidos;
    updateBalance();
  } else {
    alert("Neturite pakankamai pinigų");
  }
}

function pridetiPinigus() {
  const pridejimuInput = document.querySelector("#inaso-input");
  const pridejimas = +pridejimuInput.value;

  pridetiPrieBalanso(pridejimas);
}

function pridetiPrieBalanso(suma) {
  if (isNaN(suma) || suma < 0) return;
  balansas += suma;
  updateBalance();
}

function gautiAlga() {
  balansas += algosDydis;
  updateBalance();
}

function parduotiMetala() {
  const metaloInput = document.querySelector("#metalo-input");
  const metalas = +metaloInput.value;

  metaloPardavimas(metalas);
}

function metaloPardavimas(kiekis) {
  if (isNaN(kiekis) || kiekis < 0) return;
  console.log(kiekis);
  if (kiekis > 0) {
    balansas += (kiekis / 1000) * metaloKainaTona;
  }
  updateBalance();
}

function initialize() {
  const greetingElement = document.querySelector("#greeting");
  greetingElement.innerText = greetingElement.innerText.replace(
    "{vardas}",
    vardas
  );
  updateBalance();
}

function updateBalance() {
  const balanceElement = document.querySelector("#balance");
  balanceElement.innerText = `Jūsų balansas: ${balansas} €`;
}
