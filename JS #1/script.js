console.log("Hello world!");

// STRING - tekstinė informacija
// NUMBER - skaitinė informacija
// BOOLEN - loginė informacija

// Tekstinės reikšmės kintamasis:
let tekstas = `gali būti parašyta praktiškai bet kas`;
console.log(tekstas);
// Skaitinės reikšmės kintamasis

let skaicius = 22;
console.log(skaicius);
// Loginio tipo informacija

let loginis = 10 < 22;
console.log(loginis);

// PIRMOJI DALIS

let vardas = "Enrikas";
let gimimoMetai = 2005;

let amzius = 2024 - gimimoMetai;
let pranesimas =
  "Mano vardas yra " + vardas + ". Aš gimiau " + gimimoMetai + " metais";
console.log(pranesimas);

// ANTROJI DALIS

let kainaUzVnt = 4.99;
let kiekis = 20;
let pvm = 21;

let kainaBePvm = kainaUzVnt * kiekis;
// kainaBePvm = kainaBePvm.toFixed(2);
console.log(kainaBePvm);

let mokesciai = (kainaBePvm * pvm) / 100;
let galutineSuma = kainaBePvm + mokesciai;
console.log(galutineSuma);
