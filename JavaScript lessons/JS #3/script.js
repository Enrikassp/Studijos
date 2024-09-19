let zodis = "tekstas";

console.log(typeof zodis); // string
console.log(zodis); // tekstas

// textKintamasis.length gražina simbolių kiekį tekste
let tekstoIlgis = zodis.length; // 7

// textKintamasis.charAt(skacius)
// duoda raidę iš viso teksto pagal indeksavimo pozicija
let tamTikrasSimbolisTekste1 = zodis.charAt(0); // 't'
let tamTikrasSimbolisTekste2 = zodis.charAt(100); // ''
let tamTikrasSimbolisTekste3 = zodis[1]; // 'e'

let vaisiai = "Obuolys, Bananas, Kivis";
console.log(vaisiai);

// 1. Tekstas nuo 9 simbolio iki 16 simbolio
let antrasVaisius = vaisiai.slice(9, 16); // 'Bananas'
console.log(antrasVaisius);
// 2. Tekstas nuo 9 simbolio
let antrasIrTreciasVaisius = vaisiai.slice(9); // 'Bananas, kivis'
console.log(antrasIrTreciasVaisius);
// 3. Tekstas nuo pabaigos
let treciasVaisius = vaisiai.slice(-5);
console.log(treciasVaisius); // Kivis

// 4. Nuo -14 simbolio iki -7
antrasVaisius = vaisiai.slice(-14, -7); // 'Bananas'
console.log(antrasVaisius);

// 5. Nuo 9 iki -7
antrasVaisius = vaisiai.slice(9, -7); // 'Bananas'
console.log(antrasVaisius);

// Tekstas didžiosiomis raidėmis

tekstas = "Eur";

let tekstasDidziosiomis = tekstas.toUpperCase(); // EUR
let tekstasMazosiomis = tekstas.toLowerCase(); // eur

console.log(tekstasDidziosiomis, tekstasMazosiomis);

tekstas.toUpperCase();
console.log(tekstas); // Eur
tekstas = tekstas.toUpperCase(); // Keičia orginalu teksta
console.log(tekstas); // EUR

let nesvarusTekstas = "    \n \t Reikalingas tekstas \n \t     ";

console.log("Rezultatas: " + nesvarusTekstas);
console.log("Rezultatas: " + nesvarusTekstas.trim());
console.log("Rezultatas: " + nesvarusTekstas.trimStart());
console.log("Rezultatas: " + nesvarusTekstas.trimEnd());

// To paties teksto pakartojimas daug kartų
let meilesLaiskas = "Aš tave myliu! \n";

meilesLaiskas = meilesLaiskas.repeat(100);
console.log(meilesLaiskas);

// kai reikia pakeisti tam tikra teksto dali
let vardas = "Antanas";
let html = `<div><b>{Vardas}</b><p>{Vardas}</p></div>`;
let rezultatas = html.replace("{Vardas}", vardas);
console.log(rezultatas);
rezultatas = html.replaceAll("{Vardas}", vardas);
console.log(rezultatas);

// Praktinis panaudojimas:

// fetch("/template.txt")
//   .then((text) => text.text())
//   .then((text) => {
//     document.write(
//       text.repeat(1000).replaceAll("{Vardas}", vardas).toUpperCase()
//     );
//   });

// funkcijos apibrėžimas
function manoFunkcija() {
  let skaicius = 5;
  skaicius += 4;
  document.write(skaicius);
}

// funkcijos iškvietimas
manoFunkcija();

function funkcijaSuParametrais(skaicius) {
  const rezultatas = skaicius + 10;
  const elementas = document.querySelector(".rezultatas");

  elementas.innerHTML = "Nauja reikšmė";
}

function gautiIvesti() {
  const ivestiesLaukelis = document.querySelector("#firstName");
  // Gaunama ivesties laukelio reikšme
  const laukelioReiksme = ivestiesLaukelis.value;
  ivestiesLaukelis.value = "";
  console.log(laukelioReiksme);
}
