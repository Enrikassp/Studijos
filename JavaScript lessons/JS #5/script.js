function pridetiPrieSkaiciausMisisipe(skaicius) {
  const rezultatas = `${skaicius} misisipė`;
  return rezultatas;
}

const masyvas = [1, 2, 3, 4, 5, 6].map(pridetiPrieSkaiciausMisisipe);
masyvas.reverse();
console.log(masyvas);

const raidziuMasyvas = "Nebeprisikiškiakipūsteliaudavome".split("");

let dabartinisIndekas = 0;
// while (dabartinisIndekas < raidziuMasyvas.length) {
//   const dabartineRaide = raidziuMasyvas[dabartinisIndekas];
//   console.log(dabartineRaide);

//   if (dabartineRaide === "k") break;
//   dabartinisIndekas++;
// }

console.log(raidziuMasyvas);

for (let i = 0; i < raidziuMasyvas.length; i++) {
  const dabartineRaide = raidziuMasyvas[i];
  console.log(dabartineRaide);

  if (dabartineRaide === "k") break;
}
