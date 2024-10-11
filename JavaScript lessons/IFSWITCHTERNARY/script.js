// Yra tik šešios falsy reikšmės JavaScript:

// false – logiškai klaidinga reikšmė.
// 0 – skaičius nulis.
// - 0 – neigiama nulio reikšmė.
// 0n – BigInt nulis.
// "" – tuščias stringas.
// null – nerodo jokios reikšmės.
// undefined – reikšmė, kuri nėra priskirta.
// NaN – Ne skaičius(Not - a - Number).
// Pastaba: Techniniu požiūriu - 0, 0n, ir NaN taip pat yra falsy, tačiau dažniausiai nurodoma tik šešios pagrindinės.

// Visos kitos reikšmės, kurios nėra falsy, yra truthy.Tai apima:

// Ne tuščios eilutės("Hello", "0", "false", " ")
// Skaičiai, skirtingi nuo 0(1, -1, 3.14)
// Objektai({}, [])
// Funkcijos
// Infinity ir - Infinity
// Data(new Date())

// const sk = '0';

// if (sk) {
//     console.log("True");
// } else {
//     console.log("False");
// }

// if/else:

// Naudojimas: Kai reikia atlikti paprastas arba kompleksines logines sąlygas, kurios gali turėti kelis šakotus veiksmus.
// Geroji praktika: Naudokite, kai reikia atlikti daugiau nei dvi sąlygas arba kai sąlygos yra sudėtingos.Rekomenduojama vengti daug if/else blokų – vietoj to svarstyti apie switch arba kitas struktūras.
// Sintaksė:

// if (condition) {
//     // veiksmai, jei sąlyga true
// } else {
//     // veiksmai, jei sąlyga false
// }

// switch:
// Naudojimas: Kai turite daugiau nei dvi galimybes ir reikia palyginti vieną kintamąjį su keliais galimais atvejais.
// Geroji praktika: Naudokite, kai turite daug aiškiai apibrėžtų galimų reikšmių, kurias reikia palyginti su vienu kintamuoju.Patogu, kai kiekvienas atvejis yra atskiras ir nepriklauso nuo kitų sąlygų.
// Sintaksė:

// const day = 16;

// switch (day) {
//     case 1:
//         console.log("Pirmadienis");
//         break;
//     case 2:
//         console.log("Antradienis");
//         break;
//     case 3:
//         console.log("Trečiadienis");
//         break;
//     case 4:
//         console.log("Ketvirtadienis");
//         break;
//     case 5:
//         console.log("Penktadienis");
//         break;
//     case 6:
//         console.log("Šeštadienis");
//         break;
//     case 7:
//         console.log("Sekmadienis");
//         break;
//     default:
//         console.log("Nežinoma diena");
// }

// const day1 = 2;

// switch (day1) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         console.log("Darbo diena");
//         break;
//     case 6:
//     case 7:
//         console.log("Savaitgalis");
//         break;
//     default:
//         console.log("Nežinoma diena");
// }

// ternary operatorius:
// Naudojimas: Kai reikia parašyti trumpą ir paprastą sąlygą, dažniausiai priskiriant reikšmę kintamajam.
// Geroji praktika: Naudoti tik tada, kai sąlyga ir veiksmai yra trumpi ir aiškūs.Jei sąlyga tampa ilga ar neaiški, geriau naudoti if/else struktūrą.
// Sintaksė:

// condition ? expressionIfTrue : expressionIfFalse;
// condition ? expressionIfTrue : condition ? expressionIfTrue : expressionIfFalse;

// const day2 = 3;

// day2 === 1 ? console.log("Pirmadienis") : day2 === 2 ? console.log("Antradienis") : console.log("Kita diena")

// Geroji praktika:
// if/else struktūra suteikia didžiausią lankstumą, todėl ji yra tinkamiausia sudėtingesnėms sąlygoms ir kai reikia patikrinti kelias skirtingas sąlygas.
// switch struktūra yra naudinga, kai reikia palyginti vieną kintamąjį su daugybe konkrečių reikšmių.Ji padeda išvengti ilgo if/else if sekos ir padaro kodą skaitomesnį.
// Ternary operatorius(condition ? exprIfTrue : exprIfFalse) yra naudingas trumpiems sprendimams ir kai reikia greitai priskirti reikšmę kintamajam.Tačiau, jei sąlyga tampa sudėtinga arba reikia atlikti daugiau nei vieną veiksmą, geriau naudoti if/else.

// Užduotys:
// Parašykite funkciją, kuri pagal vartotojo įvestą balą(nuo 1 iki 10) išspausdina atitinkamą vertinimą:
// "Labai gerai", "Gerai", "Patenkinamai" arba "Nepatenkinamai".Kuris operatorius čia tinkamiausias?
let balas = 10;

switch (balas) {
  case 0:
    console.log("Nepatenkinamai");
    break;
  case 1:
    console.log("Nepatenkinamai");
    break;
  case 2:
    console.log("Nepatenkinamai");
    break;
  case 3:
    console.log("Nepatenkinamai");
    break;
  case 4:
    console.log("Nepatenkinamai");
    break;
  case 5:
    console.log("Patenkinamai");
    break;
  case 6:
    console.log("Patenkinamai");
    break;
  case 7:
    console.log("Gerai");
    break;
  case 8:
    console.log("Gerai");
    break;
  case 9:
    console.log("Gerai");
    break;
  case 10:
    console.log("Labai gerai");
    break;
}

if (balas >= 0 && balas <= 4) {
  console.log("Nepatenkinamai");
} else if (balas >= 5 && balas <= 6) {
  console.log("Patenkinamai");
} else if (balas >= 7 && balas <= 9) {
  console.log("Gerai");
} else {
  console.log("Labai gerai");
}

balas >= 0 && balas <= 4
  ? console.log("Nepatenkinamai")
  : balas >= 5 && balas <= 6
  ? console.log("Patenkinamai")
  : balas >= 7 && balas <= 9
  ? console.log("Gerai")
  : console.log("Labai gerai");

// Parašykite programą, kuri patikrina, ar asmuo gali balsuoti pagal amžių(18 ir daugiau).Jei taip, atspausdinkite "Gali balsuoti", jei ne – "Negali balsuoti".Kuris metodas čia tinkamiausias?
let amzius = 18;

switch (true) {
  case amzius >= 18:
    console.log("Gali balsuoti");
    break;
  default:
    console.log("Negali balsuoti");
}

if (amzius >= 18) {
  console.log("Gali balsuoti");
} else {
  console.log("Negali balsuoti");
}

amzius >= 18 ? console.log("Gali balsuoti") : console.log("Negali balsuoti");

// Sukurkite programą, kuri pagal savaitės dienos numerį(nuo 1 iki 7) atspausdina dienos pavadinimą.Kurį metodą čia patartumėte naudoti?
let diena = 2;

switch (diena) {
  case 1:
    console.log("Pirmadienis");
    break;
  case 2:
    console.log("Antradienis");
    break;
  case 3:
    console.log("Trečiadienis");
    break;
  case 4:
    console.log("Ketvirtadienis");
    break;
  case 5:
    console.log("Penktadienis");
    break;
  case 6:
    console.log("Šeštadienis");
    break;
  case 7:
    console.log("Sekmadienis");
    break;
}

if (diena == 1) {
  console.log("Pirmadienis");
} else if (diena == 2) {
  console.log("Antradienis");
} else if (diena == 2) {
  console.log("Trečiadienis");
} else if (diena == 2) {
  console.log("Ketvirtadienis");
} else if (diena == 2) {
  console.log("Penktadienis");
} else if (diena == 2) {
  console.log("Šeštadienis");
} else if (diena == 2) {
  console.log("Sekmadienis");
}

diena == 1
  ? console.log("Pirmadienis")
  : diena === 2
  ? console.log("Antradienis")
  : diena === 2
  ? console.log("Trečiadienis")
  : diena === 2
  ? console.log("Ketvirtadienis")
  : diena === 2
  ? console.log("Penktadienis")
  : diena === 2
  ? console.log("Šeštadienis")
  : console.log("Sekmadienis");

// Parašykite funkciją, kuri patikrina, ar skaičius yra teigiamas, neigiamas ar lygus nuliui, ir atitinkamai išveda pranešimą.Kurį operatorių naudoti?
let skaicius = 1;

switch (true) {
  case skaicius > 0:
    console.log("Teigiamas");
    break;
  case skaicius < 0:
    console.log("Neigiamas");
    break;
  default:
    console.log("Nuliui");
}

if (skaicius > 0) {
  console.log("Teigiamas");
} else if (skaicius < 0) {
  console.log("Neigiamas");
} else {
  console.log("Nuliui");
}

skaicius > 0
  ? console.log("Teigiamas")
  : skaicius < 0
  ? console.log("Neigiamas")
  : console.log("Nuliui");

// Sukurkite programą, kuri nustato vartotojo amžių ir priskiria jį į vieną iš trijų grupių: "Jaunuolis"(13 - 19), "Suaugęs"(20 - 64), "Pensininkas"(65 +).Koks operatorius geriausiai tinka šiam atvejui?
const vartotojoAmzius = 20;

switch (true) {
  case vartotojoAmzius >= 13 && vartotojoAmzius <= 19:
    console.log('Jaunuolis"(13 - 19)');
    break;
  case vartotojoAmzius >= 20 && vartotojoAmzius <= 64:
    console.log('Suaugęs"(20 - 64)');
    break;
  default:
    console.log('Pensininkas"(65 +)');
    break;
}

if (vartotojoAmzius >= 13 && vartotojoAmzius <= 19) {
  console.log('Jaunuolis"(13 - 19)');
} else if (vartotojoAmzius >= 20 && vartotojoAmzius <= 64) {
  console.log('Suaugęs"(20 - 64)');
} else {
  console.log('Pensininkas"(65 +)');
}

vartotojoAmzius >= 13 && vartotojoAmzius <= 19
  ? console.log('Jaunuolis"(13 - 19)')
  : vartotojoAmzius >= 20 && vartotojoAmzius <= 64
  ? console.log('Suaugęs"(20 - 64)')
  : console.log('Pensininkas"(65 +)');

// Parašykite programą, kuri patikrina, ar skaičius yra lyginis ar nelyginis, ir atspausdina atitinkamą pranešimą.Kuris operatorius čia tinkamiausias?
let arLyginis = 0;

switch (true) {
  case arLyginis > 0:
    console.log("Teigiamas");
    break;
  default:
    console.log("Neigiamas");
}

if (arLyginis > 0) {
  console.log("Teigiamas");
} else {
  console.log("Neigiamas");
}

arLyginis > 0 ? console.log("Teigiamas") : console.log("Neigiamas");
// Sukurkite funkciją, kuri pagal pateiktą mėnesio numerį(1 - 12) išveda sezono pavadinimą("Pavasaris", "Vasara", "Ruduo", "Žiema").Kuri struktūra geriausiai tinka šiam uždaviniui?
let menesioNumeris = 1;

switch (true) {
  case [12, 1, 2].includes(menesioNumeris):
    console.log("Žiema");
    break;
  case [3, 4, 5].includes(menesioNumeris):
    console.log("Pavasaris");
    break;
  case [6, 7, 8].includes(menesioNumeris):
    console.log("Vasara");
    break;
  case [9, 10, 11].includes(menesioNumeris):
    console.log("Ruduo");
    break;
}

if ([1, 2, 12].includes(menesioNumeris)) {
  console.log("Žiema");
} else if ([3, 4, 5].includes(menesioNumeris)) {
  console.log("Pavasaris");
} else if ([6, 7, 8].includes(menesioNumeris)) {
  console.log("Vasara");
} else {
  console.log("Ruduo");
}

[1, 2, 12].includes(menesioNumeris)
  ? console.log("Žiema")
  : [3, 4, 5].includes(menesioNumeris)
  ? console.log("Pavasaris")
  : [6, 7, 8].includes(menesioNumeris)
  ? console.log("Vasara")
  : console.log("Ruduo");

// Parašykite programą, kuri nustato, ar du skaičiai yra lygūs, ar ne, ir atitinkamai išveda pranešimą.Kuris operatorius naudoti?
let a = 1;
let b = 1;

switch (true) {
  case a == b:
    console.log("Skaičiai yra lygus");
    break;
  default:
    console.log("Skaičiai nėra lygus");
}

if (a == b) {
  console.log("Skaičiai yra lygus");
} else {
  console.log("Skaičiai nėra lygus");
}

a === b
  ? console.log("Skaičiai yra lygus")
  : console.log("Skaičiai nėra lygus");

// Sukurkite funkciją, kuri patikrina, ar vartotojo įvestas simbolis yra balsė, priebalsė ar nėra raidė.Koks operatorius geriausiai tinka?
function patikrinkSimboliSuSwitch(simbolis) {
  simbolis = simbolis.toLowerCase();

  switch (true) {
    case ["a", "e", "i", "o", "u", "ą", "ę", "ė", "į", "ų", "ū"].includes(
      simbolis
    ):
      console.log("Balsė");
      break;
    case simbolis >= "a" && simbolis <= "z":
      console.log("Priebalsė");
      break;
    default:
      console.log("Nėra raidė");
  }
}

patikrinkSimboliSuSwitch("ą");
patikrinkSimboliSuSwitch("b");
patikrinkSimboliSuSwitch("1");

function patikrinkSimboliSuIf(simbolis) {
  simbolis = simbolis.toLowerCase();

  if (
    ["a", "e", "i", "o", "u", "ą", "ę", "ė", "į", "ų", "ū"].includes(simbolis)
  ) {
    console.log("Balsė");
  } else if (simbolis >= "a" && simbolis <= "z") {
    console.log("Priebalsė");
  } else {
    console.log("Nėra raidė");
  }
}

patikrinkSimboliSuIf("ą");
patikrinkSimboliSuIf("b");
patikrinkSimboliSuIf("1");
function patikrinkSimboliSuTernary(simbolis) {
  simbolis = simbolis.toLowerCase();
  const rezultatas = [
    "a",
    "e",
    "i",
    "o",
    "u",
    "ą",
    "ę",
    "ė",
    "į",
    "ų",
    "ū",
  ].includes(simbolis)
    ? "Balsė"
    : simbolis >= "a" && simbolis <= "z"
    ? "Priebalsė"
    : "Tai nėra raidė";

  console.log(rezultatas);
}
patikrinkSimboliSuTernary("ą");
patikrinkSimboliSuTernary("b");
patikrinkSimboliSuTernary("1");

// Parašykite programą, kuri pagal nurodytą dieną(pirmadienis, antradienis, ...sekmadienis) išveda, ar tai darbo diena ar savaitgalis.Kurį operatorių naudoti?
let savaites_diena = "sekmadienis";

switch (true) {
  case savaites_diena == "šeštadienis" || savaites_diena == "sekmadienis":
    console.log("Savaitgalis");
    break;
  default:
    console.log("Darbo diena");
    break;
}

if (savaites_diena == "šeštadienis" || savaites_diena == "sekmadienis") {
  console.log("Savaitgalis");
} else {
  console.log("Darbo diena");
}

savaites_diena == "šeštadienis" || savaites_diena == "sekmadienis"
  ? console.log("Savaitgalis")
  : console.log("Darbo diena");

// Sukurkite funkciją, kuri pagal įvestą temperatūrą(Celsius) nustato oro būklę: "Šalta"(< 10°C), "Šilta"(10 - 25°C), "Karšta"(> 25°C).Koks operatorius geriausiai tinka?
function temperaturaSwitch(celsius) {
  switch (true) {
    case celsius < 10:
      console.log('Šalta"(< 10°C)');
      break;
    case celsius >= 10 && celsius < 25:
      console.log('Šilta"(10 - 25°C)');
      break;
    default:
      console.log('Karšta"(> 25°C)');
      break;
  }
}
temperaturaSwitch(20);

function temperaturaIf(celsius) {
  if (celsius < 10) {
    console.log('Šalta"(< 10°C)');
  } else if (celsius >= 10 && celsius < 25) {
    console.log('Šilta"(10 - 25°C)');
  } else {
    console.log('Karšta"(> 25°C)');
  }
}
temperaturaIf(30);

function temperaturaTernary(celsius) {
  return celsius < 10
    ? 'Šalta"(< 10°C)'
    : celsius >= 10 && celsius < 25
    ? 'Šilta"(10 - 25°C)'
    : 'Karšta"(> 25°C)';
}
console.log(temperaturaTernary(5));
// Parašykite programą, kuri patikrina, ar vartotojo įvestas skaičius yra daliklis tiek 3, tiek 5. Kurį operatorių naudoti?
function patikrinkDalikliSwitch(sk) {
  switch (true) {
    case sk % 3 === 0 && sk % 5 === 0:
      console.log(`${sk} yra daliklis tiek iš 3, tiek iš 5.`);
      break;
    case sk % 3 === 0:
      console.log(`${sk} yra daliklis tik iš 3.`);
      break;
    case sk % 5 === 0:
      console.log(`${sk} yra daliklis tik iš 5.`);
      break;
    default:
      console.log(`${sk} nėra daliklis nei iš 3, nei iš 5.`);
  }
}

patikrinkDalikliSwitch(15);

function patikrinkDalikliIf(sk) {
  if (sk % 3 === 0 && sk % 5 === 0) {
    console.log(`${sk} yra daliklis tiek iš 3, tiek iš 5.`);
  } else if (sk % 3 === 0) {
    console.log(`${sk} yra daliklis tik iš 3.`);
  } else if (sk % 5 === 0) {
    console.log(`${sk} yra daliklis tik iš 5.`);
  } else {
    console.log(`${sk} nėra daliklis nei iš 3, nei iš 5.`);
  }
}

patikrinkDalikliIf(15);

function patikrinkDalikliTernary(sk) {
  return sk % 3 === 0 && sk % 5 === 0
    ? `${sk} yra daliklis tiek iš 3, tiek iš 5.`
    : sk % 3 === 0
    ? `${sk} yra daliklis tik iš 3.`
    : sk % 5 === 0
    ? `${sk} yra daliklis tik iš 5.`
    : console.log(`${sk} nėra daliklis nei iš 3, nei iš 5.`);
}

console.log(patikrinkDalikliTernary(15));
// Sukurkite funkciją, kuri pagal įvestą dienos tipą("darbo diena", "savaitgalis") išveda atitinkamą veiklą: "Dirbti", "Ilsėtis".Kuri struktūra geriausiai tinka?
function veiklaPagalDienosTipaSwitch(dienosTipas) {
  dienosTipas = dienosTipas.toLowerCase();

  switch (dienosTipas) {
    case "darbo diena":
      console.log("Dirbti");
      break;
    case "savaitgalis":
      console.log("Ilsėtis");
      break;
    default:
      console.log("Neteisingas dienos tipas");
  }
}
veiklaPagalDienosTipaSwitch("darbo diena");

function veiklaPagalDienosTipaIf(dienosTipas) {
  dienosTipas = dienosTipas.toLowerCase();

  if (dienosTipas === "darbo diena") {
    console.log("Dirbti");
  } else if (dienosTipas === "savaitgalis") {
    console.log("Ilsėtis");
  } else {
    console.log("Neteisingas dienos tipas");
  }
}
veiklaPagalDienosTipaIf("darbo diena");

function veiklaPagalDienosTipaTernary(dienosTipas) {
  dienosTipas = dienosTipas.toLowerCase();

  return dienosTipas === "darbo diena"
    ? "Dirbti"
    : dienosTipas === "savaitgalis"
    ? "Ilsėtis"
    : "Neteisingas dienos tipas";
}
console.log(veiklaPagalDienosTipaTernary("darbo diena"));
// Parašykite programą, kuri nustato, ar vartotojo įvestas metai yra keliamieji.Kurį operatorių naudoti?

function arKeliamiejiSwitch(metai) {
  switch (true) {
    case (metai % 4 === 0 && metai % 100 !== 0) || metai % 400 === 0:
      console.log(`${metai} Keliamieji`);
      break;
    default:
      console.log(`${metai} Nekeliamieji`);
      break;
  }
}
arKeliamiejiSwitch(2024);

function arKeliamiejiIf(metai) {
  if ((metai % 4 === 0 && metai % 100 !== 0) || metai % 400 === 0) {
    console.log(`${metai} Keliamieji`);
  } else {
    console.log(`${metai} Nekeliamieji`);
  }
}
arKeliamiejiIf(2024);

function arKeliamiejiTernary(metai) {
  return (metai % 4 === 0 && metai % 100 !== 0) || metai % 400 === 0
    ? `${metai} Keliamieji`
    : `${metai} Nekeliamieji`;
}

console.log(arKeliamiejiTernary(2024));
// Sukurkite funkciją, kuri pagal vartotojo įvestą temperatūrą(Celsius) priskiria aprangos rekomendaciją: "Kepurių nereikia", "Kepurės reikalingos", "Geriau neik į lauką".Koks operatorius geriausiai tinka?
function temperaturaSwitch(celsius) {
  switch (true) {
    case celsius < 10:
      console.log("Kepurių nereikia");
      break;
    case celsius >= 10 && celsius < 25:
      console.log("Kepurės reikalingos");
      break;
    default:
      console.log("Geriau neik į lauką");
      break;
  }
}
temperaturaSwitch(20);

function temperaturaIf(celsius) {
  if (celsius < 10) {
    console.log("Kepurių nereikia");
  } else if (celsius >= 10 && celsius < 25) {
    console.log("Kepurės reikalingos");
  } else {
    console.log("Geriau neik į lauką");
  }
}
temperaturaIf(30);

function temperaturaTernary(celsius) {
  return celsius < 10
    ? "Kepurių nereikia"
    : celsius >= 10 && celsius < 25
    ? "Kepurės reikalingos"
    : "Geriau neik į lauką";
}

console.log(temperaturaTernary(5));
