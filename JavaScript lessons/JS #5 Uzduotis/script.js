function random(minVal, maxVal) {
  const min = Math.floor(minVal);
  const max = Math.ceil(maxVal);
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}

function generateRandomNumberArray(length) {
  const masyvas = [];

  for (let i = 1; i <= length; i++) {
    masyvas.push(random(0, 200));
  }

  return masyvas;
}

console.log(generateRandomNumberArray(100));

function countAllThrees(array) {
  let howManyThreeNumbers = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 3) {
      howManyThreeNumbers++;
    }
  }

  return howManyThreeNumbers;
}

console.log(
  "Suskaičiuota kiek pasikartoja kartų 3 - ",
  countAllThrees(generateRandomNumberArray(100))
);

function countAllEven(array) {
  let howManyEvenNumbers = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      howManyEvenNumbers++;
    }
  }

  return howManyEvenNumbers;
}

console.log(
  "Suskaičiuota kiek yra lyginių skaičių - ",
  countAllEven(generateRandomNumberArray(100))
);

function countAllOdd(array) {
  let howManyOddNumbers = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2) {
      howManyOddNumbers++;
    }
  }

  return howManyOddNumbers;
}

console.log(
  "Suskaičiuota kiek yra nelyginių skaičių - ",
  countAllOdd(generateRandomNumberArray(100))
);

function countAllEvenUnderSix(array) {
  let howManyEvenNumbersUnderSix = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < 6) {
      howManyEvenNumbersUnderSix++;
    }
  }

  return howManyEvenNumbersUnderSix;
}

console.log(
  "Suskaičiuota kiek yra lyginių skaičių kurie mažesni už 6 - ",
  countAllEvenUnderSix(generateRandomNumberArray(100))
);

function throwCoin() {
  if (random(0, 1) < 0.5) return "H";
  return "S";
}

console.log(throwCoin());

function throwCoinMoreTimes(howMany) {
  let herbCount = 0;

  for (let i = 0; i < howMany; i++) {
    if (throwCoin() === "H") herbCount++;
  }

  return {
    herbas: herbCount,
    skaicius: howMany - herbCount,
    herbPercentage: ((herbCount / howMany) * 100).toFixed(2),
    skaiciusPercentage: (100 - (herbCount / howMany) * 100).toFixed(2),
  };
}

const result = throwCoinMoreTimes(20);
console.log(
  `Herbas iškrito ${result.herbas} kartus (${result.herbPercentage}%)`
);
console.log(
  `Skaičius iškrito ${result.skaicius} kartus (${result.skaiciusPercentage}%)`
);

function sumAll(masyvas) {
  let masyvoSuma = 0;

  for (let i = 0; i < masyvas.length; i++) {
    masyvoSuma += masyvas[i];
  }

  return masyvoSuma;
}

console.log(sumAll(generateRandomNumberArray(100)));

function swap(masyvas, a, b) {
  const swapedMasyvas = [...masyvas]; // Kopijuojame masyva

  const temp = swapedMasyvas[a]; // Cia saugome laikinai kintamaji
  swapedMasyvas[a] = swapedMasyvas[b];
  swapedMasyvas[b] = temp;

  return swapedMasyvas;
}

console.log(swap([1, 2, 3, 4], 0, 3));

function average(arr) {
  return sumAll(arr) / arr.length;
}
console.log(average([1, 2, 3, 4, 5]));

function findAllUniqueNumbers(masyvas) {
  const uniqueNumbers = [];
  for (let i = 0; i < masyvas.length; i++) {
    if (!uniqueNumbers.includes(masyvas[i])) {
      uniqueNumbers.push(masyvas[i]);
    }
  }

  return uniqueNumbers;
}
console.log(findAllUniqueNumbers([1, 1, 2, 8, 8, 1, 4, 6]));

function findStatistics(masyvas) {
  const uniqueNumbers = findAllUniqueNumbers(masyvas);
  const uniqueRepeats = new Array(uniqueNumbers.length).fill(0);

  for (let i = 0; i < masyvas.length; i++) {
    uniqueRepeats[uniqueNumbers.indexOf(masyvas[i])]++;
  }

  return [uniqueNumbers, uniqueRepeats];
}

function printStatistics(uniques, uniqueCounts) {
  for (let i = 0; i < uniques.length; i++) {
    console.log(`Skaičius ${uniques[i]} pasikartojo ${uniqueCounts[i]} kartus`);
  }
}

const [uniqueNumbers, uniqueCounts] = findStatistics([1, 1, 4, 7, 4, 6]);
printStatistics(uniqueNumbers, uniqueCounts);

function findAllDuplicatingNumbers(unique, uniqueRepeats) {
  const repeats = [];
  for (let i = 0; i < unique.length; i++) {
    if (uniqueRepeats[i] > 1) {
      repeats.push(unique[i]);
    }
  }

  return repeats;
}

const [unique, uniqueRepeats] = findStatistics([1, 1, 2, 8, 8, 1, 4, 6]);
console.log(findAllDuplicatingNumbers(unique, uniqueRepeats));

function drawSquare(x, isCrossNeeded = false) {
  const squareCont = document.querySelector(".square");
  squareCont.innerHTML = "";

  for (let i = 0; i < x; i++) {
    for (let j = 0; j < x; j++) {
      if (isCrossNeeded && (i === j || i + j === x - 1)) {
        squareCont.innerHTML += `<span class="cross">*</span>`;
      } else {
        squareCont.innerHTML += `<span>*</span>`;
      }
    }
  }
}

drawSquare(10, true);

function drawRectangle(x, y) {
  const rectangleCont = document.querySelector(".rectangle");
  rectangleCont.innerHTML = "";

  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      rectangleCont.innerHTML += `<span>*</span>`;
    }

    rectangleCont.innerHTML += "<br>";
  }
}

drawRectangle(10, 10);

function drawDiamond(x) {
  const diamondCont = document.querySelector(".diamond");
  diamondCont.innerHTML = ""; // Clear the diamond content

  // Rombo virsus
  for (let i = 0; i < x; i++) {
    diamondCont.innerHTML += "&nbsp&nbsp".repeat(x - i - 1); // Tarpo pridėjimas
    // diamondCont.innerHTML += `<span>*</span>`;

    for (let j = 1; j <= 2 * i + 1; j++) {
      diamondCont.innerHTML += `<span>*</span>`;
    }

    diamondCont.innerHTML += "<br>"; // Nauja eilutė
  }

  // Rombo apačia
  for (let i = x - 2; i >= 0; i--) {
    diamondCont.innerHTML += "&nbsp&nbsp".repeat(x - i - 1); // Tarpo pridėjimas

    for (let j = 1; j <= 2 * i + 1; j++) {
      diamondCont.innerHTML += `<span>*</span>`;
    }

    diamondCont.innerHTML += "<br>"; // Nauja eilutė
  }

  const allSpans = document.querySelectorAll(".diamond span");
  allSpans.forEach((span) => {
    span.style.color = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(
      0,
      255
    )})`;
  });
}

drawDiamond(20);

function viniesKalimas(type) {
  let smugiai = 0;
  let smugioKalimas = 0;
  if (type === "silpnas") {
    smugioKalimas = random(5, 20);
  } else {
    smugioKalimas = random(20, 30);
  }

  for (let vinis = 0; vinis < 5; vinis++) {
    let viniesIlgis = 850;

    for (let i = 0; viniesIlgis > 0; i++) {
      let smugioIkalimoSansas = 0;

      if (type !== "silpnas") {
        smugioIkalimoSansas = random(0, 1) < 0.5;
      }

      if (smugioIkalimoSansas || type === "silpnas") {
        viniesIlgis -= smugioKalimas;
        smugiai++;
      } else {
        console.log("Nepataikei!");
      }
    }
  }
  return smugiai;
}

console.log(
  "Penkias vinis su silpnais smūgiais sukalti prireiks - " +
    viniesKalimas("silpnas") +
    " smūgiu"
);

console.log(
  "Penkias vinis su stipriais smūgiais sukalti prireiks - " +
    viniesKalimas("stiprus") +
    " smūgiu"
);
