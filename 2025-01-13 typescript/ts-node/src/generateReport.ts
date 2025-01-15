import ExcelJS, { Workbook } from "exceljs";

console.log(ExcelJS);
const headers = [
	"Produktas",
	"Kategorija",
	"Parduota(vnt.)",
	"Kaina(vnt.)",
	"Iš viso",
];

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

	await workbook.xlsx.writeFile("report.xlsx"); // Excel woorkbook'o failo sukūrimas
}
