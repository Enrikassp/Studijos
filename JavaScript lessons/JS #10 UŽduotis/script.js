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
    console.log("Patenkinamai");
    break;
  case 5:
    console.log("Patenkinamai");
    break;
  case 6:
    console.log("Gerai");
    break;
  case 7:
    console.log("Gerai");
    break;
  case 8:
    console.log("Labai gerai");
    break;
  case 9:
    console.log("Labai gerai");
    break;
  case 10:
    console.log("Labai gerai");
    break;
}

// Parašykite programą, kuri patikrina, ar asmuo gali balsuoti pagal amžių(18 ir daugiau).
// Jei taip, atspausdinkite "Gali balsuoti", jei ne – "Negali balsuoti".Kuris metodas čia tinkamiausias?

const arGaliBalsuoti = (amzius) => {
  amzius < 18 ? console.log("Negali balsuoti") : console.log("Gali balsuoti");
};

arGaliBalsuoti(17);

// Parašykite funkciją, kuri patikrina, ar skaičius yra teigiamas, neigiamas ar lygus nuliui, ir atitinkamai išveda pranešimą.Kurį operatorių naudoti?

const koksYraSkaicius = (skaicus) => {
  skaicus > 0 ? console.log("Skaičius yra teigiamas") : skaicus < 0 ? console.log("Skaičius yra neigiamas") : console.log("Skaičius yra nulis");
};

koksYraSkaicius(0)