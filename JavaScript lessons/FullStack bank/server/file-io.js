import * as fs from "fs";

export async function readFromFile(path) {
  const resultEncoded = await fs.promises.readFile(
    `./jsonData/${path}`,
    "utf-8"
  );
  const stringifyJSON = resultEncoded.toString();
  return JSON.parse(stringifyJSON);
}

export async function writeToFile(path, data) {
  try {
    await fs.promises.writeFile(`./jsonData/${path}`, JSON.stringify(data));
    console.log("Failas perrasytas sėkmingai");
  } catch (err) {
    console.log("Irasant faila kilo klaida");
    console.log(err);
  }
}
