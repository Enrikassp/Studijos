let amzius = 2024 - gimimoMetai;
let arYra18 = amzius >= 18;

if (amzius < 0) {
  console.error("Klaida - amzius mazesnis nei 0");
}

if (typeof amzius !== "string") console.warn("Klaida - amzius yra ne skaicius");
if (typeof pinigai !== "string")
  console.warn("Klaida - pinigai yra ne skaicius");

if (arYra18) {
  if (pinigai >= enegertinioKaina) {
    console.log(
      "Parduodamas energetinis gėrimas atiduodama graža: ",
      pinigai - enegertinioKaina
    );
  } else {
    console.log("Neparduodamas energetinis nes neužtenka piningų");
  }
} else {
  console.log("Subaramas vaikas ir siunčiamas į mokyklą");
}

if (amzius >= 18 && pinigai >= enegertinioKaina) {
  document.write(
    `<b>Parduodamas energetinis ${amzius} amžiaus  žmogui už ${enegertinioKaina}€ kainą </b>`
  );
  pinigai -= enegertinioKaina;
  document.write(`<p>Dabartiniai pininigai: <b>${pinigai}</b></p>`);
} else if (amzius < 18) {
  document.write("Subaramas vaikas ir siunčiamas į mokyklą");
} else {
  document.write("Neparduodamas energetinis nes neužtenka piningų");
}
