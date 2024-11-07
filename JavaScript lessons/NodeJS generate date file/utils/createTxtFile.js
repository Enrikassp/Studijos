import * as fs from "fs";

export function createTxtFile(fileName, writingText) {
  const writer = fs.createWriteStream(`./writeResults/${fileName}.txt`);
  writer.write(writingText);
}
