import * as fs from "fs";

export function readJsonFile(filePath) {
  const fileData = fs.readFileSync(filePath);
  const parsedData = JSON.parse(fileData);
  return parsedData;
}
