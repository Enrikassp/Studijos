import ExcelJS from "exceljs";

console.log(ExcelJS);
const headers = [
  "Produktas",
  "Kategorija",
  "Parduota(vnt.)",
  "Kaina(vnt.)",
  "Iš viso",
];

const keys = ["productName", "category", "unitsSold", "pricePerUnit", "sum"];

function createTableHeaders(
  row: number,
  column: number,
  headers: string[],
  sheet: ExcelJS.Worksheet
) {
  headers.forEach((header, index) => {
    const cell = sheet.getCell(row, column + index);
    cell.value = header;
    cell.font = { bold: true };
  });
}

function createTableData(
  data: any[],
  keys: string[],
  cell: ExcelJS.Cell,
  woorksheet: ExcelJS.Worksheet
): void {
  data.forEach((saleDate, rowIndex) => {
    keys.forEach((key, columnIndex) => {
      const dataCell = woorksheet.getCell(
        cell.fullAddress.row + rowIndex,
        cell.fullAddress.col + columnIndex
      );
      dataCell.value = saleDate[key];
    });
  });
}

export async function generateReport(data: ProductSaleData[]) {
  const workbook = new ExcelJS.Workbook(); // Excel workbooko sukūrimas
  const sheet = workbook.addWorksheet("Produktų pardavimo ataskaita"); // Excel darbo lapo sukūrimas

  sheet.mergeCells("A1:F1"); //Celių nuo A1 iki F1 sujungimas

  const a1 = sheet.getCell("A1"); // Celės gavimas pagal pavadinimą
  a1.value = "Produktų pardavimo ataskaita"; // Celės reikšmės pridėjimas
  a1.font = { name: "Calibri", size: 20, bold: true }; // Celės šrifto aprašymas
  a1.alignment = { horizontal: "center", vertical: "middle" }; // celės horizontalios ir vertikalios lygiuotės keitimas

  sheet.getRow(1).height = 55; // Eilutės aukščio numatymas

  createTableHeaders(4, 1, headers, sheet); //stulpeliu pavadinimu eilutes kurimas
  const tableStartCell = sheet.getCell("A5");
  createTableData(data, keys, tableStartCell, sheet); // Visos lenteles sukurimas
  const tableEndRow = data.length + tableStartCell.fullAddress.row;
  const tableEndCol = keys.length + tableStartCell.fullAddress.col;
  sheet.getCell(tableEndRow + 1, tableEndCol - 1).value = "Parduota už:";
  sheet.getCell(tableEndRow + 2, tableEndCol - 1).value = "Parduota prekių:";

  let parduotuPrekiuKiekis = 0;
  let parduotuPrekiuBendraSuma = 0;

  for (const row of data) {
    parduotuPrekiuKiekis += row.unitsSold;
    parduotuPrekiuBendraSuma += row.sum === undefined ? 0 : row.sum;
  }

  sheet.getCell(tableEndRow + 1, tableEndCol).value = parduotuPrekiuKiekis;
  sheet.getCell(tableEndRow + 2, tableEndCol + 1).value =
    parduotuPrekiuBendraSuma;
  await workbook.xlsx.writeFile("report.xlsx"); // Excel woorkbook'o failo sukūrimas
}
