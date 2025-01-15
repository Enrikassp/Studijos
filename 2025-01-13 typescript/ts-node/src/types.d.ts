type Salis = "LT" | "LV" | "PL" | "DE"; //Iš anksto aprašytas string tipas

type SaliesObj = {
  pilnasPavadinimas: string;
  trumpinys?: Salis;
  // funkcija, kuri nieko nereturnina - jos tipas turėtų būti void;
  printMyself(): void;
} & IDataRecord;

interface IDataRecord {
  id: number;
}
interface ISaliesObjektas extends IDataRecord {
  pilnasPavadinimas: string;
  trumpinys?: Salis;
  // funkcija, kuri nieko nereturnina - jos tipas turėtų būti void;
  printMyself(): void;
}

type ValidationResult = {
  status: boolean;
  errorCode: "TOO_SHORT_USERNAME" | "PASSWORD_NO_UPPERCASE";
};

type CarColor = "red" | "green" | "blue" | "orange" | "black" | "white";
type CarMarks = "AUDI" | "Mercedes" | "Ford" | "Mazda" | "Opel" | "BMW";

type CarType = {
  marke: CarMarks;
  metai: number;
  spalva: CarColor;
  galiaKw: number;
};

type ProductSaleData = {
  productName: string;
  category: string;
  unitsSold: number;
  pricePerUnit: number;
  sum?: number;
};
