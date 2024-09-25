function kurtiSkaiciuMasyva(max = 10) {
  const masyvas = [];

  //   const min = max === undefined ? 1 : minOrMax;
  //   max = max === undefined ? minOrMax : max;

  for (let i = 1; i <= max; i++) {
    masyvas.push(i);
  }

  return masyvas;
}

function kurtiSkaiciuMasyvaNuoIki(min = 1, max = 10) {
  const masyvas = [];

  for (let i = min; i <= max; i++) {
    masyvas.push(i);
  }

  return masyvas;
}

const rez1 = kurtiSkaiciuMasyva();
console.log(rez1);
const rez2 = kurtiSkaiciuMasyva(20);
console.log(rez2);
const rez3 = kurtiSkaiciuMasyvaNuoIki(11, 20);
console.log(rez3);

function filtruotiLyginius(masyvas) {
  const lyginiai = [];

  for (let i = 0; i < masyvas.length; i++) {
    if (masyvas[i] % 2 === 0) lyginiai.push(masyvas[i]);
  }

  return lyginiai;
  //   return masyvas.filter((skaicius) => skaicius % 2 === 0);
}

const filt1 = filtruotiLyginius([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
console.log(filt1);

function filtruotiNelyginius(masyvas) {
  const neLyginiai = [];

  for (let i = 0; i < masyvas.length; i++) {
    if (masyvas[i] % 2) neLyginiai.push(masyvas[i]);
  }

  return neLyginiai;
  //   return masyvas.filter((skaicius) => skaicius % 2);
}

const filt2 = filtruotiNelyginius([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
console.log(filt2);
