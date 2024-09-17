let exchangeFrom = prompt(
  "Įveskite iš kurios valiutos norite keisti pvz (EUR, USD, GBP)"
);
let exchangeTo = prompt(
  "Įveskite į kurią valiutą norite keisti pvz (EUR, USD, GBP)"
);

let exchangeAmount = prompt("Įveskite sumą kokią norite keisti");
// Convert input to uppercase for comparison
exchangeFrom = exchangeFrom.toUpperCase();
exchangeTo = exchangeTo.toUpperCase();
exchangeAmount = Number(exchangeAmount); // Convert to number

let exchangedAmount = 0;
let USD_rate = 1.1138; // USD to EUR
let EUR_rate = 1; // EUR as the base
let GBP_rate = 0.842824; // GBP to EUR

// Calculate exchanged amount
if (exchangeFrom === "EUR" && exchangeTo === "USD") {
  exchangedAmount = exchangeAmount * USD_rate;
  exchangedAmount = exchangedAmount.toFixed(2);
  console.log("CONVERTING EUR TO USD");
} else if (exchangeFrom === "EUR" && exchangeTo === "GBP") {
  exchangedAmount = exchangeAmount * GBP_rate;
  exchangedAmount = exchangedAmount.toFixed(2);
  console.log("CONVERTING EUR TO GBP");
} else if (exchangeFrom === "USD" && exchangeTo === "EUR") {
  exchangedAmount = exchangeAmount / USD_rate;
  exchangedAmount = exchangedAmount.toFixed(2);
  console.log("CONVERTING USD TO EUR");
} else if (exchangeFrom === "USD" && exchangeTo === "GBP") {
  exchangedAmount = exchangeAmount * (GBP_rate / USD_rate);
  exchangedAmount = exchangedAmount.toFixed(2);
  console.log("CONVERTING USD TO GBP");
} else if (exchangeFrom === "GBP" && exchangeTo === "EUR") {
  exchangedAmount = exchangeAmount / GBP_rate;
  exchangedAmount = exchangedAmount.toFixed(2);
  console.log("CONVERTING GBP TO EUR");
} else if (exchangeFrom === "GBP" && exchangeTo === "USD") {
  exchangedAmount = exchangeAmount * (USD_rate / GBP_rate);
  exchangedAmount = exchangedAmount.toFixed(2);
  console.log("CONVERTING GBP TO USD");
} else {
  alert("Tokios valiutos neturime konvertavime!");
}

// Output if valid inputs
if (
  (exchangeFrom === "EUR" ||
    exchangeFrom === "USD" ||
    exchangeFrom === "GBP") &&
  (exchangeTo === "EUR" || exchangeTo === "USD" || exchangeTo === "GBP") &&
  exchangeAmount > 0
) {
  document.write(
    `<h1 style="font-size:24px; font-weight:normal;">Konvertuojama: <b>${exchangeFrom}</b> => <b>${exchangeTo}</b></h1>`
  );
  document.write(
    `<h1 style="font-size:24px; font-weight:normal;">Vertė (${exchangeFrom}): <b>${exchangeAmount}</b></h1>`
  );
  document.write(
    `<h1 style="font-size:24px; font-weight:normal;">Vertė (${exchangeTo}): <b>${exchangedAmount}</b></h1>`
  );
} else {
  alert("Klaida įvestyjeEUR");
}
