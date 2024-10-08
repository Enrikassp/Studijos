const prekes = [
  { barkodas: "4061615651", pavadinimas: "Degtukai", kaina: 0.2 },
  { barkodas: "4061615652", pavadinimas: "Dantų šepetėlis", kaina: 1.5 },
  { barkodas: "4061615653", pavadinimas: "Kava", kaina: 4.99 },
  { barkodas: "4061615654", pavadinimas: "Vandens butelis", kaina: 0.89 },
  { barkodas: "4061615655", pavadinimas: "Šokoladas", kaina: 1.79 },
  { barkodas: "4061615656", pavadinimas: "Tualetinis popierius", kaina: 2.5 },
  { barkodas: "4061615657", pavadinimas: "Makaronai", kaina: 0.99 },
  { barkodas: "4061615658", pavadinimas: "Ryžiai", kaina: 1.2 },
  { barkodas: "4061615659", pavadinimas: "Kondicionierius", kaina: 3.5 },
  { barkodas: "4061615660", pavadinimas: "Šampūnas", kaina: 3.99 },
];

const modifikuotosPrekes = prekes.map((v) => {
  return {
    barkodas: `${v.pavadinimas.substring(0, 1)}-${v.barkodas}`,
    pavadinimas: v.pavadinimas,
    kaina: v.kaina,
  };
});

console.log(modifikuotosPrekes);

const filtruojamePagalPirmaRaide = modifikuotosPrekes.filter((v) => {
  if (v.pavadinimas.substring(0, 1) === "D") {
    return true;
  }
});

console.log(filtruojamePagalPirmaRaide);

const filtruojamePrekesKurioKainaDaugiauNei1eur = modifikuotosPrekes.filter(
  (v) => {
    if (v.kaina > 1) {
      return true;
    }
  }
);

console.log(filtruojamePrekesKurioKainaDaugiauNei1eur);

const filtruojamePrekesKurioKainaMaziauNei3eur = modifikuotosPrekes.filter(
  (v) => {
    if (v.kaina < 3) {
      return true;
    }
  }
);

console.log(filtruojamePrekesKurioKainaMaziauNei3eur);

const filtruojamePrekesNuo1eurIki3Eur = modifikuotosPrekes.filter((v) => {
  if (v.kaina > 1 && v.kaina < 3) {
    return true;
  }
});

console.log(filtruojamePrekesNuo1eurIki3Eur);

const pakeiciamePrekesPavadinima = modifikuotosPrekes.find((v) => {
  if (v.pavadinimas === "Kava") {
    return (v.pavadinimas = "Kavos pupelės");
  }
});

console.log(pakeiciamePrekesPavadinima);

const pridedamePrekemsPVM = modifikuotosPrekes.map((v) => {
  const pvmMokestis = v.kaina < 1.5 ? 0.15 : 0.21;
  return {
    barkodas: v.barkodas,
    pavadinimas: v.pavadinimas,
    kaina: v.kaina,
    pvmProcentas: `${pvmMokestis * 100}%`,
    pvmMokestis: +(pvmMokestis * v.kaina).toFixed(2),
  };
});

console.log(pridedamePrekemsPVM);

const radamePrekesKuriosBaigeSraide = modifikuotosPrekes.filter((v) => {
  if (v.kaina < 2 && v.pavadinimas.slice(-1) === "s") {
    return true;
  }
});

console.log(radamePrekesKuriosBaigeSraide);
