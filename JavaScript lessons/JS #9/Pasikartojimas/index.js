const mas1 = new Array(10);
const mas2 = ["Pirmas", "antras"];
const mas3 = {};
mas2.push("Trečias"); // Pridėjimas i gala
mas2.unshift("Nulinis"); // Pridėjimas i prieki

const indeksas = mas2.indexOf("antras");
mas2[indeksas] = mas2[indeksas].replaceAll("a", "A");

console.log(mas2);
console.log(Array.isArray(mas3));

function shiftTo3Elements(newValue) {
  arr.unshift(newValue);

  if (arr.length > 3) {
    arr.pop();
  }

  return arr;
}
const arr = [];

console.log(shiftTo3Elements("a"));
console.log(shiftTo3Elements("b"));
console.log(shiftTo3Elements("c"));
