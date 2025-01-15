// import {
// 	apverstiTeksta,
// 	gautiSaliesPavadinima,
// 	poSekundesParasytiZinute,
// } from "./functions.js";
import { Car } from "./Car.js";
import { generateReport } from "./generateReport.js";
// // 1. Aprašyti kintamuosius su tipais:
// const tekstas: string = "Lietuva";

// // Neaprašius tipų, tačiau priskyrus reikšmę, TypeScript bando tipą sugaudyti automatiškai
// const apverstas = apverstiTeksta(tekstas);

// // Masyvų aprašymas
// const saliuMasyvas: Salis[] = ["LT", "PL"];

// const saliesPavadinimas = gautiSaliesPavadinima(saliuMasyvas[1]);

// console.log(saliesPavadinimas);

// const salis1: SaliesObj = {
// 	id: 1,
// 	pilnasPavadinimas: "Lietuva",
// 	printMyself() {
// 		console.log(
// 			`My id is ${this.id}, my name is ${this.pilnasPavadinimas}, my shorter name is ${this.trumpinys}`
// 		);
// 	},
// };

// const salis2: SaliesObj = {
// 	id: 2,
// 	pilnasPavadinimas: "Lenkija",
// 	trumpinys: "PL",
// 	printMyself() {
// 		console.log(
// 			`My id is ${this.id}, my name is ${this.pilnasPavadinimas}, my shorter name is ${this.trumpinys}`
// 		);
// 	},
// };
// const salis3: SaliesObj = {
// 	id: 3,
// 	pilnasPavadinimas: "Latvija",
// 	trumpinys: "LV",
// 	printMyself() {
// 		console.log(
// 			`My id is ${this.id}, my name is ${this.pilnasPavadinimas}, my shorter name is ${this.trumpinys}`
// 		);
// 	},
// };
// const salis4: ISaliesObjektas = {
// 	id: 4,
// 	pilnasPavadinimas: "Vokietija",
// 	trumpinys: "DE",
// 	printMyself() {
// 		console.log(
// 			`My id is ${this.id}, my name is ${this.pilnasPavadinimas}, my shorter name is ${this.trumpinys}`
// 		);
// 	},
// };

// salis1.printMyself();

// poSekundesParasytiZinute();
// console.log(45);

// const audi = new Car({
// 	galiaKw: 204,
// 	marke: "Ford",
// 	metai: 2015,
// 	spalva: "orange",
// });
// console.log(audi.galiaKw);
// console.log(audi.thisObj);
// console.log(audi instanceof Car);
// console.log({ ...audi });
function getDataFromDb(): ProductSaleData[] {
  const salesData = JSON.parse(
    JSON.stringify([
      {
        productName: "Laptop",
        category: "Electronics",
        unitsSold: 10,
        pricePerUnit: 1000,
      },
      {
        productName: "Smartphone",
        category: "Electronics",
        unitsSold: 25,
        pricePerUnit: 700,
      },
      {
        productName: "Desk Chair",
        category: "Furniture",
        unitsSold: 15,
        pricePerUnit: 150,
      },
      {
        productName: "Notebook",
        category: "Stationery",
        unitsSold: 100,
        pricePerUnit: 5,
      },
      {
        productName: "Headphones",
        category: "Electronics",
        unitsSold: 20,
        pricePerUnit: 100,
      },
      {
        productName: "Monitor",
        category: "Electronics",
        unitsSold: 8,
        pricePerUnit: 300,
      },
      {
        productName: "Desk Lamp",
        category: "Furniture",
        unitsSold: 12,
        pricePerUnit: 50,
      },
      {
        productName: "Keyboard",
        category: "Electronics",
        unitsSold: 18,
        pricePerUnit: 80,
      },
      {
        productName: "Mouse",
        category: "Electronics",
        unitsSold: 22,
        pricePerUnit: 40,
      },
      {
        productName: "Backpack",
        category: "Accessories",
        unitsSold: 30,
        pricePerUnit: 60,
      },
    ])
  );
  return salesData as ProductSaleData[];
}

const salesDataPartial = getDataFromDb();
const salesData = salesDataPartial.map((productSale) => ({
  ...productSale,
  sum: productSale.unitsSold * productSale.pricePerUnit,
}));
console.log(salesData);
generateReport(salesData);
